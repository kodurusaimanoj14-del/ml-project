import React, { useState, useMemo } from 'react';
import { Search, Sparkles } from './Icons';
import { LetterCard } from './LetterCard';
import { HowToWriteModal } from './HowToWriteModal';
import { audioService } from '../utils/audioUtils';

export const AlphabetGrid = ({ letters, onSelectLetter, onOpenWordPage }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedVargas, setShowAdvancedVargas] = useState(false);
  const [writingLetter, setWritingLetter] = useState(null);

  // Simplified child-friendly primary filter tabs
  const mainFilterTabs = [
    { id: 'all', label: '🌟 అన్నీ (All 52)', count: letters.length },
    { id: 'vowels', label: '🍎 అచ్చులు (Vowels)', count: 16 },
    { id: 'consonants', label: '🐘 హల్లులు (Consonants)', count: 36 }
  ];

  const vargaFilterTabs = [
    { id: 'ka_varga', label: 'క వర్గం', count: 5 },
    { id: 'cha_varga', label: 'చ వర్గం', count: 5 },
    { id: 'ta_varga', label: 'ట వర్గం', count: 5 },
    { id: 'tha_varga', label: 'త వర్గం', count: 5 },
    { id: 'pa_varga', label: 'ప వర్గం', count: 5 }
  ];

  const filteredLetters = useMemo(() => {
    let result = letters;

    // Category filter
    if (activeFilter === 'vowels') {
      result = result.filter((l) => l.type === 'vowel');
    } else if (activeFilter === 'consonants') {
      result = result.filter((l) => l.type === 'consonant');
    } else if (activeFilter === 'ka_varga') {
      result = result.filter((l) => l.varga === 'క వర్గం');
    } else if (activeFilter === 'cha_varga') {
      result = result.filter((l) => l.varga === 'చ వర్గం');
    } else if (activeFilter === 'ta_varga') {
      result = result.filter((l) => l.varga === 'ట వర్గం');
    } else if (activeFilter === 'tha_varga') {
      result = result.filter((l) => l.varga === 'త వర్గం');
    } else if (activeFilter === 'pa_varga') {
      result = result.filter((l) => l.varga === 'ప వర్గం');
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (l) =>
          l.char.includes(q) ||
          l.translit.toLowerCase().includes(q) ||
          l.word.includes(q) ||
          l.meaning.toLowerCase().includes(q) ||
          l.wordTranslit.toLowerCase().includes(q)
      );
    }

    return result;
  }, [letters, activeFilter, searchQuery]);

  return (
    <div className="alphabet-grid-section">
      {/* Hero Welcome Banner */}
      <div className="hero-banner">
        <div className="hero-banner-content">
          <div className="banner-badge">
            <Sparkles size={16} />
            <span>ప్రారంభకుల కోసం తెలుగు వర్ణమాల</span>
          </div>
          <h1 className="hero-title">తెలుగు నేర్చుకుందాం</h1>
          <p className="hero-subtitle">
            Let's Learn Telugu Alphabet with sounds, pictures, handwriting practice, and fun!
          </p>
          <div className="alphabet-stats">
            <span className="stat-pill">
              <strong>16</strong> అచ్చులు (Vowels)
            </span>
            <span className="stat-pill">
              <strong>36</strong> హల్లులు (Consonants)
            </span>
            <span className="stat-pill highlight">
              <strong>52</strong> అక్షరాలు (Total Letters)
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="controls-bar">
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="అక్షరం లేదా పదం శోధించండి (Search: అమ్మ, cow, ka, illu)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
              ×
            </button>
          )}
        </div>

        {/* Clean, Simple Primary Filter Tabs */}
        <div className="filter-scroll-row">
          {mainFilterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-pill-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => {
                audioService.playClick();
                setActiveFilter(tab.id);
              }}
            >
              <span>{tab.label}</span>
              <span className="pill-count">{tab.count}</span>
            </button>
          ))}

          <button
            className={`varga-toggle-btn ${showAdvancedVargas ? 'open' : ''}`}
            onClick={() => setShowAdvancedVargas(!showAdvancedVargas)}
            title="వర్గాల విభజన చూపించు"
          >
            <span>{showAdvancedVargas ? 'వర్గాలు దాచు ▴' : 'మరిన్ని వర్గాలు ▾'}</span>
          </button>
        </div>

        {/* Secondary Sub-Vargas row (collapsible to keep UI ultra-simple for kids) */}
        {showAdvancedVargas && (
          <div className="sub-filter-row">
            <span className="sub-filter-title">వర్గాలు:</span>
            {vargaFilterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill-btn sub-pill ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => {
                  audioService.playClick();
                  setActiveFilter(tab.id);
                }}
              >
                <span>{tab.label}</span>
                <span className="pill-count">{tab.count}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Alphabet Grid */}
      {filteredLetters.length > 0 ? (
        <div className="letters-grid">
          {filteredLetters.map((letter) => (
            <LetterCard 
              key={letter.id} 
              letter={letter} 
              onSelect={onSelectLetter}
              onWriteWord={(l) => {
                audioService.playClick();
                if (onOpenWordPage) {
                  onOpenWordPage({
                    word: l.word,
                    translit: l.wordTranslit,
                    meaning: l.meaning,
                    letter: l.char,
                    explanation: l.explanation,
                    svgKey: l.svgKey,
                    accentColor: l.accentColor
                  });
                } else {
                  setWritingLetter(l);
                }
              }}
            />
          ))}
        </div>
      ) : (
        <div className="empty-search-state">
          <p>ఏ అక్షరం కనిపించలేదు. వేరే శోధనను ప్రయత్నించండి!</p>
          <button
            className="clear-filters-btn"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
          >
            రీసెట్ చేయి (Show All)
          </button>
        </div>
      )}

      {/* HOW TO WRITE MODAL (Triggered directly from cards) */}
      {writingLetter && (
        <HowToWriteModal
          word={writingLetter.word}
          translit={writingLetter.wordTranslit}
          meaning={writingLetter.meaning}
          letter={writingLetter.char}
          onClose={() => setWritingLetter(null)}
        />
      )}
    </div>
  );
};
export default AlphabetGrid;
