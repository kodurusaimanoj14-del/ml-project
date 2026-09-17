import React, { useState } from 'react';
import { TELUGU_LETTERS, VOCABULARY_ITEMS } from './data/teluguData';
import { Navbar } from './components/Navbar';
import { AlphabetGrid } from './components/AlphabetGrid';
import { LetterDetail } from './components/LetterDetail';
import { WordDetailPage } from './components/WordDetailPage';
import { GuninthaluPage } from './components/GuninthaluPage';
import { VocabularyPage } from './components/VocabularyPage';
import { QuizPage } from './components/QuizPage';
import { audioService } from './utils/audioUtils';

export function App() {
  const [activeTab, setActiveTab] = useState('alphabet'); // 'alphabet' | 'guninthalu' | 'vocabulary' | 'quiz'
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  // Sync with window.location.hash on mount and change
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Word detail page hash route
      if (hash.startsWith('word/')) {
        const rawWord = decodeURIComponent(hash.replace('word/', ''));
        // Find in TELUGU_LETTERS
        const foundLetter = TELUGU_LETTERS.find((l) => l.word === rawWord || l.id === rawWord);
        if (foundLetter) {
          setSelectedWord({
            word: foundLetter.word,
            translit: foundLetter.wordTranslit,
            meaning: foundLetter.meaning,
            letter: foundLetter.char,
            explanation: foundLetter.explanation,
            svgKey: foundLetter.svgKey,
            accentColor: foundLetter.accentColor
          });
          return;
        }
        // Find in VOCABULARY_ITEMS
        const foundVocab = VOCABULARY_ITEMS.find((v) => v.telugu === rawWord || v.id === rawWord);
        if (foundVocab) {
          setSelectedWord({
            word: foundVocab.telugu,
            translit: foundVocab.translit,
            meaning: foundVocab.english,
            letter: foundVocab.letter,
            svgKey: foundVocab.svgKey
          });
          return;
        }
      } else {
        setSelectedWord(null);
      }

      if (hash.startsWith('letter/')) {
        const letterId = hash.replace('letter/', '').replace('/trace', '');
        const found = TELUGU_LETTERS.find((l) => l.id === letterId);
        if (found) {
          setActiveTab('alphabet');
          setSelectedLetter(found);
          setSelectedWord(null);
          return;
        }
      }
      if (hash.startsWith('quiz')) {
        setActiveTab('quiz');
        setSelectedLetter(null);
        setSelectedWord(null);
        return;
      }
      if (['alphabet', 'guninthalu', 'vocabulary'].includes(hash)) {
        setActiveTab(hash);
        setSelectedLetter(null);
        setSelectedWord(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Switch tab and clear active details
  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    setSelectedLetter(null);
    setSelectedWord(null);
    window.location.hash = tab;
  };

  // Open dedicated letter learning view
  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
    setSelectedWord(null);
    window.location.hash = `letter/${letter.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open dedicated word learning page
  const handleSelectWord = (wordData) => {
    setSelectedWord(wordData);
    window.location.hash = `word/${encodeURIComponent(wordData.word)}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select letter by character string (e.g. from vocabulary tag)
  const handleSelectLetterByChar = (char) => {
    const found = TELUGU_LETTERS.find((l) => l.char === char);
    if (found) {
      handleSelectLetter(found);
    }
  };

  // Return from word page
  const handleBackFromWord = () => {
    audioService.playClick();
    setSelectedWord(null);
    if (selectedLetter) {
      window.location.hash = `letter/${selectedLetter.id}`;
    } else {
      window.location.hash = activeTab;
    }
  };

  // Return to alphabet grid
  const handleBackToGrid = () => {
    audioService.playClick();
    setSelectedLetter(null);
    setSelectedWord(null);
    window.location.hash = 'alphabet';
  };

  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Content Body */}
      <main className="main-content-container">
        {selectedWord ? (
          <WordDetailPage
            wordData={selectedWord}
            onBack={handleBackFromWord}
            onSelectWord={handleSelectWord}
            onSelectLetter={handleSelectLetterByChar}
          />
        ) : (
          <>
            {activeTab === 'alphabet' && (
              <>
                {selectedLetter ? (
                  <LetterDetail
                    letter={selectedLetter}
                    allLetters={TELUGU_LETTERS}
                    onBack={handleBackToGrid}
                    onSelectLetter={handleSelectLetter}
                    onOpenWordPage={handleSelectWord}
                  />
                ) : (
                  <AlphabetGrid
                    letters={TELUGU_LETTERS}
                    onSelectLetter={handleSelectLetter}
                    onOpenWordPage={handleSelectWord}
                  />
                )}
              </>
            )}

            {activeTab === 'guninthalu' && <GuninthaluPage />}

            {activeTab === 'vocabulary' && (
              <VocabularyPage 
                onSelectLetterByChar={handleSelectLetterByChar}
                onOpenWordPage={handleSelectWord}
              />
            )}

            {activeTab === 'quiz' && (
              <QuizPage onReturnHome={() => handleSelectTab('alphabet')} />
            )}
          </>
        )}
      </main>

      {/* Educational Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-title">
            తెలుగు నేర్చుకుందాం — పిల్లల కోసం అందమైన ఇంటరాక్టివ్ లెర్నింగ్ యాప్
          </p>
          <p className="footer-sub">
            Designed with ❤️ for Telugu learners worldwide • వర్ణమాల, గుణింతాలు, పదాలు మరియు క్విజ్‌లతో సరదాగా నేర్చుకోండి
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
