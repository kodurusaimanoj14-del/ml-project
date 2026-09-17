import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  RotateCcw, 
  Sparkles, 
  Pencil, 
  CheckCircle,
  Lightbulb,
  BookOpen
} from './Icons';
import { Illustration } from './illustrations/Illustration';
import { audioService } from '../utils/audioUtils';
import { getStrokePoints, getRelatedWordsFor, getWordSyllables } from '../utils/wordDataHelper';

export const WordDetailPage = ({ 
  wordData, 
  onBack, 
  onSelectWord, 
  onSelectLetter 
}) => {
  const { 
    word, 
    translit, 
    meaning, 
    letter = word[0], 
    explanation, 
    svgKey = "mother",
    accentColor = "#FF6B6B" 
  } = wordData;

  const syllables = getWordSyllables(word);
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [userStrokeColor, setUserStrokeColor] = useState('#FF6B6B');
  const [brushSize, setBrushSize] = useState(14);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showWellDone, setShowWellDone] = useState(false);
  const [isPlayingWordAudio, setIsPlayingWordAudio] = useState(false);
  const canvasRef = useRef(null);

  const activeChar = syllables[selectedCharIndex] || syllables[0] || word;
  const strokeInfo = getStrokePoints(activeChar);
  const relatedWords = getRelatedWordsFor(letter, word);

  const chalkColors = [
    "#FF6B6B", 
    "#FA8231", 
    "#F7B731", 
    "#20BF6B", 
    "#00D2D3", 
    "#54A0FF", 
    "#5F27CD", 
    "#FFFFFF"
  ];

  // Auto-speak word on load
  useEffect(() => {
    audioService.speak(word, translit);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [word]);

  // Reset and trigger stroke animation when active character changes
  useEffect(() => {
    clearCanvas();
    triggerAnimation();
  }, [selectedCharIndex, word]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setShowWellDone(false);
  };

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
      audioService.playLetterSelect();
      audioService.speak(activeChar);
    }, 60);
  };

  const playWordAudio = () => {
    setIsPlayingWordAudio(true);
    audioService.playClick();
    audioService.speak(word, translit);
    setTimeout(() => setIsPlayingWordAudio(false), 1000);
  };

  const playSlowSyllables = () => {
    audioService.playClick();
    audioService.speakSyllables(syllables);
  };

  const playSingleChar = (char) => {
    audioService.playClick();
    audioService.speak(char);
  };

  // Drawing canvas handlers
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = userStrokeColor;
    ctx.lineWidth = brushSize;
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setShowWellDone(true);
      audioService.playCorrect();
    }
  };

  return (
    <div className="word-detail-page" style={{ '--page-accent': accentColor }}>
      {/* Top Navigation Bar */}
      <div className="word-page-top-nav">
        <button className="nav-back-btn" onClick={onBack} title="వెనక్కి వెళ్ళండి">
          <ArrowLeft size={20} />
          <span>వెనక్కి (Back)</span>
        </button>

        <div className="word-page-badge">
          <BookOpen size={18} />
          <span>పదం నేర్చుకుందాం • Word Learning</span>
        </div>

        {onSelectLetter && (
          <button 
            className="goto-letter-btn" 
            onClick={() => onSelectLetter(letter)}
            title={`"${letter}" అక్షరం చూడండి`}
          >
            <span>అక్షరం: <strong>{letter}</strong></span>
          </button>
        )}
      </div>

      {/* 1. Word Showcase Hero Card */}
      <div className="word-hero-card">
        <div className="word-hero-grid">
          {/* Left: Illustration */}
          <div className="word-hero-visual">
            <div className="visual-circle-bg">
              <Illustration name={svgKey} size={190} />
            </div>
          </div>

          {/* Right: Word info and Audio breakdown */}
          <div className="word-hero-details">
            <div className="word-heading-row">
              <h1 className="word-display-title">{word}</h1>
              <span className="word-translit-pill">{translit}</span>
            </div>
            
            <p className="word-meaning-sub">
              <strong>English:</strong> {meaning}
            </p>

            {/* Syllable Breakdown Chips */}
            <div className="word-syllables-box">
              <span className="syllables-label">అక్షరాల ధ్వని (Syllable Sounds):</span>
              <div className="syllable-chips-row">
                {syllables.map((syl, idx) => (
                  <button
                    key={idx}
                    className="syllable-sound-chip"
                    onClick={() => playSingleChar(syl)}
                    title={`వినండి: "${syl}"`}
                  >
                    <span className="chip-num">{idx + 1}</span>
                    <span className="chip-text">{syl}</span>
                    <Volume2 size={16} className="chip-audio-icon" />
                  </button>
                ))}
              </div>
            </div>

            {/* Big Audio Action Buttons */}
            <div className="word-audio-actions">
              <button 
                className={`primary-listen-btn ${isPlayingWordAudio ? 'pulse' : ''}`}
                onClick={playWordAudio}
              >
                <Volume2 size={24} />
                <span>పూర్తి పదం వినండి: "{word}"</span>
              </button>

              <button 
                className="secondary-listen-btn"
                onClick={playSlowSyllables}
                title="అక్షరాలను విడదీసి నిదానంగా వినండి"
              >
                <Volume2 size={18} />
                <span>విడదీసి వినండి (Slow)</span>
              </button>
            </div>

            {/* Kid-Friendly Explanation */}
            {explanation && (
              <div className="word-explanation-card">
                <div className="explanation-header">
                  <Lightbulb size={18} />
                  <span>చిన్న వివరణ (Simple Note):</span>
                </div>
                <p className="explanation-content">{explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. How to Write Section with START and END Points */}
      <div className="word-writing-section">
        <div className="section-title-bar">
          <div className="section-icon-badge">
            <Pencil size={22} />
          </div>
          <div>
            <h2 className="section-title">రాయడం ఎలాగో నేర్చుకుందాం (How to Write)</h2>
            <p className="section-subtitle">
              ఎక్కడ మొదలుపెట్టాలి? ఎక్కడ ముగించాలి? (Watch Stroke Demo & Practice Tracing)
            </p>
          </div>
        </div>

        {/* Syllable Selector if word has >1 character */}
        {syllables.length > 1 && (
          <div className="syllable-step-container">
            <span className="step-guide-text">రాయడానికి అక్షరం ఎంచుకోండి:</span>
            <div className="syllable-step-tabs">
              {syllables.map((syl, idx) => (
                <button
                  key={idx}
                  className={`syllable-step-tab ${selectedCharIndex === idx ? 'active' : ''}`}
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCharIndex(idx);
                  }}
                >
                  <span className="step-tab-num">{idx + 1}వ అక్షరం</span>
                  <span className="step-tab-char">{syl}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Legend for Start and End Points */}
        <div className="stroke-points-legend">
          <div className="legend-item start">
            <span className="legend-dot start-dot">1</span>
            <strong>ప్రారంభ బిందువు (START HERE)</strong>
          </div>
          <div className="legend-item direction">
            <span className="legend-arrow">➔ ➔ ➔</span>
            <span>రాత దిశ (Stroke Flow)</span>
          </div>
          <div className="legend-item end">
            <span className="legend-dot end-dot">2</span>
            <strong>ముగింపు బిందువు (END HERE)</strong>
          </div>
        </div>

        {/* Two-Column Writing Studio */}
        <div className="writing-studio-grid">
          {/* Left: Animated Stroke Demonstration */}
          <div className="studio-demo-card">
            <div className="studio-card-header">
              <span className="studio-header-title">
                1. రాత పద్ధతి చూడండి (Watch Stroke Demo)
              </span>
              <button 
                className="action-pill-btn" 
                onClick={triggerAnimation}
                title="మళ్ళీ చూడండి (Play Again)"
              >
                <RotateCcw size={15} />
                <span>మళ్ళీ ప్లే చేయి</span>
              </button>
            </div>

            <div className="demo-canvas-area">
              <svg className="stroke-svg-stage" viewBox="0 0 200 200">
                {/* Guide background text */}
                <text
                  x="100"
                  y="140"
                  textAnchor="middle"
                  fontFamily="'Noto Sans Telugu', sans-serif"
                  fontSize="125"
                  fontWeight="900"
                  fill="#F8FAFC"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                >
                  {activeChar}
                </text>

                {/* Animated stroke overlay */}
                <text
                  x="100"
                  y="140"
                  textAnchor="middle"
                  fontFamily="'Noto Sans Telugu', sans-serif"
                  fontSize="125"
                  fontWeight="900"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="6"
                  strokeDasharray="900"
                  strokeDashoffset={isAnimating ? "0" : "900"}
                  className={isAnimating ? "animated-writing-stroke" : ""}
                >
                  {activeChar}
                </text>

                {/* 🟢 START POINT MARKER */}
                <circle
                  cx={strokeInfo.start.x}
                  cy={strokeInfo.start.y}
                  r="14"
                  fill="#10B981"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="pulsing-marker"
                />
                <text
                  x={strokeInfo.start.x}
                  y={strokeInfo.start.y + 5}
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontSize="13"
                  fontWeight="900"
                  fill="#FFFFFF"
                >
                  1
                </text>

                {/* 🛑 END POINT MARKER */}
                <circle
                  cx={strokeInfo.end.x}
                  cy={strokeInfo.end.y}
                  r="14"
                  fill="#EF4444"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="pulsing-marker"
                />
                <text
                  x={strokeInfo.end.x}
                  y={strokeInfo.end.y + 5}
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontSize="13"
                  fontWeight="900"
                  fill="#FFFFFF"
                >
                  2
                </text>
              </svg>

              {/* Animated Pencil Moving with the Stroke */}
              {isAnimating && (
                <div className="animated-pencil-cursor">
                  ✏️
                </div>
              )}
            </div>

            {/* Tip Description Box */}
            <div className="stroke-tip-card">
              <span className="tip-badge">రాత సూచన:</span>
              <p className="tip-text">{strokeInfo.tip}</p>
            </div>

            <button
              className="speak-active-char-btn"
              onClick={() => playSingleChar(activeChar)}
            >
              <Volume2 size={18} />
              <span>ఈ అక్షరం ధ్వని వినండి: "{activeChar}"</span>
            </button>
          </div>

          {/* Right: Interactive Practice Chalkboard (పలక) */}
          <div className="studio-practice-card">
            <div className="studio-card-header">
              <span className="studio-header-title">
                2. మీరే రాయండి (Your Turn to Practice)
              </span>
              <button 
                className="action-pill-btn" 
                onClick={clearCanvas}
                title="పలక శుభ్రం చేయి (Clear Slate)"
              >
                <RotateCcw size={15} />
                <span>శుభ్రం చేయి</span>
              </button>
            </div>

            <div className="chalkboard-frame">
              {/* Watermark character with start/end dots */}
              <div className="chalkboard-watermark" aria-hidden="true">
                {activeChar}
              </div>

              {/* Start & End dot overlays on chalkboard */}
              <div 
                className="slate-guide-marker start-marker"
                style={{ left: `${(strokeInfo.start.x / 200) * 100}%`, top: `${(strokeInfo.start.y / 200) * 100}%` }}
                title="ఇక్కడి నుండి మొదలుపెట్టండి (Start Here)"
              >
                <span>1. మొదలు</span>
              </div>

              <div 
                className="slate-guide-marker end-marker"
                style={{ left: `${(strokeInfo.end.x / 200) * 100}%`, top: `${(strokeInfo.end.y / 200) * 100}%` }}
                title="ఇక్కడ ముగించండి (End Here)"
              >
                <span>2. ముగింపు</span>
              </div>

              <canvas
                ref={canvasRef}
                className="chalkboard-draw-surface"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />

              {showWellDone && (
                <div className="encouragement-badge">
                  <Sparkles size={20} />
                  <span>చాలా అద్భుతంగా రాశారు! (Great Writing!)</span>
                </div>
              )}
            </div>

            {/* Chalkboard Tools: Colors & Brush Sizes */}
            <div className="chalkboard-tools">
              <div className="chalk-palette">
                <span className="palette-label">రంగు:</span>
                <div className="swatches-row">
                  {chalkColors.map((col) => (
                    <button
                      key={col}
                      className={`chalk-swatch ${userStrokeColor === col ? 'active' : ''}`}
                      style={{ backgroundColor: col }}
                      onClick={() => {
                        audioService.playClick();
                        setUserStrokeColor(col);
                      }}
                      title={col}
                    />
                  ))}
                </div>
              </div>

              <div className="brush-selector">
                <span className="palette-label">పరిమాణం:</span>
                <div className="sizes-row">
                  {[8, 14, 22].map((sz) => (
                    <button
                      key={sz}
                      className={`brush-size-btn ${brushSize === sz ? 'active' : ''}`}
                      onClick={() => {
                        audioService.playClick();
                        setBrushSize(sz);
                      }}
                    >
                      <span className="brush-dot" style={{ width: sz / 1.5, height: sz / 1.5 }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Related Words Section (సంబంధిత పదాలు) */}
      <div className="related-words-section">
        <div className="related-header">
          <div className="related-title-box">
            <Sparkles size={22} className="related-icon" />
            <h2 className="related-title">సంబంధిత పదాలు (Related Words with "{letter}")</h2>
          </div>
          <p className="related-subtitle">
            ఈ అక్షరంతో మొదలయ్యే మరిన్ని తెలుగు పదాలు నేర్చుకోండి!
          </p>
        </div>

        <div className="related-words-grid">
          {relatedWords.map((item, idx) => (
            <div 
              key={idx}
              className="related-word-card"
              onClick={() => {
                if (onSelectWord) {
                  audioService.playClick();
                  onSelectWord({
                    word: item.telugu,
                    translit: item.translit,
                    meaning: item.english,
                    letter: letter,
                    svgKey: item.svgKey || svgKey
                  });
                }
              }}
            >
              <div className="related-card-visual">
                <Illustration name={item.svgKey || svgKey} size={70} />
              </div>
              
              <div className="related-card-info">
                <h3 className="related-telugu">{item.telugu}</h3>
                <p className="related-translit">{item.translit}</p>
                <p className="related-meaning">{item.english}</p>
              </div>

              <div className="related-card-actions">
                <button
                  className="related-audio-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    audioService.playClick();
                    audioService.speak(item.telugu, item.translit);
                  }}
                  title="ధ్వని వినండి"
                >
                  <Volume2 size={18} />
                </button>
                <button className="related-view-btn">
                  <span>చూడండి ➔</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordDetailPage;
