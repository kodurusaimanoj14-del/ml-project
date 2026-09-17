# తెలుగు నేర్చుకుందాం (Let's Learn Telugu) 🌺
### An Interactive, Child-Friendly Telugu Learning Web Application for Beginners

A modern, colorful, and engaging web application designed to teach the Telugu language to children and beginners from scratch. Inspired by modern educational design principles with vibrant visuals, audio pronunciations, stroke-by-stroke handwriting guidance, interactive practice chalkboards, and educational quizzes.

---

## ✨ Key Features

### 1. 🔤 Complete 52 Telugu Letters (వర్ణమాల)
- **16 Vowels (అచ్చులు)**: From `అ` to `అః` with phonetic guides, audio, and words.
- **36 Consonants (హల్లులు)**: From `క` to `ఱ` organized into clean categories.
- **Child-Friendly Filters**: Simple 1-click tabs for `అన్నీ (All 52)`, `అచ్చులు (Vowels 16)`, and `హల్లులు (Consonants 36)` plus optional grammatical vargas.

### 2. 🎙️ Crystal-Clear Voice & Audio Pronunciation
- **Natural Educational Pace**: Clear enunciation with slow (`0.68x`) and normal (`0.85x`) speech controls.
- **Intelligent Phonetic Fallback**: Plays crisp, accurate syllables even when a native Telugu system voice is not installed.
- **Syllable Audio Breakdown**: Break words into component sounds (e.g., `[ 1. అ 🔊 ]` + `[ 2. మ్మ 🔊 ]` = `అమ్మ`).

### 3. ✍️ Dedicated Word Learning & How to Write (రాయడం నేర్చుకుందాం)
- **Explicit START and END Points**:
  - 🟢 **1. ప్రారంభ బిందువు (START HERE)**: Pulsing green circle showing exactly where to begin the stroke.
  - ➔ ➔ ➔ **రాత దిశ (Stroke Flow)**: Directional indicators showing stroke curvature.
  - 🛑 **2. ముగింపు బిందువు (END HERE)**: Distinct red marker showing where to finish.
- **Animated Stroke Demo**: Moving pencil cursor demonstrating proper stroke order.
- **Interactive Practice Slate (పలక)**: Authentic blackboard canvas with wooden border, guide watermarks, multi-colored chalks, adjustable brush sizes, and instant encouragement.

### 4. 🌟 Related Words (సంబంధిత పదాలు)
- Every word page spotlights 3–5 related words sharing the same letter or theme with illustrations, meanings, pronunciations, and 1-click exploration.

### 5. 📚 గుణింతాలు (Guninthalu Vowel Combinations)
- Interactive consonant selector with 16 vowel-sign formulas (తలకట్టు, దీర్ఘం, గుడి, కొమ్ము, etc.) and complete syllable grids with audio.

### 6. 🖼️ చిత్రాలతో పదకోశం (Illustrated Vocabulary)
- 62+ vocabulary cards across 8 categories: Animals, Birds, Fruits, Vegetables, Nature, Household, Family, and Numbers (1–10).

### 7. 🏆 Interactive Quiz (క్విజ్)
- 4 engaging game modes:
  - అక్షరం గుర్తుపట్టండి (Identify the Letter from Sound)
  - పదం & చిత్రం (Word & Picture Matching)
  - గుణింతాల క్విజ్ (Guninthalu Challenge)
  - సరియైన పదం ఎంచుకోండి (Vocabulary Quiz)
- Instant playful feedback sounds, live score tracking, celebratory confetti, and performance review.

---

## 🚀 Quick Start (Running Locally)

This project is built with **zero external runtime dependencies**—it uses lightweight bundled standalone scripts:

```bash
# 1. Start the local server
node server.js

# 2. Open in your browser
http://localhost:3000/
```

### Rebuilding the Bundle (Optional)
If you make changes to React components in `src/`:
```bash
node build.js
```

---

## 📁 Project Structure

```
├── dist/
│   └── app.bundle.js            # Compiled application bundle
├── src/
│   ├── components/
│   │   ├── illustrations/       # Scalable SVG illustrations
│   │   ├── AlphabetGrid.jsx     # 52-letter filterable grid
│   │   ├── GuninthaluPage.jsx   # Interactive Guninthalu vowel signs
│   │   ├── HowToWriteModal.jsx  # Stroke animation & practice modal
│   │   ├── Icons.jsx            # Zero-dependency SVG icons
│   │   ├── LetterCanvas.jsx     # Tracing slate canvas
│   │   ├── LetterCard.jsx       # Individual letter card
│   │   ├── LetterDetail.jsx     # Full letter exploration screen
│   │   ├── Navbar.jsx           # Header with speed & audio toggles
│   │   ├── QuizCard.jsx         # Interactive quiz question card
│   │   ├── QuizPage.jsx         # 4-mode randomized quiz
│   │   ├── QuizResult.jsx       # Scoreboard with confetti celebration
│   │   ├── VocabularyPage.jsx   # 8-category picture vocabulary
│   │   └── WordDetailPage.jsx   # Dedicated word screen (Speech + Writing + Related Words)
│   ├── data/
│   │   └── teluguData.js        # Complete alphabet, guninthalu, and vocabulary dataset
│   ├── utils/
│   │   ├── audioUtils.js        # Web Audio FX & clear speech synthesis controller
│   │   └── wordDataHelper.js    # Stroke coordinates, syllables, and related words
│   ├── App.jsx                  # Main application & routing controller
│   ├── index.css                # Complete child-friendly design system
│   └── main.jsx                 # Application entry point
├── vendor/                      # Offline standalone runtime libraries
├── build.js                     # Zero-dependency Babel compiler & bundler
├── server.js                    # Zero-dependency local development server
└── index.html                   # HTML entry shell
```

---

## 🎨 Technology Stack
- **Frontend**: React (Functional Components & Hooks)
- **Styling**: Pure Vanilla CSS with CSS custom properties (variables)
- **Audio**: Web Audio API (synthesized FX chimes) + Web Speech API (with phonetic fallbacks)
- **Graphics**: Pure SVG illustrations & HTML5 `<canvas>` for slate tracing
- **Compiler**: Babel (`env` + `react` standalone presets)

---

## 📄 License
MIT License • Designed with ❤️ for Telugu learners worldwide!
