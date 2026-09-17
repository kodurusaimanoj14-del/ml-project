const TELUGU_PHONETICS = {
  // 16 Vowels (అచ్చులు)
  "అ": "uh", "ఆ": "aa", "ఇ": "ih", "ఈ": "ee", "ఉ": "oo", "ఊ": "ooo",
  "ఋ": "ru", "ౠ": "roo", "ఎ": "eh", "ఏ": "ay", "ఐ": "eye",
  "ఒ": "oh", "ఓ": "ooh", "ఔ": "ow", "అం": "um", "అః": "aha",

  // 36 Consonants (హల్లులు)
  "క": "ka", "ఖ": "kha", "గ": "ga", "ఘ": "gha", "ఙ": "nga",
  "చ": "cha", "ఛ": "chha", "జ": "ja", "ఝ": "jha", "ఞ": "nya",
  "ట": "tta", "ఠ": "ttha", "డ": "dda", "ఢ": "ddha", "ణ": "nna",
  "త": "tha", "థ": "thha", "ద": "dha", "ధ": "dhha", "న": "na",
  "ప": "pa", "ఫ": "pha", "బ": "ba", "భ": "bha", "మ": "ma",
  "య": "ya", "ర": "ra", "ల": "la", "వ": "va",
  "శ": "sha", "ష": "shha", "స": "sa", "హ": "ha", "ళ": "lla",
  "క్ష": "ksha", "ఱ": "rra",

  // Words
  "అమ్మ": "Amma", "ఆవు": "Aavu", "ఇల్లు": "Illu", "ఈగ": "Eega",
  "ఉడుత": "Uduta", "ఊయల": "Ooyala", "ఋషి": "Rishi", "ౠక": "Rooka",
  "ఎలుక": "Eluka", "ఏనుగు": "Enugu", "ఐదు": "Aidu", "ఒంటె": "Onte",
  "ఓడ": "Oada", "ఔషధం": "Aushadham", "అంబారి": "Ambaari", "అంతఃపురం": "Anthahpuram",
  "కమలం": "Kamalam", "ఖడ్గం": "Khadgam", "గంప": "Gampa", "ఘటం": "Ghatam",
  "చక్రం": "Chakram", "ఛత్రం": "Chhatram", "జడ": "Jada", "ఝషం": "Jhasham",
  "టపాకాయ": "Tapaakaaya", "కంఠం": "Kantham", "డమరుకం": "Damarukam", "ఢంకా": "Dhanka",
  "బాణం": "Baanam", "తల": "Thala", "రథం": "Ratham", "దండ": "Dhanda",
  "ధనుస్సు": "Dhanussu", "నగ": "Naga", "పలక": "Palaka", "ఫలం": "Phalam",
  "బంతి": "Banthi", "భరిణ": "Bharina", "మంచం": "Mancham", "యజ్ఞం": "Yajnam",
  "రథము": "Rathamu", "లత": "Latha", "వల": "Vala", "శంఖం": "Shankham",
  "షట్కోణం": "Shatkonam", "సంచి": "Sanchi", "హంస": "Hamsa", "తాళం": "Taalam",
  "వృక్షం": "Vriksham", "గుఱ్ఱం": "Gurram",
  "సింహం": "Simham", "పులి": "Puli", "కుక్క": "Kukka", "పిల్లి": "Pilli",
  "తాబేలు": "Taabelu", "చేప": "Chepa", "చిలుక": "Chiluka", "నెమలి": "Nemali",
  "కాకి": "Kaaki", "గులాబీ": "Gulaabi", "జాజి": "Jaaji", "మల్లె": "Malle",
  "సూర్యకాంతి": "Sooryakanthi", "కలువ": "Kaluva", "మామిడి": "Maamidi",
  "అరటి": "Arati", "ద్రాక్ష": "Draaksha", "దానిమ్మ": "Daanimma", "జామ": "Jaama",
  "సొరకాయ": "Sorakaaya", "వంకాయ": "Vankaaya", "టమోటా": "Tamota",
  "క్యారెట్": "Carrot", "ఉల్లిపాయ": "Ullipaaya", "ఎరుపు": "Erupu",
  "నీలం": "Neelam", "పసుపు": "Pasupu", "ఆకుపచ్చ": "Aakupachha", "తెలుపు": "Telupu",
  "ఒకటి": "Okati", "రెండు": "Rendu", "మూడు": "Moodu", "నాలుగు": "Naalugu",
  "ఆరు": "Aaru", "ఏడు": "Eedu", "ఎనిమిది": "Enimidi", "తొమ్మిది": "Tommidi", "పది": "Padi"
};

class AudioController {
  constructor() {
    this.speechEnabled = true;
    this.soundFxEnabled = true;
    this.isSlow = false;
    this.speechSpeed = 0.85; // Natural, clear educational pace
    this.preferredVoiceURI = null;
    this.audioCtx = null;
    this.voices = [];
    this.listeners = [];

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.initVoices();
      window.speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  initVoices() {
    try {
      this.voices = window.speechSynthesis.getVoices() || [];
      this.notifyListeners();
    } catch {
      this.voices = [];
    }
  }

  addListener(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn());
  }

