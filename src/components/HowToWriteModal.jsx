import React, { useState, useEffect, useRef } from 'react';
import { X, Play, RotateCcw, Volume2, Sparkles, Pencil, CheckCircle } from './Icons';
import { audioService } from '../utils/audioUtils';

export const HowToWriteModal = ({ word, translit, meaning, letter, onClose }) => {
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userStrokeColor, setUserStrokeColor] = useState('#FF6B6B');
  const [brushSize, setBrushSize] = useState(14);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showWellDone, setShowWellDone] = useState(false);
  const canvasRef = useRef(null);

  // Break word into syllables / characters for writing
  // Simple heuristic or grapheme cluster split for Telugu
  const chars = Array.from(new Intl.Segmenter('te', { granularity: 'grapheme' }).segment(word)).map(s => s.segment);
  const activeChar = chars[selectedCharIndex] || chars[0] || word;

  const colors = ["#FF6B6B", "#FA8231", "#F7B731", "#20BF6B", "#0984E3", "#8854D0", "#FD79A8"];

  // Initialize practice canvas
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
    }, 50);
  };

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
      audioService.playClick();
    }
  };

  return (
    <div className="write-modal-overlay" onClick={onClose}>
      <div className="write-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="write-modal-header">
          <div className="write-header-title">
            <div className="write-badge-icon">
              <Pencil size={20} />
            </div>
            <div>
              <h2 className="write-modal-heading">రాయడం నేర్చుకుందాం (How to Write)</h2>
              <p className="write-modal-sub">
                పదం: <strong className="highlight-word">{word}</strong> ({translit} — {meaning})
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="మూసివేయి (Close)">
            <X size={22} />
          </button>
        </div>

        {/* Syllable Selector */}
        {chars.length > 1 && (
          <div className="syllable-step-row">
            <span className="step-label">అక్షరం ఎంచుకోండి:</span>
            <div className="syllable-pills">
              {chars.map((ch, idx) => (
                <button
                  key={idx}
                  className={`syllable-pill ${selectedCharIndex === idx ? 'active' : ''}`}
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCharIndex(idx);
                  }}
                >
                  <span className="pill-step-num">{idx + 1}</span>
                  <span className="pill-char">{ch}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Two-Column Stage */}
        <div className="write-stage-grid">
          {/* Left: Animated Stroke Demonstration */}
          <div className="stroke-animation-card">
            <div className="card-top-header">
              <span className="subcard-title">1. రాత చూడండి (Watch Stroke Demo)</span>
              <button className="play-stroke-btn" onClick={triggerAnimation} title="మళ్ళీ చూడండి (Play Again)">
                <RotateCcw size={16} />
                <span>ప్లే చేయి</span>
              </button>
            </div>

            <div className="animation-canvas-box">
              <svg className="stroke-svg" viewBox="0 0 200 200">
                {/* Guide background text */}
                <text
                  x="100"
                  y="140"
                  textAnchor="middle"
                  fontFamily="'Noto Sans Telugu', sans-serif"
                  fontSize="120"
                  fontWeight="900"
                  fill="#F1F5F9"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                >
                  {activeChar}
                </text>

                {/* Animated stroke overlay */}
                <text
                  x="100"
                  y="140"
                  textAnchor="middle"
                  fontFamily="'Noto Sans Telugu', sans-serif"
                  fontSize="120"
                  fontWeight="900"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="5"
                  strokeDasharray="800"
                  strokeDashoffset={isAnimating ? "0" : "800"}
                  className={isAnimating ? "animated-writing-stroke" : ""}
                >
                  {activeChar}
                </text>
              </svg>

              {/* Animated pen cursor indicator */}
              {isAnimating && (
                <div className="animated-pencil-cursor">
                  ✏️
                </div>
              )}
            </div>

            <div className="sound-helper-row">
              <button
                className="speak-char-btn"
                onClick={() => {
                  audioService.playClick();
                  audioService.speak(activeChar);
                }}
              >
                <Volume2 size={18} />
                <span>ఈ అక్షరం వినండి: "{activeChar}"</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Practice Slate */}
          <div className="interactive-slate-card">
            <div className="card-top-header">
              <span className="subcard-title">2. మీరే రాయండి (Your Turn to Practice)</span>
              <button className="clear-slate-btn" onClick={clearCanvas} title="పలక శుభ్రం చేయి (Clear)">
                <RotateCcw size={16} />
                <span>శుభ్రం చేయి</span>
              </button>
            </div>

            <div className="practice-canvas-wrapper">
              {/* Watermark guide */}
              <div className="slate-watermark" aria-hidden="true">
                {activeChar}
              </div>

              <canvas
                ref={canvasRef}
                className="practice-draw-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />

              {showWellDone && (
                <div className="well-done-toast">
                  <Sparkles size={18} />
                  <span>చాలా బాగా రాశారు! (Well Done!)</span>
                </div>
              )}
            </div>

            {/* Colors and brush */}
            <div className="slate-tools-row">
              <div className="color-swatches-group">
                {colors.map((c) => (
                  <button
                    key={c}
                    className={`swatch-btn ${userStrokeColor === c ? 'selected' : ''}`}
                    style={{ backgroundColor: c }}
                    onClick={() => {
                      audioService.playClick();
                      setUserStrokeColor(c);
                    }}
                  />
                ))}
              </div>

              <div className="brush-size-group">
                {[8, 14, 22].map((sz) => (
                  <button
                    key={sz}
                    className={`size-btn ${brushSize === sz ? 'selected' : ''}`}
                    onClick={() => {
                      audioService.playClick();
                      setBrushSize(sz);
                    }}
                  >
                    <span className="size-dot" style={{ width: sz / 1.5, height: sz / 1.5 }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="write-modal-footer">
          <button
            className="full-word-listen-btn"
            onClick={() => {
              audioService.playClick();
              audioService.speak(word, translit);
            }}
          >
            <Volume2 size={20} />
            <span>పూర్తి పదం వినండి: "{word}" ({translit})</span>
          </button>

          <button className="done-close-btn" onClick={onClose}>
            <CheckCircle size={20} />
            <span>పూర్తయింది (Done)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HowToWriteModal;
