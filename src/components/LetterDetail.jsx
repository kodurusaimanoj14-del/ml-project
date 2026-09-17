import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  Pencil 
} from './Icons';
import { Illustration } from './illustrations/Illustration';
import { LetterCanvas } from './LetterCanvas';
import { HowToWriteModal } from './HowToWriteModal';
import { audioService } from '../utils/audioUtils';

export const LetterDetail = ({ 
  letter, 
  allLetters, 
  onBack, 
  onSelectLetter,
  onOpenWordPage
}) => {
  const [activeTab, setActiveTab] = useState(
    typeof window !== 'undefined' && window.location.hash.includes('/trace') ? 'trace' : 'learn'
  );
  const [isPlayingLetterAudio, setIsPlayingLetterAudio] = useState(false);
  const [isPlayingWordAudio, setIsPlayingWordAudio] = useState(false);
  const [showWriteModal, setShowWriteModal] = useState(false);

  const handleWordPageClick = () => {
    audioService.playClick();
    if (onOpenWordPage) {
      onOpenWordPage({
        word: letter.word,
        translit: letter.wordTranslit,
        meaning: letter.meaning,
        letter: letter.char,
        explanation: letter.explanation,
        svgKey: letter.svgKey,
        accentColor: letter.accentColor
      });
    } else {
      setShowWriteModal(true);
    }
  };

  const currentIndex = allLetters.findIndex((l) => l.id === letter.id);
  const prevLetter = currentIndex > 0 ? allLetters[currentIndex - 1] : allLetters[allLetters.length - 1];
  const nextLetter = currentIndex < allLetters.length - 1 ? allLetters[currentIndex + 1] : allLetters[0];

  // Auto-play audio when navigating to a new letter
  useEffect(() => {
    audioService.speak(letter.char, letter.translit);
  }, [letter.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        onSelectLetter(prevLetter);
      } else if (e.key === 'ArrowRight') {
        onSelectLetter(nextLetter);
      } else if (e.key === 'Escape') {
        if (showWriteModal) setShowWriteModal(false);
        else onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [letter.id, prevLetter, nextLetter, onSelectLetter, onBack, showWriteModal]);

  const playLetterSound = () => {
    setIsPlayingLetterAudio(true);
    audioService.playLetterSelect();
    audioService.speak(letter.char, letter.translit);
    setTimeout(() => setIsPlayingLetterAudio(false), 1000);
  };

  const playWordSound = () => {
    setIsPlayingWordAudio(true);
    audioService.playClick();
    audioService.speak(letter.word, letter.wordTranslit);
    setTimeout(() => setIsPlayingWordAudio(false), 1000);
  };

  const playSlowSyllables = () => {
    audioService.playClick();
    const chars = Array.from(new Intl.Segmenter('te', { granularity: 'grapheme' }).segment(letter.word)).map(s => s.segment);
    audioService.speakSyllables(chars);
  };

  return (
    <div className="letter-detail-view" style={{ '--detail-accent': letter.accentColor }}>
      {/* Top Bar Navigation */}
      <div className="detail-top-nav">
        <button className="nav-back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>అక్షరమాల (Back to Letters)</span>
        </button>

        <div className="letter-counter-badge">
          <span>అక్షరం {currentIndex + 1} / {allLetters.length}</span>
        </div>

        <div className="prev-next-controls">
          <button 
            className="pager-btn" 
            onClick={() => {
              audioService.playClick();
              onSelectLetter(prevLetter);
            }}
            title={`Previous: ${prevLetter.char}`}
          >
            <ChevronLeft size={22} />
            <span className="pager-char">{prevLetter.char}</span>
          </button>
          <button 
            className="pager-btn" 
            onClick={() => {
              audioService.playClick();
              onSelectLetter(nextLetter);
            }}
            title={`Next: ${nextLetter.char}`}
          >
            <span className="pager-char">{nextLetter.char}</span>
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="detail-tabs">
        <button 
          className={`detail-tab-btn ${activeTab === 'learn' ? 'active' : ''}`}
          onClick={() => {
            audioService.playClick();
            setActiveTab('learn');
          }}
        >
          <BookOpen size={18} />
          <span>నేర్చుకుందాం (Learn Letter)</span>
        </button>
        <button 
          className={`detail-tab-btn ${activeTab === 'trace' ? 'active' : ''}`}
          onClick={() => {
            audioService.playClick();
            setActiveTab('trace');
          }}
        >
          <Pencil size={18} />
          <span>అక్షరం రాద్దాం (Trace & Practice)</span>
        </button>
      </div>

      {/* Main Content Area */}
      {activeTab === 'learn' ? (
        <div className="detail-main-card">
          <div className="detail-grid">
            {/* Left Column: Big Letter and Sound */}
            <div className="detail-letter-hero">
              <div className="hero-char-box" style={{ backgroundColor: letter.bgSoft }}>
                <span className="hero-char">{letter.char}</span>
                <div className="hero-phonetic-badge">
                  <span className="hero-translit">"{letter.translit}"</span>
                </div>
              </div>

              <div className="hero-audio-actions">
                <button 
                  className={`big-audio-btn ${isPlayingLetterAudio ? 'pulse' : ''}`}
                  onClick={playLetterSound}
                >
                  <Volume2 size={24} />
                  <span>అక్షర ధ్వని వినండి</span>
                </button>
              </div>

              <div className="letter-category-tag">
                <Sparkles size={16} />
                <span>{letter.category}</span>
                {letter.varga && <span className="varga-subtag">• {letter.varga}</span>}
              </div>
            </div>

            {/* Right Column: Illustration, Word, How to Write, and Meaning */}
            <div className="detail-word-hero">
              <div 
                className="hero-illustration-card clickable-card"
                onClick={handleWordPageClick}
                title="రాయడం ఎలాగో చూడటానికి క్లిక్ చేయండి (Click to see how to write)"
              >
                <Illustration name={letter.svgKey} size={180} />
                <span className="click-write-badge">✍️ రాయడం చూడండి (Click to Write)</span>
              </div>

              <div className="hero-word-card">
                <div className="word-header-row">
                  <div 
                    className="word-click-area"
                    onClick={handleWordPageClick}
                    title="ఈ పదం ఎలా రాయాలో చూడటానికి క్లిక్ చేయండి"
                  >
                    <div className="word-title-group">
                      <h2 className="hero-word-te">{letter.word}</h2>
                      <span className="word-interactive-tag">
                        ✍️ క్లిక్ చేసి రాయండి
                      </span>
                    </div>
                    <p className="hero-word-en">
                      <span className="word-translit">{letter.wordTranslit}</span> — {letter.meaning}
                    </p>
                  </div>
                  <div className="word-audio-actions-group">
                    <button 
                      className={`word-audio-btn ${isPlayingWordAudio ? 'pulse' : ''}`}
                      onClick={playWordSound}
                      title="పదం ఉచ్చారణ వినండి"
                    >
                      <Volume2 size={24} />
                    </button>
                  </div>
                </div>

                {/* HOW TO WRITE WORD TRIGGER BUTTON */}
                <div className="how-to-write-banner">
                  <button 
                    className="how-to-write-btn"
                    onClick={handleWordPageClick}
                  >
                    <Pencil size={20} />
                    <span>"{letter.word}" పదం రాయడం ఎలా? (How to Write)</span>
                  </button>

                  <button 
                    className="syllable-listen-btn"
                    onClick={playSlowSyllables}
                    title="అక్షరాలను విడదీసి నిదానంగా వినండి"
                  >
                    <Volume2 size={16} />
                    <span>విడదీసి వినండి (Slow)</span>
                  </button>
                </div>

                <div className="hero-explanation-box">
                  <div className="explanation-title">
                    <Lightbulb size={18} />
                    <span>సులభమైన వివరణ (Simple Explanation):</span>
                  </div>
                  <p className="explanation-text">{letter.explanation}</p>
                </div>

                {letter.funFact && (
                  <div className="fun-fact-box">
                    <span className="fun-fact-badge">సరదా విషయం:</span>
                    <p className="fun-fact-text">{letter.funFact}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="detail-trace-view">
          <LetterCanvas char={letter.char} color={letter.accentColor} />
        </div>
      )}

      {/* Quick Jump Bottom Letter Strip */}
      <div className="letter-quick-strip">
        <span className="strip-label">అక్షరాల జాబితా:</span>
        <div className="strip-scroll">
          {allLetters.map((l) => (
            <button
              key={l.id}
              className={`strip-letter-btn ${l.id === letter.id ? 'active' : ''}`}
              onClick={() => {
                audioService.playClick();
                onSelectLetter(l);
              }}
              title={`${l.char} (${l.translit})`}
            >
              {l.char}
            </button>
          ))}
        </div>
      </div>

      {/* HOW TO WRITE MODAL */}
      {showWriteModal && (
        <HowToWriteModal
          word={letter.word}
          translit={letter.wordTranslit}
          meaning={letter.meaning}
          letter={letter.char}
          onClose={() => setShowWriteModal(false)}
        />
      )}
    </div>
  );
};
export default LetterDetail;
