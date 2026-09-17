import React, { useState } from 'react';
import { Volume2, HelpCircle, Layers } from './Icons';
import { 
  GUNINTHALU_CONSONANTS, 
  GUNINTHAPU_GURTULU, 
  getGuninthamForConsonant, 
  SAMPLE_GUNINTHAM_WORDS 
} from '../data/teluguData';
import { audioService } from '../utils/audioUtils';

export const GuninthaluPage = () => {
  const [selectedConsonant, setSelectedConsonant] = useState(GUNINTHALU_CONSONANTS[0]); // default 'క'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSignsGuide, setShowSignsGuide] = useState(false);

  // Generate 16 combinations for the chosen consonant
  const combinations = getGuninthamForConsonant(
    selectedConsonant.char, 
    selectedConsonant.baseTranslit
  );

  const activeCombination = selectedItem || combinations[0];

  const handleSelectCombination = (item) => {
    setSelectedItem(item);
    audioService.playLetterSelect();
    audioService.speak(item.combinedChar);
  };

  const sampleWord = SAMPLE_GUNINTHAM_WORDS[activeCombination.combinedChar];

  return (
    <div className="guninthalu-page">
      {/* Header Banner */}
      <div className="page-header-banner guninthalu-banner">
        <div className="page-header-text">
          <div className="banner-badge">
            <Layers size={16} />
            <span>అచ్చులు + హల్లులు = గుణింతాలు</span>
          </div>
          <h1 className="page-title">తెలుగు గుణింతాలు (Guninthalu)</h1>
          <p className="page-subtitle">
            Learn how consonants combine with vowel signs to form Telugu syllables!
          </p>
        </div>

        <button 
          className="guide-toggle-btn"
          onClick={() => {
            audioService.playClick();
            setShowSignsGuide(!showSignsGuide);
          }}
        >
          <HelpCircle size={18} />
          <span>{showSignsGuide ? 'గుర్తుల పట్టిక దాచు' : 'గుణింతాల గుర్తులు (Vowel Signs)'}</span>
        </button>
      </div>

      {/* Vowel Signs (గుణింతాల గుర్తులు) Reference Chart Accordion */}
      {showSignsGuide && (
        <div className="signs-guide-card">
          <div className="signs-guide-header">
            <h3>గుణింతాల గుర్తులు (Vowel Signs System)</h3>
            <p>ప్రతి హల్లుతో అచ్చులు కలిసినప్పుడు ఏర్పడే చిహ్నాలు:</p>
          </div>
          <div className="signs-grid">
            {GUNINTHAPU_GURTULU.map((gurtu) => (
              <div key={gurtu.id} className="sign-cell">
                <span className="sign-vowel">{gurtu.vowel}</span>
                <span className="sign-symbol">{gurtu.signSymbol}</span>
                <span className="sign-name">{gurtu.name}</span>
                <span className="sign-translit">({gurtu.translit})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Consonant Selector Strip */}
      <div className="consonant-selector-box">
        <div className="selector-title-row">
          <span className="selector-label">హల్లును ఎంచుకోండి (Select Consonant):</span>
          <span className="selected-consonant-label">
            ఎంచుకున్నది: <strong>{selectedConsonant.char}</strong> ({selectedConsonant.baseTranslit}a)
          </span>
        </div>
        <div className="consonant-pills-row">
          {GUNINTHALU_CONSONANTS.map((c) => (
            <button
              key={c.char}
              className={`consonant-pill ${c.char === selectedConsonant.char ? 'active' : ''}`}
              onClick={() => {
                audioService.playClick();
                setSelectedConsonant(c);
                setSelectedItem(null); // reset to first combination
                audioService.speak(c.char);
              }}
            >
              {c.char}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Stage: Combinations Grid + Detail Card */}
      <div className="guninthalu-stage-grid">
        {/* Left: Combinations Grid */}
        <div className="combinations-panel">
          <div className="panel-heading">
            <span>{selectedConsonant.char} గుణింతం వరుస (16 రూపాలు)</span>
            <span className="click-hint">అక్షరంపై క్లిక్ చేసి ధ్వని వినండి</span>
          </div>

          <div className="combinations-grid">
            {combinations.map((item, idx) => {
              const isSelected = item.combinedChar === activeCombination.combinedChar;
              return (
                <div
                  key={idx}
                  className={`gunintham-cell ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectCombination(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleSelectCombination(item);
                  }}
                >
                  <span className="comb-char">{item.combinedChar}</span>
                  <span className="comb-translit">{item.translit}</span>
                  <span className="comb-sign-name">{item.signName}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Combination Spotlight */}
        <div className="combination-spotlight-card">
          <div className="spotlight-header">
            <span className="spotlight-badge">ఎంచుకున్న రూపం</span>
            <button
              className="spotlight-audio-btn"
              onClick={() => {
                audioService.playLetterSelect();
                audioService.speak(activeCombination.combinedChar);
              }}
              title="ధ్వని వినండి"
            >
              <Volume2 size={24} />
            </button>
          </div>

          <div className="spotlight-char-display">
            <span className="spotlight-char">{activeCombination.combinedChar}</span>
            <span className="spotlight-translit">Pronounced: "{activeCombination.translit}"</span>
          </div>

          <div className="spotlight-formula-card">
            <span className="formula-label">అక్షర సంయోగం (Formula):</span>
            <span className="formula-equation">{activeCombination.formula}</span>
            <span className="formula-breakdown">
              హల్లు ({selectedConsonant.char}) + అచ్చు ({activeCombination.vowel}) → {activeCombination.signName}
            </span>
          </div>

          {sampleWord ? (
            <div className="spotlight-word-card">
              <span className="word-card-title">ఉదాహరణ పదం (Example Word):</span>
              <div className="word-card-body">
                <div className="word-text-group">
                  <span className="word-te">{sampleWord.word}</span>
                  <span className="word-meta">{sampleWord.translit} — {sampleWord.meaning}</span>
                </div>
                <button
                  className="word-listen-btn"
                  onClick={() => {
                    audioService.playClick();
                    audioService.speak(sampleWord.word);
                  }}
                  title="Hear word"
                >
                  <Volume2 size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div className="spotlight-word-card generic">
              <span className="word-card-title">గుణింత అభ్యాసం:</span>
              <p className="generic-practice-text">
                "{activeCombination.combinedChar}" అక్షరాన్ని స్పష్టంగా పలకండి: <strong>{activeCombination.translit}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default GuninthaluPage;