  getAvailableVoices() {
    if (this.voices.length === 0 && typeof window !== "undefined" && "speechSynthesis" in window) {
      this.initVoices();
    }
    return this.voices;
  }

  toggleSpeed() {
    this.isSlow = !this.isSlow;
    this.speechSpeed = this.isSlow ? 0.68 : 0.85;
    this.notifyListeners();
    return this.isSlow;
  }

  setSpeed(speedVal) {
    this.speechSpeed = speedVal;
    this.isSlow = speedVal < 0.78;
    this.notifyListeners();
  }

  getAudioContext() {
    if (typeof window === "undefined") return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!this.audioCtx || this.audioCtx.state === "suspended") {
      this.audioCtx = new AudioContextClass();
    }
    return this.audioCtx;
  }

  // Find the highest clarity voice for Telugu
  findBestVoice() {
    const voices = this.getAvailableVoices();
    if (voices.length === 0) return null;

    // User preference
    if (this.preferredVoiceURI) {
      const pref = voices.find(v => v.voiceURI === this.preferredVoiceURI);
      if (pref) return pref;
    }

    // 1. Direct Telugu voice (te-IN or Telugu name)
    const teluguVoice = voices.find(v => 
      v.lang === "te-IN" || 
      v.lang.toLowerCase().startsWith("te") || 
      v.name.toLowerCase().includes("telugu") ||
      v.name.toLowerCase().includes("mohan") ||
      v.name.toLowerCase().includes("chitra")
    );
    if (teluguVoice) return teluguVoice;

    // 2. Clear Indian English voice (pronounces phonetic syllables naturally)
    const indianVoice = voices.find(v => 
      v.lang === "en-IN" || 
      v.name.toLowerCase().includes("india") ||
      v.name.toLowerCase().includes("ravi") ||
      v.name.toLowerCase().includes("heera")
    );
    if (indianVoice) return indianVoice;

    // 3. Indian Hindi voice fallback
    const hindiVoice = voices.find(v => v.lang === "hi-IN" || v.lang.startsWith("hi"));
    if (hindiVoice) return hindiVoice;

    // 4. Default voice
    return voices.find(v => v.default) || voices[0];
  }

  // Speak Telugu text with maximum clarity
  speak(text, transliteration = null) {
    if (!this.speechEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return false;
    }

    try {
      window.speechSynthesis.cancel(); // cancel any ongoing speech

      const bestVoice = this.findBestVoice();
      const utterance = new SpeechSynthesisUtterance();

      const isTeluguVoice = bestVoice && (bestVoice.lang.startsWith("te") || bestVoice.name.toLowerCase().includes("telugu"));
      
      // Determine what text to utter:
      if (isTeluguVoice) {
        // Native Telugu voice speaks the Telugu script directly
        utterance.text = text;
      } else {
        // Voice is non-Telugu (e.g. Indian English or default)
        // Check transliteration or fallback lookup dictionary for crystal clarity!
        const phoneticFallback = transliteration || TELUGU_PHONETICS[text] || text;
        utterance.text = phoneticFallback;
      }

      utterance.rate = this.speechSpeed; // educational clear rate
      utterance.pitch = 1.0; // natural human pitch
      utterance.volume = 1.0; // maximum clarity

      if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
      } else {
        utterance.lang = "te-IN";
      }

      window.speechSynthesis.speak(utterance);
      return true;
    } catch (err) {
      console.warn("Speech synthesis notice:", err);
      return false;
    }
  }

  // Speak text broken down slowly syllable by syllable for children
  speakSyllables(syllablesArray) {
    if (!this.speechEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    syllablesArray.forEach((syl, index) => {
      setTimeout(() => {
        const translit = TELUGU_PHONETICS[syl] || null;
        this.speak(syl, translit);
      }, index * 850);
    });
  }

  // Playful pop click sound
  playClick() {
    if (!this.soundFxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  // Cheerful chime on letter click
  playLetterSelect() {
    if (!this.soundFxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const notes = [523.25, 659.25]; // C5, E5
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.15);
      });
    } catch (e) {}
  }

  // Joyful chord on correct quiz answer
  playCorrect() {
    if (!this.soundFxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);

        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + i * 0.07);
        osc.stop(ctx.currentTime + i * 0.07 + 0.25);
      });
    } catch (e) {}
  }

  // Gentle low boop on wrong answer
  playWrong() {
    if (!this.soundFxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(160, ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  }

  // Fanfare on quiz completion
  playFanfare() {
    if (!this.soundFxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const chords = [
        { f: 523.25, t: 0.0, d: 0.12 },
        { f: 659.25, t: 0.12, d: 0.12 },
        { f: 783.99, t: 0.24, d: 0.15 },
        { f: 1046.50, t: 0.40, d: 0.5 }
      ];

      chords.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);

        gain.gain.setValueAtTime(0.18, ctx.currentTime + n.t);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.t + n.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + n.t);
        osc.stop(ctx.currentTime + n.t + n.d);
      });
    } catch (e) {}
  }
}

export const audioService = new AudioController();
