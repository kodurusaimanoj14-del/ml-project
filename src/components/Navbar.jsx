import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Image as ImageIcon, 
  Award, 
  Volume2, 
  VolumeX, 
  Menu, 
  X
} from './Icons';
import { audioService } from '../utils/audioUtils';

export const Navbar = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const navItems = [
    { id: 'alphabet', label: 'అక్షరమాల (Alphabet)', icon: BookOpen },
    { id: 'guninthalu', label: 'గుణింతాలు (Guninthalu)', icon: Layers },
    { id: 'vocabulary', label: 'పదాలు (Words & Pictures)', icon: ImageIcon },
    { id: 'quiz', label: 'క్విజ్ (Quiz)', icon: Award }
  ];

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    audioService.soundFxEnabled = nextState;
    audioService.speechEnabled = nextState;
    if (nextState) {
      audioService.playClick();
    }
  };

  const handleTabClick = (id) => {
    audioService.playClick();
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  const [isSlow, setIsSlow] = useState(audioService.isSlow);

  React.useEffect(() => {
    return audioService.addListener(() => {
      setIsSlow(audioService.isSlow);
    });
  }, []);

  const handleToggleSpeed = () => {
    audioService.playClick();
    const nextSlow = audioService.toggleSpeed();
    setIsSlow(nextSlow);
    // Give a clear audio demonstration of the new speed
    if (nextSlow) {
      audioService.speak("నిదానంగా", "Nidaanamgaa");
    } else {
      audioService.speak("సాధారణం", "Saadhaaranam");
    }
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div 
          className="navbar-brand" 
          onClick={() => handleTabClick('alphabet')}
          role="button"
          tabIndex={0}
        >
          <div className="brand-logo-badge">
            <span className="brand-telugu-char">అ</span>
          </div>
          <div className="brand-titles">
            <span className="brand-main">తెలుగు నేర్చుకుందాం</span>
            <span className="brand-sub">Let's Learn Telugu</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(item.id)}
              >
                <Icon size={18} className="nav-btn-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Audio Speed, Sound Toggle & Mobile Menu */}
        <div className="navbar-right-controls">
          {/* Speed / Clarity Toggle Button */}
          <button
            className={`speed-toggle-pill ${isSlow ? 'slow-mode' : 'normal-mode'}`}
            onClick={handleToggleSpeed}
            title={isSlow ? "ప్రస్తుతం నిదానంగా ఉంది (Click for normal speed)" : "ప్రస్తుతం సాధారణ వేగం (Click for slow/clear voice for kids)"}
            aria-label="Toggle Voice Speed"
          >
            <span className="speed-icon">{isSlow ? "🐢" : "🐰"}</span>
            <span className="speed-label">{isSlow ? "నిదానంగా" : "సాధారణం"}</span>
          </button>

          <button
            className={`audio-toggle-btn ${soundOn ? 'sound-active' : 'sound-muted'}`}
            onClick={toggleSound}
            title={soundOn ? 'మ్యూట్ చేయి (Mute Audio)' : 'శబ్దం ఆన్ చేయి (Unmute Audio)'}
            aria-label="Toggle Sound"
          >
            {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            <span className="audio-toggle-label">{soundOn ? 'శబ్దం' : 'మ్యూట్'}</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(item.id)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
export default Navbar;
