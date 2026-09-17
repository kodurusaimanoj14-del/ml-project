import React, { useRef, useState, useEffect } from 'react';
import { Eraser, RotateCcw, Sparkles } from './Icons';
import { audioService } from '../utils/audioUtils';

export const LetterCanvas = ({ char, color = "#FF6B6B" }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState(color);
  const [brushSize, setBrushSize] = useState(14);
  const [isEraser, setIsEraser] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const colors = [
    "#FF6B6B", // Red
    "#FA8231", // Orange
    "#F7B731", // Yellow
    "#20BF6B", // Green
    "#0984E3", // Blue
    "#8854D0", // Purple
    "#FD79A8"  // Pink
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Handle high DPI
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    clearCanvas();
  }, [char]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
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
    setIsDrawing(true);
    setHasDrawn(true);

    if (isEraser) {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 26;
    } else {
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
    }
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
    setIsDrawing(false);
  };

  return (
    <div className="tracing-canvas-container">
      <div className="tracing-canvas-header">
        <div className="tracing-title">
          <Sparkles size={18} className="tracing-icon" />
          <span>అక్షరం దిద్దుదాం (Trace & Practice)</span>
        </div>
        <div className="tracing-actions">
          <button
            className={`tool-btn ${isEraser ? 'active' : ''}`}
            onClick={() => {
              audioService.playClick();
              setIsEraser(!isEraser);
            }}
            title="రబ్బరు (Eraser)"
          >
            <Eraser size={18} />
          </button>
          <button
            className="tool-btn danger"
            onClick={() => {
              audioService.playClick();
              clearCanvas();
            }}
            title="శుభ్రం చేయి (Clear Canvas)"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="canvas-wrapper">
        {/* Guide watermark text behind canvas */}
        <div className="letter-watermark" aria-hidden="true">
          {char}
        </div>

        <canvas
          ref={canvasRef}
          className="drawing-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      {/* Palette and Brush controls */}
      <div className="canvas-controls">
        <div className="color-palette">
          {colors.map((c) => (
            <button
              key={c}
              className={`color-swatch ${brushColor === c && !isEraser ? 'selected' : ''}`}
              style={{ backgroundColor: c }}
              onClick={() => {
                audioService.playClick();
                setBrushColor(c);
                setIsEraser(false);
              }}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>

        <div className="brush-sizes">
          {[8, 14, 22].map((sz) => (
            <button
              key={sz}
              className={`size-dot-btn ${brushSize === sz ? 'selected' : ''}`}
              onClick={() => {
                audioService.playClick();
                setBrushSize(sz);
              }}
              title={`Brush Size ${sz}`}
            >
              <span className="dot-preview" style={{ width: sz / 1.5, height: sz / 1.5 }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LetterCanvas;
