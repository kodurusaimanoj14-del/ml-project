import React, { useState, useEffect } from 'react';
import { Play, Award } from './Icons';
import { TELUGU_LETTERS, VOCABULARY_ITEMS } from '../data/teluguData';
import { QuizCard } from './QuizCard';
import { QuizResult } from './QuizResult';
import { audioService } from '../utils/audioUtils';

// Helper to shuffle an array (Fisher-Yates)
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generate Questions dynamically
function generateQuestions(mode = 'all', count = 10) {
  const generated = [];
  const modes = ['mode_a', 'mode_b', 'mode_c', 'mode_d'];

  // Pool of letters and vocabulary items
  const letterPool = shuffleArray(TELUGU_LETTERS);
  const vocabPool = shuffleArray(VOCABULARY_ITEMS);

  for (let i = 0; i < count; i++) {
    // Choose mode
    let qMode = mode;
    if (mode === 'all') {
      qMode = modes[i % modes.length];
    }

    if (qMode === 'mode_a') {
      // Mode A: Identify Picture to Telugu word
      // Target item from vocabulary or letters
      const target = vocabPool[i % vocabPool.length];
      // 3 wrong distractors
      const distractors = vocabPool
        .filter((v) => v.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = shuffleArray([
        { id: target.id, text: target.telugu, subtext: target.english },
        ...distractors.map((d) => ({ id: d.id, text: d.telugu, subtext: d.english }))
      ]);

      generated.push({
        id: `qa_${i}_${target.id}`,
        type: 'mode_a',
        promptTe: 'ఈ చిత్రానికి సరైన తెలుగు పదం ఏది?',
        promptEn: 'Which is the correct Telugu word for this picture?',
        svgKey: target.svgKey,
        correctOptionId: target.id,
        correctAnswerDisplay: target.telugu,
        explanation: `చిత్రంలో ఉన్నది ${target.telugu} (${target.english}).`,
        options
      });
    } else if (qMode === 'mode_b') {
      // Mode B: Identify the Letter
      const targetLetter = letterPool[i % letterPool.length];
      const distractors = letterPool
        .filter((l) => l.id !== targetLetter.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      // Either ask for word association or transliteration
      const isWordType = i % 2 === 0;

      if (isWordType) {
        const options = shuffleArray([
          { id: targetLetter.id, text: targetLetter.word, subtext: targetLetter.meaning },
          ...distractors.map((d) => ({ id: d.id, text: d.word, subtext: d.meaning }))
        ]);

        generated.push({
          id: `qb_${i}_${targetLetter.id}`,
          type: 'mode_b',
          promptTe: `"${targetLetter.char}" అక్షరంతో మొదలయ్యే పదం ఏది?`,
          promptEn: `Which word begins with the letter "${targetLetter.char}"?`,
          char: targetLetter.char,
          correctOptionId: targetLetter.id,
          correctAnswerDisplay: targetLetter.word,
          explanation: `"${targetLetter.char}" తో మొదలయ్యే సరైన పదం: ${targetLetter.word} (${targetLetter.meaning}).`,
          options
        });
      } else {
        const options = shuffleArray([
          { id: targetLetter.id, text: targetLetter.translit, subtext: targetLetter.ipa },
          ...distractors.map((d) => ({ id: d.id, text: d.translit, subtext: d.ipa }))
        ]);

        generated.push({
          id: `qb_${i}_${targetLetter.id}`,
          type: 'mode_b',
          promptTe: `ఈ అక్షరం యొక్క సరైన ఉచ్చారణ (Pronunciation) ఏది?`,
          promptEn: `What is the correct pronunciation of "${targetLetter.char}"?`,
          char: targetLetter.char,
          correctOptionId: targetLetter.id,
          correctAnswerDisplay: targetLetter.translit,
          explanation: `"${targetLetter.char}" అక్షరాన్ని "${targetLetter.translit}" (${targetLetter.ipa}) అని పలుకుతారు.`,
          options
        });
      }
    } else if (qMode === 'mode_c') {
      // Mode C: Show Telugu word, select matching picture from 4 image cards
      const target = vocabPool[i % vocabPool.length];
      const distractors = vocabPool
        .filter((v) => v.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = shuffleArray([
        { id: target.id, text: target.english, svgKey: target.svgKey },
        ...distractors.map((d) => ({ id: d.id, text: d.english, svgKey: d.svgKey }))
      ]);

      generated.push({
        id: `qc_${i}_${target.id}`,
        type: 'mode_c',
        promptTe: `"${target.telugu}" పదానికి సరైన చిత్రాన్ని ఎంచుకోండి`,
        promptEn: `Select the correct picture for "${target.telugu}" (${target.english})`,
        wordTe: target.telugu,
        wordEn: target.english,
        correctOptionId: target.id,
        correctAnswerDisplay: target.english,
        explanation: `"${target.telugu}" అంటే ఇంగ్లీషులో "${target.english}".`,
        options
      });
    } else {
      // Mode D: Listen and Identify
      const target = letterPool[i % letterPool.length];
      const distractors = letterPool
        .filter((l) => l.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = shuffleArray([
        { id: target.id, text: target.char, subtext: target.translit },
        ...distractors.map((d) => ({ id: d.id, text: d.char, subtext: d.translit }))
      ]);

      generated.push({
        id: `qd_${i}_${target.id}`,
        type: 'mode_d',
        promptTe: 'ధ్వని విని సరైన తెలుగు అక్షరాన్ని గుర్తించండి',
        promptEn: 'Listen to the audio and pick the matching Telugu character',
        audioText: target.char,
        correctOptionId: target.id,
        correctAnswerDisplay: `${target.char} (${target.translit})`,
        explanation: `వినిపించిన ధ్వని: "${target.char}" (${target.translit}).`,
        options
      });
    }
  }

  return generated;
}

export const QuizPage = ({ onReturnHome }) => {
  const [quizState, setQuizState] = useState('config'); // 'config' | 'active' | 'result'
  const [selectedMode, setSelectedMode] = useState('all');
  const [questionCount, setQuestionCount] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (window.location.hash.includes('quiz-start')) {
      handleStartQuiz();
    }
  }, []);

  const modesList = [
    { id: 'all', title: 'అన్నీ కలిపి (Mixed Quiz)', desc: 'నాలుగు పద్ధతుల్లో రకరకాల ప్రశ్నలు' },
    { id: 'mode_a', title: 'Mode A: చిత్రాన్ని గుర్తించండి', desc: 'చిత్రాన్ని చూసి సరైన తెలుగు పదం ఎంచుకోండి' },
    { id: 'mode_b', title: 'Mode B: అక్షరాన్ని గుర్తించండి', desc: 'అక్షరాన్ని చూసి ఉచ్చారణ లేదా పదాన్ని గుర్తించండి' },
    { id: 'mode_c', title: 'Mode C: సరైన చిత్రం ఎంచుకోండి', desc: 'తెలుగు పదం చూసి సరైన చిత్రాన్ని ఎంచుకోండి' },
    { id: 'mode_d', title: 'Mode D: విని గుర్తించండి (Audio)', desc: 'ధ్వని విని సరైన అక్షరం లేదా పదాన్ని గుర్తించండి' }
  ];

  const handleStartQuiz = () => {
    audioService.playClick();
    const newQuestions = generateQuestions(selectedMode, questionCount);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setHistory([]);
    setQuizState('active');
  };

  const handleSelectAnswer = (option) => {
    const currentQ = questions[currentIndex];
    setSelectedAnswer(option);

    const isCorrect = option.id === currentQ.correctOptionId;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      audioService.playCorrect();
    } else {
      audioService.playWrong();
    }

    setHistory((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedOptionId: option.id,
        selectedOptionText: option.text
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizState('result');
    }
  };

  const handleRestart = () => {
    handleStartQuiz();
  };

  return (
    <div className="quiz-page-wrapper">
      {/* 1. CONFIGURATION VIEW */}
      {quizState === 'config' && (
        <div className="quiz-config-card">
          <div className="config-banner">
            <div className="banner-badge">
              <Award size={16} />
              <span>తెలుగు క్విజ్ సమయం</span>
            </div>
            <h1 className="config-title">తెలుగు క్విజ్ (Telugu Quiz)</h1>
            <p className="config-subtitle">
              Test your Telugu knowledge with fun interactive quizzes, sounds, and instant feedback!
            </p>
          </div>

          <div className="config-section">
            <h3 className="section-label">1. క్విజ్ రకాన్ని ఎంచుకోండి (Select Quiz Mode):</h3>
            <div className="mode-options-grid">
              {modesList.map((m) => (
                <button
                  key={m.id}
                  className={`mode-select-btn ${selectedMode === m.id ? 'active' : ''}`}
                  onClick={() => {
                    audioService.playClick();
                    setSelectedMode(m.id);
                  }}
                >
                  <span className="mode-title">{m.title}</span>
                  <span className="mode-desc">{m.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="config-section">
            <h3 className="section-label">2. ప్రశ్నల సంఖ్య (Question Count):</h3>
            <div className="count-selector-row">
              {[5, 10, 20].map((cnt) => (
                <button
                  key={cnt}
                  className={`count-pill-btn ${questionCount === cnt ? 'active' : ''}`}
                  onClick={() => {
                    audioService.playClick();
                    setQuestionCount(cnt);
                  }}
                >
                  <span>{cnt} ప్రశ్నలు</span>
                </button>
              ))}
            </div>
          </div>

          <div className="config-submit-row">
            <button className="start-quiz-btn" onClick={handleStartQuiz}>
              <Play size={22} fill="currentColor" />
              <span>క్విజ్ ప్రారంభించండి (Start Quiz)</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE QUIZ VIEW */}
      {quizState === 'active' && questions.length > 0 && (
        <div className="quiz-active-wrapper">
          {/* Progress Header */}
          <div className="quiz-progress-bar-container">
            <div className="quiz-progress-info">
              <span className="q-number">
                ప్రశ్న <strong>{currentIndex + 1}</strong> / {questions.length}
              </span>
              <span className="live-score">
                స్కోరు: <strong>{score}</strong>
              </span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${((currentIndex + (selectedAnswer ? 1 : 0)) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <QuizCard
            question={questions[currentIndex]}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentIndex === questions.length - 1}
          />
        </div>
      )}

      {/* 3. RESULT VIEW */}
      {quizState === 'result' && (
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          history={history}
          onRestart={handleRestart}
          onReturnHome={onReturnHome}
        />
      )}
    </div>
  );
};
export default QuizPage;
