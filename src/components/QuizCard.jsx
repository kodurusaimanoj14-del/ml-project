import React, { useEffect } from 'react';
import { Volume2, CheckCircle, XCircle, ArrowRight } from './Icons';
import { Illustration } from './illustrations/Illustration';
import { audioService } from '../utils/audioUtils';

export const QuizCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion
}) => {
  const hasAnswered = selectedAnswer !== null;

  // For audio mode: auto-play question audio on mount or question change
  useEffect(() => {
    if (question.type === 'mode_d') {
      audioService.speak(question.audioText);
    }
  }, [question.id, question.type, question.audioText]);

  const handleOptionClick = (option) => {
    if (hasAnswered) return;
    onSelectAnswer(option);
  };

  const handleReplayAudio = () => {
    audioService.playClick();
    audioService.speak(question.audioText);
  };

  return (
    <div className="quiz-card-container">
      {/* Question Prompt */}
      <div className="quiz-question-header">
        <h3 className="quiz-question-title">{question.promptTe}</h3>
        <p className="quiz-question-sub">{question.promptEn}</p>
      </div>

      {/* Question Central Visual / Stimulus */}
      <div className="quiz-stimulus-box">
        {/* Mode A: Picture display */}
        {question.type === 'mode_a' && (
          <div className="stimulus-picture">
            <Illustration name={question.svgKey} size={150} />
          </div>
        )}

        {/* Mode B: Big Letter display */}
        {question.type === 'mode_b' && (
          <div className="stimulus-letter-card">
            <span className="stimulus-char">{question.char}</span>
            <button
              className="stimulus-audio-btn"
              onClick={() => {
                audioService.playLetterSelect();
                audioService.speak(question.char);
              }}
              title="ధ్వని వినండి"
            >
              <Volume2 size={22} />
            </button>
          </div>
        )}

        {/* Mode C: Telugu Word display */}
        {question.type === 'mode_c' && (
          <div className="stimulus-word-card">
            <div className="stimulus-word-text">
              <span className="word-large">{question.wordTe}</span>
              <span className="word-meaning-sub">({question.wordEn})</span>
            </div>
            <button
              className="stimulus-audio-btn"
              onClick={() => {
                audioService.playClick();
                audioService.speak(question.wordTe);
              }}
              title="ధ్వని వినండి"
            >
              <Volume2 size={22} />
            </button>
          </div>
        )}

        {/* Mode D: Listen & Identify */}
        {question.type === 'mode_d' && (
          <div className="stimulus-audio-card">
            <button className="big-listen-btn" onClick={handleReplayAudio}>
              <Volume2 size={36} />
              <span>మళ్ళీ వినండి (Listen Again)</span>
            </button>
            <p className="audio-hint-text">ధ్వని విని సరైన సమాధానాన్ని ఎంచుకోండి</p>
          </div>
        )}
      </div>

      {/* Options Grid */}
      <div className={`quiz-options-grid ${question.type === 'mode_c' ? 'image-options' : 'text-options'}`}>
        {question.options.map((option, idx) => {
          let btnStateClass = '';
          if (hasAnswered) {
            if (option.id === question.correctOptionId) {
              btnStateClass = 'correct-choice';
            } else if (option.id === selectedAnswer.id) {
              btnStateClass = 'wrong-choice';
            } else {
              btnStateClass = 'dimmed-choice';
            }
          }

          if (question.type === 'mode_c') {
            // Mode C: 4 Image Option Cards
            return (
              <button
                key={option.id}
                className={`option-image-card ${btnStateClass}`}
                onClick={() => handleOptionClick(option)}
                disabled={hasAnswered}
              >
                <div className="option-image-preview">
                  <Illustration name={option.svgKey} size={90} />
                </div>
                <div className="option-image-footer">
                  <span className="option-label">{String.fromCharCode(65 + idx)}.</span>
                  <span className="option-text-name">{option.text}</span>
                  {hasAnswered && option.id === question.correctOptionId && (
                    <CheckCircle size={20} className="result-icon correct" />
                  )}
                  {hasAnswered && option.id === selectedAnswer.id && option.id !== question.correctOptionId && (
                    <XCircle size={20} className="result-icon wrong" />
                  )}
                </div>
              </button>
            );
          }

          // Mode A, B, D: Text/Word/Letter Choice Buttons
          return (
            <button
              key={option.id}
              className={`option-text-btn ${btnStateClass}`}
              onClick={() => handleOptionClick(option)}
              disabled={hasAnswered}
            >
              <span className="option-bullet">{String.fromCharCode(65 + idx)}</span>
              <div className="option-content">
                <span className="option-main-text">{option.text}</span>
                {option.subtext && <span className="option-subtext">{option.subtext}</span>}
              </div>
              {hasAnswered && option.id === question.correctOptionId && (
                <CheckCircle size={22} className="result-icon correct" />
              )}
              {hasAnswered && option.id === selectedAnswer.id && option.id !== question.correctOptionId && (
                <XCircle size={22} className="result-icon wrong" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Feedback Box & Next Button */}
      {hasAnswered && (
        <div className={`answer-feedback-banner ${selectedAnswer.id === question.correctOptionId ? 'success' : 'correction'}`}>
          <div className="feedback-message">
            {selectedAnswer.id === question.correctOptionId ? (
              <div className="feedback-content">
                <span className="feedback-title">🎉 అద్భుతం! (Correct Answer!)</span>
                <p className="feedback-detail">{question.explanation}</p>
              </div>
            ) : (
              <div className="feedback-content">
                <span className="feedback-title">సరైన సమాధానం (Correction):</span>
                <p className="feedback-detail">
                  <strong>{question.correctAnswerDisplay}</strong> — {question.explanation}
                </p>
              </div>
            )}
          </div>

          <button
            className="next-question-btn"
            onClick={() => {
              audioService.playClick();
              onNextQuestion();
            }}
          >
            <span>{isLastQuestion ? 'ఫలితాలు చూడండి (View Results)' : 'తరువాతి ప్రశ్న (Next)'}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
export default QuizCard;
