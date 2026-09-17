import React, { useState, useMemo } from 'react';
import { Volume2, Search, Sparkles, ArrowRight, X, Pencil } from './Icons';
import { VOCABULARY_CATEGORIES, VOCABULARY_ITEMS } from '../data/teluguData';
import { Illustration } from './illustrations/Illustration';
import { HowToWriteModal } from './HowToWriteModal';
import { audioService } from '../utils/audioUtils';

export const VocabularyPage = ({ onSelectLetterByChar, onOpenWordPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [spotlightItem, setSpotlightItem] = useState(null);
  const [writingItem, setWritingItem] = useState(null);

  const filteredItems = useMemo(() => {
    let result = VOCABULARY_ITEMS;

    if (activeCategory !== 'all') {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.telugu.includes(q) ||
          item.english.toLowerCase().includes(q) ||
          item.translit.toLowerCase().includes(q) ||
          item.letter.includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const handleCardClick = (item) => {
    audioService.playLetterSelect();
    audioService.speak(item.telugu, item.translit);
    if (onOpenWordPage) {
      onOpenWordPage({
        word: item.telugu,
        translit: item.translit,
        meaning: item.english,
        letter: item.letter,
        svgKey: item.svgKey
      });
    } else {
      setSpotlightItem(item);
    }
  };

  const handlePlayAudio = (e, item) => {
    e.stopPropagation();
    audioService.playClick();
    audioService.speak(item.telugu, item.translit);
  };

  return (
    <div className="vocabulary-page">
      {/* Header */}
      <div className="page-header-banner vocab-banner">
        <div className="page-header-text">
          <div className="banner-badge">
            <Sparkles size={16} />
            <span>చిత్రాలతో పదాలు & రాత</span>
          </div>
          <h1 className="page-title">తెలుగు పదకోశం (Telugu Vocabulary)</h1>
          <p className="page-subtitle">
            Explore Telugu words with colorful pictures, audio pronunciation, and handwriting guides!
          </p>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="controls-bar vocab-controls">
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="పదాన్ని శోధించండి (Search word: మామిడి, lion, mango)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
              ×
            </button>
          )}
        </div>

        <div className="category-scroll-row">
          {VOCABULARY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cat-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                audioService.playClick();
                setActiveCategory(cat.id);
              }}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="vocab-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="vocab-card"
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCardClick(item);
              }}
            >
              <div className="vocab-card-header">
                {/* Clickable starting letter tag */}
                <button
                  className="letter-jump-tag"
                  onClick={(e) => {
                    e.stopPropagation();
                    audioService.playClick();
                    if (onSelectLetterByChar) onSelectLetterByChar(item.letter);
                  }}
                  title={`Go to letter ${item.letter}`}
                >
                  <span>అక్షరం: <strong>{item.letter}</strong></span>
                </button>

                <button
                  className="card-listen-btn"
                  onClick={(e) => handlePlayAudio(e, item)}
                  title="ధ్వని వినండి"
                  aria-label={`Listen to ${item.telugu}`}
                >
                  <Volume2 size={17} />
                </button>
              </div>

              <div className="vocab-card-illustration">
                <Illustration name={item.svgKey} size={110} />
              </div>

              <div className="vocab-card-body">
                <h3 className="vocab-telugu-word">{item.telugu}</h3>
                <p className="vocab-translit">{item.translit}</p>
                <p className="vocab-english">{item.english}</p>
                <span className="card-write-hint">✍️ రాయడం చూడండి</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-search-state">
          <p>ఏ పదం కనిపించలేదు.</p>
          <button
            className="clear-filters-btn"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
          >
            అన్ని పదాలను చూపించు (Show All)
          </button>
        </div>
      )}

      {/* Detailed Spotlight Modal */}
      {spotlightItem && !writingItem && (
        <div className="spotlight-modal-overlay" onClick={() => setSpotlightItem(null)}>
          <div className="spotlight-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSpotlightItem(null)}>
              <X size={20} />
            </button>

            <div className="modal-illustration-wrapper">
              <Illustration name={spotlightItem.svgKey} size={160} />
            </div>

            <div className="modal-info-wrapper">
              <h2 className="modal-telugu-title">{spotlightItem.telugu}</h2>
              <p className="modal-translit-text">{spotlightItem.translit}</p>
              <p className="modal-english-text">{spotlightItem.english}</p>

              <div className="modal-actions">
                <button
                  className="modal-audio-btn"
                  onClick={() => audioService.speak(spotlightItem.telugu, spotlightItem.translit)}
                >
                  <Volume2 size={20} />
                  <span>ధ్వని వినండి (Listen)</span>
                </button>

                <button
                  className="modal-write-btn"
                  onClick={() => {
                    audioService.playClick();
                    setWritingItem(spotlightItem);
                  }}
                >
                  <Pencil size={18} />
                  <span>రాయడం నేర్చుకోండి (How to Write)</span>
                </button>

                <button
                  className="modal-letter-btn"
                  onClick={() => {
                    setSpotlightItem(null);
                    if (onSelectLetterByChar) onSelectLetterByChar(spotlightItem.letter);
                  }}
                >
                  <span>"{spotlightItem.letter}" అక్షరం చూడండి</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HOW TO WRITE MODAL */}
      {writingItem && (
        <HowToWriteModal
          word={writingItem.telugu}
          translit={writingItem.translit}
          meaning={writingItem.english}
          letter={writingItem.letter}
          onClose={() => setWritingItem(null)}
        />
      )}
    </div>
  );
};
export default VocabularyPage;
