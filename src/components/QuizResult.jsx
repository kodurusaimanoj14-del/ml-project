import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Home, Award, CheckCircle, XCircle } from './Icons';
import { audioService } from '../utils/audioUtils';

export const QuizResult = ({
  score,
  totalQuestions,
  history,
  onRestart,
  onReturnHome
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrectCount = totalQuestions - score;

  useEffect(() => {
    audioService.playFanfare();

    // Trigger colorful confetti burst if score is good (>= 60%)
    if (percentage >= 60) {
      try {
        const fireConfetti = confetti || (typeof window !== 'undefined' ? window.confetti : null);
        if (typeof fireConfetti === 'function') {
          fireConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      } catch (e) {}
    }
  }, [percentage]);

  let praiseTitle = 'చాలా బాగా చేశారు! (Well Done!)';
  let praiseSub = 'మీరు తెలుగును ఎంతో ఉత్సాహంగా నేర్చుకుంటున్నారు!';
  let badgeColor = '#20BF6B';

  if (percentage === 100) {
    praiseTitle = 'అద్భుతం! శభాష్! (Perfect Score!)';
    praiseSub = 'మీరు అన్ని సమాధానాలను సరిగ్గా చెప్పారు!';
    badgeColor = '#F1C40F';
  } else if (percentage < 60) {
    praiseTitle = 'మంచి ప్రయత్నం! (Good Effort!)';
    praiseSub = 'మరొకసారి సాధన చేస్తే ఇంకా మంచి మార్కులు వస్తాయి!';
    badgeColor = '#FA8231';
  }

  return (
    <div className="quiz-result-container">
      <div className="result-card-main">
        <div className="result-badge-icon" style={{ backgroundColor: badgeColor + '20', color: badgeColor }}>
          <Award size={48} />
        </div>

        <h2 className="result-praise-title">{praiseTitle}</h2>
        <p className="result-praise-sub">{praiseSub}</p>

        {/* Big Score Display */}
        <div className="result-score-circle">
          <span className="result-score-num">{score}</span>
          <span className="result-score-divider">/</span>
          <span className="result-score-total">{totalQuestions}</span>
          <span className="result-score-pct">{percentage}%</span>
        </div>

        {/* Breakdown Stats */}
        <div className="result-stats-row">
          <div className="result-stat-chip correct">
            <CheckCircle size={18} />
            <span>సరైనవి (Correct): <strong>{score}</strong></span>
          </div>
          <div className="result-stat-chip incorrect">
            <XCircle size={18} />
            <span>తప్పులు (Mistakes): <strong>{incorrectCount}</strong></span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="result-actions-row">
          <button
            className="result-action-btn primary"
            onClick={() => {
              audioService.playClick();
              onRestart();
            }}
          >
            <RotateCcw size={20} />
            <span>మళ్ళీ క్విజ్ రాయండి (Restart Quiz)</span>
          </button>

          <button
            className="result-action-btn secondary"
            onClick={() => {
              audioService.playClick();
              onReturnHome();
            }}
          >
            <Home size={20} />
            <span>హోమ్ పేజీకి వెళ్లండి (Return Home)</span>
          </button>
        </div>
      </div>

      {/* Answer History Review */}
      {history && history.length > 0 && (
        <div className="result-review-section">
          <h3 className="review-title">ప్రశ్నల సమీక్ష (Questions Review):</h3>
          <div className="review-items-list">
            {history.map((h, i) => {
              const isCorrect = h.selectedOptionId === h.question.correctOptionId;
              return (
                <div key={i} className={`review-item-card ${isCorrect ? 'pass' : 'fail'}`}>
                  <div className="review-icon-col">
                    {isCorrect ? <CheckCircle size={22} className="pass-icon" /> : <XCircle size={22} className="fail-icon" />}
                  </div>
                  <div className="review-details-col">
                    <p className="review-prompt">{h.question.promptTe} ({h.question.promptEn})</p>
                    <p className="review-ans-row">
                      మీ సమాధానం: <span className={isCorrect ? 'ans-correct' : 'ans-wrong'}>{h.selectedOptionText}</span>
                    </p>
                    {!isCorrect && (
                      <p className="review-ans-correct">
                        సరైన సమాధానం: <strong>{h.question.correctAnswerDisplay}</strong>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default QuizResult;
