import React from 'react';
import { Volume2, ChevronRight } from './Icons';
import { Illustration } from './illustrations/Illustration';
import { audioService } from '../utils/audioUtils';

export const LetterCard = ({ letter, onSelect, onWriteWord }) => {
  const handleAudio = (e) => {
    e.stopPropagation();
    audioService.playLetterSelect();
    audioService.speak(letter.char, letter.translit);
  };

  const handleCardClick = () => {
    audioService.playLetterSelect();
    audioService.speak(letter.char, letter.translit);
    onSelect(letter);
  };

  return (
    <div
      className="letter-card"
      onClick={handleCardClick}
      style={{ '--card-accent': letter.accentColor, '--card-bg-soft': letter.bgSoft }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      aria-label={`Telugu letter ${letter.char}, pronunciation ${letter.translit}, word ${letter.word}`}
    >
      <div className="card-top-row">
        <span className="card-translit">{letter.translit}</span>
        <div className="card-actions-top">
          {onWriteWord && (
            <button
              className="card-quick-write-btn"
              onClick={(e) => {
                e.stopPropagation();
                onWriteWord(letter);
              }}
              title={`"${letter.word}" పదం రాయడం ఎలా? (How to Write)`}
              aria-label="How to write word"
            >
              ✍️
            </button>
          )}
          <button
            className="card-audio-btn"
            onClick={handleAudio}
            title={`Listen to ${letter.char}`}
            aria-label={`Play audio for ${letter.char}`}
          >
            <Volume2 size={16} />
          </button>
        </div>
      </div>

      <div className="card-char-wrapper">
        <span className="card-char">{letter.char}</span>
      </div>

      <div className="card-footer-row">
        <div className="card-mini-illustration">
          <Illustration name={letter.svgKey} size={36} />
        </div>
        <div 
          className="card-word-info"
          onClick={(e) => {
            if (onWriteWord) {
              e.stopPropagation();
              onWriteWord(letter);
            }
          }}
          title="ఈ పదం ఎలా రాయాలో చూడటానికి క్లిక్ చేయండి"
        >
          <span className="card-word-te">{letter.word}</span>
          <span className="card-word-en">{letter.meaning}</span>
        </div>
        <div className="card-arrow-indicator">
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
};
export default LetterCard;
