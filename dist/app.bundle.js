
(function() {
  'use strict';
  
  // Ensure React & ReactDOM have proper interop
  if (typeof window !== 'undefined') {
    if (window.React) {
      window.React.default = window.React;
      window.React.__esModule = true;
    }
    if (window.ReactDOM) {
      window.ReactDOM.default = window.ReactDOM;
      window.ReactDOM.__esModule = true;
    }
  }

  const modules = {};
  const cache = {};

  function define(id, factory) {
    modules[id] = factory;
  }

  function normalize(pathStr) {
    return pathStr.replace(/\\/g, '/').replace(/^\.\//, '').replace(/\.(js|jsx)$/, '');
  }

  function resolvePath(currentDir, relativePath) {
    if (!relativePath.startsWith('.')) return relativePath;
    const parts = (currentDir + '/' + relativePath).split('/');
    const stack = [];
    for (const p of parts) {
      if (p === '' || p === '.') continue;
      if (p === '..') stack.pop();
      else stack.push(p);
    }
    return stack.join('/');
  }

  function createRequire(currentFile) {
    const currentDir = currentFile.split('/').slice(0, -1).join('/');

    return function require(id) {
      if (id.endsWith('.css')) {
        return {};
      }
      if (id === 'react') {
        const R = window.React || {};
        R.default = R;
        R.__esModule = true;
        return R;
      }
      if (id === 'react-dom' || id === 'react-dom/client') {
        const RD = window.ReactDOM || {};
        RD.default = RD;
        RD.__esModule = true;
        return RD;
      }
      if (id === 'canvas-confetti') {
        return window.confetti;
      }

      const targetPath = normalize(resolvePath(currentDir, id));

      // Match target against registered modules
      for (const modKey in modules) {
        if (normalize(modKey) === targetPath) {
          if (cache[modKey]) return cache[modKey];
          const module = { exports: {} };
          cache[modKey] = module.exports;
          modules[modKey](module, module.exports, createRequire(modKey));
          cache[modKey] = module.exports;
          return module.exports;
        }
      }

      console.warn('Module not found in bundle:', id, 'resolved as:', targetPath);
      return {};
    };
  }

  // Registered modules

  define("src/data/teluguData.js", function(module, exports, require) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VOCABULARY_ITEMS = exports.VOCABULARY_CATEGORIES = exports.TELUGU_LETTERS = exports.SAMPLE_GUNINTHAM_WORDS = exports.GUNINTHAPU_GURTULU = exports.GUNINTHALU_CONSONANTS = void 0;
exports.getGuninthamForConsonant = getGuninthamForConsonant;
// Complete Telugu Learning App Data
// Accurate Telugu characters, phonetics, transliterations, words, meanings, explanations, guninthalu, and vocabulary

var TELUGU_LETTERS = exports.TELUGU_LETTERS = [
// ================= 16 VOWELS (అచ్చులు) =================
{
  id: "a",
  "char": "అ",
  name: "అ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "a",
  ipa: "[ʌ]",
  word: "అమ్మ",
  wordTranslit: "Amma",
  meaning: "Mother",
  explanation: "అ తో అమ్మ. మన జీవితంలో మొదటి గురువు, అత్యంత ప్రేమ చూపించే దైవం అమ్మ.",
  funFact: "Telugu vowels are called 'Achhulu' (అచ్చులు). 'అ' is the very first letter of the Telugu alphabet!",
  svgKey: "mother",
  accentColor: "#FF6B6B",
  bgSoft: "#FFF0F0"
}, {
  id: "aa",
  "char": "ఆ",
  name: "ఆ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "aa",
  ipa: "[aː]",
  word: "ఆవు",
  wordTranslit: "Aavu",
  meaning: "Cow",
  explanation: "ఆ తో ఆవు. ఆవు మనకు ఆరోగ్యకరమైన పాలు ఇస్తుంది. గోమాతగా పూజింపబడుతుంది.",
  funFact: "'ఆ' has a longer sound (దీర్ఘం) than 'అ'. Say 'Aaaa' like in 'Father'!",
  svgKey: "cow",
  accentColor: "#FFA07A",
  bgSoft: "#FFF5EE"
}, {
  id: "i",
  "char": "ఇ",
  name: "ఇ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "i",
  ipa: "[ɪ]",
  word: "ఇల్లు",
  wordTranslit: "Illu",
  meaning: "House",
  explanation: "ఇ తో ఇల్లు. మనం కుటుంబంతో సంతోషంగా కలిసి ఉండే ప్రేమ మందిరం ఇల్లు.",
  funFact: "'ఇ' sounds short like 'i' in 'sit' or 'ink'.",
  svgKey: "house",
  accentColor: "#4ECDC4",
  bgSoft: "#E8F8F7"
}, {
  id: "ee",
  "char": "ఈ",
  name: "ఈ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "ee",
  ipa: "[iː]",
  word: "ఈగ",
  wordTranslit: "Eega",
  meaning: "Housefly",
  explanation: "ఈ తో ఈగ. చిన్న కీటకం. మనం ఎల్లప్పుడూ ఆహారాన్ని మూతపెట్టి ఈగలు వాలకుండా చూసుకోవాలి.",
  funFact: "'ఈ' is pronounced as a long 'ee' sound as in 'feel' or 'see'.",
  svgKey: "fly",
  accentColor: "#45B7D1",
  bgSoft: "#EAF6FA"
}, {
  id: "u",
  "char": "ఉ",
  name: "ఉ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "u",
  ipa: "[ʊ]",
  word: "ఉడుత",
  wordTranslit: "Uduta",
  meaning: "Squirrel",
  explanation: "ఉ తో ఉడుత. చెట్లపై చకచకా తిరిగే అందమైన చారలు గల చిన్న జంతువు.",
  funFact: "Short 'u' sound as in 'put' or 'book'. The stripes on squirrels are called Sri Rama Rekhalu!",
  svgKey: "squirrel",
  accentColor: "#F7B731",
  bgSoft: "#FEF9E7"
}, {
  id: "oo",
  "char": "ఊ",
  name: "ఊ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "oo",
  ipa: "[uː]",
  word: "ఊయల",
  wordTranslit: "Ooyala",
  meaning: "Swing",
  explanation: "ఊ తో ఊయల. పిల్లలందరికీ ఊయల ఊగడమంటే ఎంతో సరదా మరియు ఆనందం.",
  funFact: "Long 'oo' sound as in 'moon' or 'spoon'.",
  svgKey: "swing",
  accentColor: "#A55EEA",
  bgSoft: "#F5EEFD"
}, {
  id: "ru",
  "char": "ఋ",
  name: "ఋ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "ru",
  ipa: "[rʊ]",
  word: "ఋషి",
  wordTranslit: "Rushi",
  meaning: "Sage",
  explanation: "ఋ తో ఋషి. అడవులలో తపస్సు చేసి లోకానికి జ్ఞానాన్ని ప్రసాదించే మహనీయుడు.",
  funFact: "'ఋ' is called Vatrusudi sound in Telugu, pronounced gently like 'Ru'.",
  svgKey: "sage",
  accentColor: "#FA8231",
  bgSoft: "#FFF0E6"
}, {
  id: "roo",
  "char": "ౠ",
  name: "ౠ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "roo",
  ipa: "[ruː]",
  word: "ౠక",
  wordTranslit: "Rooka",
  meaning: "Ancient Coin",
  explanation: "ౠ తో ౠక. ప్రాచీన కాలంలో ఉపయోగించే నాణెం లేదా ధనం.",
  funFact: "This is the elongated form of 'ఋ', used in classical Telugu literature.",
  svgKey: "coin",
  accentColor: "#FD9644",
  bgSoft: "#FFF3EB"
}, {
  id: "e",
  "char": "ఎ",
  name: "ఎ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "e",
  ipa: "[e]",
  word: "ఎలుక",
  wordTranslit: "Eluka",
  meaning: "Rat / Mouse",
  explanation: "ఎ తో ఎలుక. వినాయకుని వాహనం. బిలాల్లో ఉంటూ వేగంగా పరిగెత్తే చిన్న జీవి.",
  funFact: "Short 'e' sound as in 'pet' or 'egg'.",
  svgKey: "mouse",
  accentColor: "#26DE81",
  bgSoft: "#EAFBF2"
}, {
  id: "ae",
  "char": "ఏ",
  name: "ఏ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "ae",
  ipa: "[eː]",
  word: "ఏనుగు",
  wordTranslit: "Aenugu",
  meaning: "Elephant",
  explanation: "ఏ తో ఏనుగు. పెద్ద తొండం, విసనకర్రల వంటి చెవులు గల అడవిలోని అతిపెద్ద జంతువు.",
  funFact: "Long 'ae' sound as in 'name' or 'game'.",
  svgKey: "elephant",
  accentColor: "#20BF6B",
  bgSoft: "#E9F8F0"
}, {
  id: "ai",
  "char": "ఐ",
  name: "ఐ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "ai",
  ipa: "[aɪ]",
  word: "ఐదు",
  wordTranslit: "Aidu",
  meaning: "Five (5)",
  explanation: "ఐ తో ఐదు. మన చేతికి ఐదు వేళ్ళు ఉంటాయి. ఐదు సంఖ్యను సూచిస్తుంది.",
  funFact: "Diphthong 'ai' pronounced like 'eye' or 'pie'!",
  svgKey: "five",
  accentColor: "#EB3B5A",
  bgSoft: "#FDECEF"
}, {
  id: "o",
  "char": "ఒ",
  name: "ఒ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "o",
  ipa: "[o]",
  word: "ఒంటె",
  wordTranslit: "Onte",
  meaning: "Camel",
  explanation: "ఒ తో ఒంటె. ఎడారి ఓడగా పిలవబడే జంతువు. ఎక్కువ రోజులు నీరు లేకుండా జీవించగలదు.",
  funFact: "Short 'o' sound like in 'omit' or 'oak'.",
  svgKey: "camel",
  accentColor: "#F39C12",
  bgSoft: "#FEF5E7"
}, {
  id: "oo2",
  "char": "ఓ",
  name: "ఓ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "oo",
  ipa: "[oː]",
  word: "ఓడ",
  wordTranslit: "Oda",
  meaning: "Ship",
  explanation: "ఓ తో ఓడ. సముద్రం మీద ప్రయాణించే పెద్ద జల వాహనం.",
  funFact: "Long 'oo' sound like in 'boat' or 'go'.",
  svgKey: "ship",
  accentColor: "#3867D6",
  bgSoft: "#EBF0FB"
}, {
  id: "au",
  "char": "ఔ",
  name: "ఔ",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "au",
  ipa: "[aʊ]",
  word: "ఔషధం",
  wordTranslit: "Aushadham",
  meaning: "Medicine",
  explanation: "ఔ తో ఔషధం. జబ్బులు, అనారోగ్యం నయం చేసే మందు.",
  funFact: "Pronounced like 'ow' in 'cow' or 'cloud'.",
  svgKey: "medicine",
  accentColor: "#8854D0",
  bgSoft: "#F3EEFA"
}, {
  id: "am",
  "char": "అం",
  name: "అం (సున్న)",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "am",
  ipa: "[ʌm]",
  word: "అంబరం",
  wordTranslit: "Ambaram",
  meaning: "Sky / Cosmos",
  explanation: "అం తో అంబరం. పైన నీలంగా కనిపించే అనంతమైన ఆకాశం.",
  funFact: "The circle is called 'Sunna' or 'Poornanushwaram'. It adds an 'm' nasal sound.",
  svgKey: "sky",
  accentColor: "#0FB9B1",
  bgSoft: "#E7F8F7"
}, {
  id: "aha",
  "char": "అః",
  name: "అః (విసర్గ)",
  type: "vowel",
  category: "అచ్చులు (Vowels)",
  translit: "aha",
  ipa: "[ʌhʌ]",
  word: "అంతఃపురం",
  wordTranslit: "Antahpuram",
  meaning: "Palace",
  explanation: "అః తో అంతఃపురం. రాజులు, రాణులు నివసించే విశాలమైన సుందర భవనం.",
  funFact: "The two vertical dots form 'Visarga', producing a soft breathy 'ha' sound.",
  svgKey: "palace",
  accentColor: "#2D98DA",
  bgSoft: "#EAF5FB"
},
// ================= 36 CONSONANTS (హల్లులు) =================
// --- క వర్గం (Ka-varga) ---
{
  id: "ka",
  "char": "క",
  name: "క",
  type: "consonant",
  varga: "క వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ka",
  ipa: "[kʌ]",
  word: "కమలం",
  wordTranslit: "Kamalam",
  meaning: "Lotus Flower",
  explanation: "క తో కమలం. మన జాతీయ పుష్పం. నీటిలో వికసించి స్వచ్ఛతను చాటుతుంది.",
  funFact: "'క' is the first consonant (హల్లు) in Telugu. Lotus is sacred and blooms in ponds!",
  svgKey: "lotus",
  accentColor: "#FC5C65",
  bgSoft: "#FFEFF0"
}, {
  id: "kha",
  "char": "ఖ",
  name: "ఖ",
  type: "consonant",
  varga: "క వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "kha",
  ipa: "[kʰʌ]",
  word: "ఖడ్గం",
  wordTranslit: "Khadgam",
  meaning: "Sword",
  explanation: "ఖ తో ఖడ్గం. పూర్వకాలంలో సైనికులు, వీరులు యుద్ధంలో ఉపయోగించిన ఆయుధం.",
  funFact: "Aspirated consonant - pronounce with a breath of air: 'Kh'!",
  svgKey: "sword",
  accentColor: "#EB3B5A",
  bgSoft: "#FDECEF"
}, {
  id: "ga",
  "char": "గ",
  name: "గ",
  type: "consonant",
  varga: "క వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ga",
  ipa: "[ɡʌ]",
  word: "గడియారం",
  wordTranslit: "Gadiyaaram",
  meaning: "Clock / Watch",
  explanation: "గ తో గడియారం. సమయం ఎంతో విలువైంది అని గుర్తుచేసే పరికరం.",
  funFact: "Voiced consonant like 'g' in 'game'.",
  svgKey: "clock",
  accentColor: "#FA8231",
  bgSoft: "#FFF0E6"
}, {
  id: "gha",
  "char": "ఘ",
  name: "ఘ",
  type: "consonant",
  varga: "క వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "gha",
  ipa: "[ɡʱʌ]",
  word: "ఘటం",
  wordTranslit: "Ghatam",
  meaning: "Clay Pot",
  explanation: "ఘ తో ఘటం. మట్టితో చేసిన కుండ, చల్లని స్వచ్ఛమైన నీటిని ఇస్తుంది.",
  funFact: "Voiced aspirated sound 'Gh'. Clay pots keep water naturally cool!",
  svgKey: "pot",
  accentColor: "#F7B731",
  bgSoft: "#FEF9E7"
}, {
  id: "nga",
  "char": "ఙ",
  name: "ఙ",
  type: "consonant",
  varga: "క వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "nga",
  ipa: "[ŋʌ]",
  word: "వాఙ్మయం",
  wordTranslit: "Vaangmayam",
  meaning: "Literature",
  explanation: "ఙ తో వాఙ్మయం. పుస్తకాలు, కవితలు మరియు జ్ఞాన భాండాగారం.",
  funFact: "Nasal sound 'nga'. Rarely begins a word, mostly used in conjunctions!",
  svgKey: "literature",
  accentColor: "#FED330",
  bgSoft: "#FFFCE6"
},
// --- చ వర్గం (Cha-varga) ---
{
  id: "cha",
  "char": "చ",
  name: "చ",
  type: "consonant",
  varga: "చ వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "cha",
  ipa: "[tʃʌ]",
  word: "చిలుక",
  wordTranslit: "Chiluka",
  meaning: "Parrot",
  explanation: "చ తో చిలుక. పచ్చని రెక్కలు, ఎర్రని ముక్కుతో మనుషుల మాటలు అనుకరించే పక్షి.",
  funFact: "Telugu sweet voice is often compared to chiluka (చిలుక పలుకులు)!",
  svgKey: "parrot",
  accentColor: "#20BF6B",
  bgSoft: "#E9F8F0"
}, {
  id: "chha",
  "char": "ఛ",
  name: "ఛ",
  type: "consonant",
  varga: "చ వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "chha",
  ipa: "[tʃʰʌ]",
  word: "ఛత్రము",
  wordTranslit: "Chhatramu",
  meaning: "Umbrella",
  explanation: "ఛ తో ఛత్రము. ఎండ, వర్షం నుంచి మనలను రక్షించే గొడుగు.",
  funFact: "Aspirated 'Chh' sound. 'Chhatra' also represents royal canopy in Telugu history.",
  svgKey: "umbrella",
  accentColor: "#26DE81",
  bgSoft: "#EAFBF2"
}, {
  id: "ja",
  "char": "జ",
  name: "జ",
  type: "consonant",
  varga: "చ వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ja",
  ipa: "[dʒʌ]",
  word: "జామ",
  wordTranslit: "Jaama",
  meaning: "Guava",
  explanation: "జ తో జామ. విటమిన్-సి పుష్కలంగా ఉండే రుచికరమైన ఆరోగ్య ఫలం.",
  funFact: "Pronounced like 'j' in 'joy' or 'jump'. Guavas are beloved in Andhra & Telangana gardens!",
  svgKey: "guava",
  accentColor: "#10AC84",
  bgSoft: "#E7F7F3"
}, {
  id: "jha",
  "char": "ఝ",
  name: "ఝ",
  type: "consonant",
  varga: "చ వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "jha",
  ipa: "[dʒʱʌ]",
  word: "ఝషము",
  wordTranslit: "Jhashamu",
  meaning: "Fish",
  explanation: "ఝ తో ఝషము. నీటిలో ఈదే చేప. నీరే దాని జీవనాధారం.",
  funFact: "Aspirated 'Jh' sound, like in the musical waterfall word 'Jharina'!",
  svgKey: "fish",
  accentColor: "#00D2D3",
  bgSoft: "#E5FAFA"
}, {
  id: "nya",
  "char": "ఞ",
  name: "ఞ",
  type: "consonant",
  varga: "చ వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "nya",
  ipa: "[ɲʌ]",
  word: "ఆజ్ఞ",
  wordTranslit: "Aagnya",
  meaning: "Order / Command",
  explanation: "ఞ తో ఆజ్ఞ. గురువులు, పెద్దల ఆదేశాలను గౌరవించాలి.",
  funFact: "Palatal nasal sound 'nya' as in 'canyon' or 'piñata'.",
  svgKey: "command",
  accentColor: "#01A3A4",
  bgSoft: "#E5F6F6"
},
// --- ట వర్గం (Ta-varga - Retroflex) ---
{
  id: "ta_retro",
  "char": "ట",
  name: "ట",
  type: "consonant",
  varga: "ట వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ta",
  ipa: "[ʈʌ]",
  word: "టమాటా",
  wordTranslit: "Tamaataa",
  meaning: "Tomato",
  explanation: "ట తో టమాటా. ఎర్రగా ఉండే పుల్లని కూరగాయ. వంటకాలకు చక్కని రుచిని ఇస్తుంది.",
  funFact: "Retroflex 'Ta' sound made by curling the tongue back to touch the roof of your mouth!",
  svgKey: "tomato",
  accentColor: "#FF6B6B",
  bgSoft: "#FFF0F0"
}, {
  id: "tha_retro",
  "char": "ఠ",
  name: "ఠ",
  type: "consonant",
  varga: "ట వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "tha",
  ipa: "[ʈʰʌ]",
  word: "కంఠం",
  wordTranslit: "Kantham",
  meaning: "Throat / Voice",
  explanation: "ఠ తో కంఠం. మనం మాట్లాడటానికి, పాడటానికి తోడ్పడే గొంతు.",
  funFact: "Aspirated retroflex 'Tha'. Also used in ఠస్సా (seal/stamp)!",
  svgKey: "throat",
  accentColor: "#EE5253",
  bgSoft: "#FDEEEE"
}, {
  id: "da_retro",
  "char": "డ",
  name: "డ",
  type: "consonant",
  varga: "ట వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "da",
  ipa: "[ɖʌ]",
  word: "డమరుకం",
  wordTranslit: "Damarukam",
  meaning: "Damaru (Small Drum)",
  explanation: "డ తో డమరుకం. శివుని చేతిలోని లయబద్ధమైన శబ్దాన్ని చేసే చిన్న వాయిద్యం.",
  funFact: "Retroflex 'Da'. Shiva plays the damaru when performing the cosmic dance Ananda Tandava!",
  svgKey: "drum",
  accentColor: "#FF9F43",
  bgSoft: "#FFF5EC"
}, {
  id: "dha_retro",
  "char": "ఢ",
  name: "ఢ",
  type: "consonant",
  varga: "ట వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "dha",
  ipa: "[ɖʱʌ]",
  word: "ఢంకా",
  wordTranslit: "Dhankaa",
  meaning: "Kettle Drum",
  explanation: "ఢ తో ఢంకా. పెద్ద శబ్దం చేస్తూ విజయాన్ని ప్రకటించే వాయిద్యం.",
  funFact: "Aspirated retroflex 'Dha'. The phrase 'Dhanka bajayinchu' means to proclaim victory loudly!",
  svgKey: "kettledrum",
  accentColor: "#F368E0",
  bgSoft: "#FEF0FC"
}, {
  id: "na_retro",
  "char": "ణ",
  name: "ణ",
  type: "consonant",
  varga: "ట వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "na",
  ipa: "[ɳʌ]",
  word: "వీణ",
  wordTranslit: "Veena",
  meaning: "Veena (String Instrument)",
  explanation: "ణ తో వీణ. సరస్వతీ దేవి చేతిలోని మధుర సంగీత వాయిద్యం.",
  funFact: "Retroflex nasal 'Na'. Veena is the national musical instrument of India!",
  svgKey: "veena",
  accentColor: "#54A0FF",
  bgSoft: "#EEF5FF"
},
// --- త వర్గం (Ta-varga - Dental) ---
{
  id: "ta_dental",
  "char": "త",
  name: "త",
  type: "consonant",
  varga: "త వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ta",
  ipa: "[t̪ʌ]",
  word: "తల",
  wordTranslit: "Tala",
  meaning: "Head",
  explanation: "త తో తల. ఆలోచించే మెదడును దాచుకున్న మన శరీర ముఖ్య భాగం.",
  funFact: "Dental 'Ta' produced by touching the tip of the tongue behind upper front teeth!",
  svgKey: "head",
  accentColor: "#5F27CD",
  bgSoft: "#F0EBFA"
}, {
  id: "tha_dental",
  "char": "థ",
  name: "థ",
  type: "consonant",
  varga: "త వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "tha",
  ipa: "[t̪ʰʌ]",
  word: "రథం",
  wordTranslit: "Ratham",
  meaning: "Chariot",
  explanation: "థ తో రథం. పండుగలలో దేవుళ్లను ఊరేగించే సుందరమైన చక్రాల వాహనం.",
  funFact: "Aspirated dental 'Tha'. Temple chariot festivals in Andhra are grand celebrations!",
  svgKey: "chariot",
  accentColor: "#341F97",
  bgSoft: "#EAE8F5"
}, {
  id: "da_dental",
  "char": "ద",
  name: "ద",
  type: "consonant",
  varga: "త వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "da",
  ipa: "[d̪ʌ]",
  word: "దంతం",
  wordTranslit: "Dantam",
  meaning: "Tooth",
  explanation: "ద తో దంతం. మనం ఆహారాన్ని నమలడానికి సహాయపడే పన్ను. రోజూ బ్రష్ చేసుకోవాలి.",
  funFact: "Dental 'Da'. Keep teeth clean and smiling!",
  svgKey: "tooth",
  accentColor: "#0ABDE3",
  bgSoft: "#E6F8FC"
}, {
  id: "dha_dental",
  "char": "ధ",
  name: "ధ",
  type: "consonant",
  varga: "త వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "dha",
  ipa: "[d̪ʱʌ]",
  word: "ధనస్సు",
  wordTranslit: "Dhanassu",
  meaning: "Bow",
  explanation: "ధ తో ధనస్సు. శ్రీరాముని చేతిలోని బాణాలను సంధించే పవిత్ర ఆయుధం.",
  funFact: "Aspirated dental 'Dha'. Symbolizes focus, courage, and virtue.",
  svgKey: "bow",
  accentColor: "#10AC84",
  bgSoft: "#E7F7F3"
}, {
  id: "na_dental",
  "char": "న",
  name: "న",
  type: "consonant",
  varga: "త వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "na",
  ipa: "[n̪ʌ]",
  word: "నక్క",
  wordTranslit: "Nakka",
  meaning: "Fox",
  explanation: "న తో నక్క. అడవిలో తెలివిగా ఉపాయాలతో తిరిగే చురుకైన జంతువు.",
  funFact: "Dental nasal 'Na'. Children hear many folk tales about clever foxes in Telugu!",
  svgKey: "fox",
  accentColor: "#FF9F43",
  bgSoft: "#FFF5EC"
},
// --- ప వర్గం (Pa-varga - Labial) ---
{
  id: "pa",
  "char": "ప",
  name: "ప",
  type: "consonant",
  varga: "ప వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "pa",
  ipa: "[pʌ]",
  word: "పలక",
  wordTranslit: "Palaka",
  meaning: "Slate",
  explanation: "ప తో పలక. చిన్నప్పుడు బలపంతో అక్షరాలు దిద్దే సాధనం.",
  funFact: "Labial consonant 'Pa'. Every Telugu child begins their school journey writing on a palaka!",
  svgKey: "slate",
  accentColor: "#48DBFB",
  bgSoft: "#ECFBFF"
}, {
  id: "pha",
  "char": "ఫ",
  name: "ఫ",
  type: "consonant",
  varga: "ప వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "pha",
  ipa: "[pʰʌ]",
  word: "ఫలం",
  wordTranslit: "Phalam",
  meaning: "Fruit / Result",
  explanation: "ఫ తో ఫలం. చెట్లు మనకు ఇచ్చే తియ్యని పండ్లు, మంచి పనులకు వచ్చే ఫలితం.",
  funFact: "Aspirated labial 'Pha'. Remember: 'కృషి ఉంటే మనుషులు ఋషులవుతారు... ఫలితం దక్కుతుంది'!",
  svgKey: "fruit",
  accentColor: "#1DD1A1",
  bgSoft: "#E8FAF5"
}, {
  id: "ba",
  "char": "బ",
  name: "బ",
  type: "consonant",
  varga: "ప వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ba",
  ipa: "[bʌ]",
  word: "బంతి",
  wordTranslit: "Banti",
  meaning: "Ball",
  explanation: "బ తో బంతి. పిల్లలు ఆటలాడుకోవడానికి ఇష్టపడే రంగుల బంతి.",
  funFact: "Voiced labial 'Ba'. Playing ball games keeps body and mind active!",
  svgKey: "ball",
  accentColor: "#EE5253",
  bgSoft: "#FDEEEE"
}, {
  id: "bha",
  "char": "భ",
  name: "భ",
  type: "consonant",
  varga: "ప వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "bha",
  ipa: "[bʱʌ]",
  word: "భల్లూకం",
  wordTranslit: "Bhallookam",
  meaning: "Bear",
  explanation: "భ తో భల్లూకం. దట్టమైన బొచ్చుతో ఉండే అడవి ఎలుగుబంటి.",
  funFact: "Aspirated voiced labial 'Bha'. Bears love sweet honey from trees!",
  svgKey: "bear",
  accentColor: "#5F27CD",
  bgSoft: "#F0EBFA"
}, {
  id: "ma",
  "char": "మ",
  name: "మ",
  type: "consonant",
  varga: "ప వర్గం",
  category: "హల్లులు (Consonants)",
  translit: "ma",
  ipa: "[mʌ]",
  word: "మామిడి",
  wordTranslit: "Maamidi",
  meaning: "Mango",
  explanation: "మ తో మామిడి. పండ్లలో రాజు. వేసవిలో వచ్చే అమృతం లాంటి తీపి పండు.",
  funFact: "Labial nasal 'Ma'. Mango is India's national fruit and Andhra's pride (Banganapalli)!",
  svgKey: "mango",
  accentColor: "#FF9F43",
  bgSoft: "#FFF5EC"
},
// --- అంతస్థాలు & ఊష్మాలు (Semi-vowels, Sibilants, Aspirates) ---
{
  id: "ya",
  "char": "య",
  name: "య",
  type: "consonant",
  varga: "అంతస్థాలు",
  category: "హల్లులు (Consonants)",
  translit: "ya",
  ipa: "[jʌ]",
  word: "యంత్రం",
  wordTranslit: "Yantram",
  meaning: "Machine / Instrument",
  explanation: "య తో యంత్రం. మనుషుల పనిని సులభతరం చేసే ఆధునిక పరికరం.",
  funFact: "Notice that 'మ' has a small circle, while 'య' has a large circle with talakattu!",
  svgKey: "machine",
  accentColor: "#341F97",
  bgSoft: "#EAE8F5"
}, {
  id: "ra",
  "char": "ర",
  name: "ర",
  type: "consonant",
  varga: "అంతస్థాలు",
  category: "హల్లులు (Consonants)",
  translit: "ra",
  ipa: "[rʌ]",
  word: "రవి",
  wordTranslit: "Ravi",
  meaning: "Sun",
  explanation: "ర తో రవి. ప్రతి ఉదయం వెలుగులను ఇచ్చే సూర్య భగవానుడు.",
  funFact: "Tapped 'Ra' sound. 'రవి' shines golden rays every dawn!",
  svgKey: "sun",
  accentColor: "#F368E0",
  bgSoft: "#FEF0FC"
}, {
  id: "la",
  "char": "ల",
  name: "ల",
  type: "consonant",
  varga: "అంతస్థాలు",
  category: "హల్లులు (Consonants)",
  translit: "la",
  ipa: "[lʌ]",
  word: "లడ్డు",
  wordTranslit: "Laddu",
  meaning: "Laddu (Sweet)",
  explanation: "ల తో లడ్డు. వినాయకుడికి ఇష్టమైన తీపి ప్రసాదం, అందరికీ నచ్చే మిఠాయి.",
  funFact: "Liquid lateral 'La'. Tirupati Laddu is world famous for its divine flavor!",
  svgKey: "laddu",
  accentColor: "#FF6B6B",
  bgSoft: "#FFF0F0"
}, {
  id: "va",
  "char": "వ",
  name: "వ",
  type: "consonant",
  varga: "అంతస్థాలు",
  category: "హల్లులు (Consonants)",
  translit: "va",
  ipa: "[ʋʌ]",
  word: "వల",
  wordTranslit: "Vala",
  meaning: "Net (Fishing Net)",
  explanation: "వ తో వల. జాలరులు చేపలను పట్టడానికి ఉపయోగించే దారాల అల్లిక.",
  funFact: "Semi-vowel 'Va' shaped smoothly like a soft circle with a tick on top.",
  svgKey: "net",
  accentColor: "#48DBFB",
  bgSoft: "#ECFBFF"
}, {
  id: "sha",
  "char": "శ",
  name: "శ",
  type: "consonant",
  varga: "ఊష్మాలు",
  category: "హల్లులు (Consonants)",
  translit: "sha",
  ipa: "[ʃʌ]",
  word: "శంఖం",
  wordTranslit: "Shankham",
  meaning: "Conch",
  explanation: "శ తో శంఖం. సముద్రంలో లభించే పవిత్రమైన మంగళ ప్రదమైన నాదం చేసే వస్తువు.",
  funFact: "Palatal sibilant 'Sha' like in 'ship' or 'shine'.",
  svgKey: "conch",
  accentColor: "#0ABDE3",
  bgSoft: "#E6F8FC"
}, {
  id: "ssha",
  "char": "ష",
  name: "ష",
  type: "consonant",
  varga: "ఊష్మాలు",
  category: "హల్లులు (Consonants)",
  translit: "ssha",
  ipa: "[ʂʌ]",
  word: "షట్కోణం",
  wordTranslit: "Shatkonam",
  meaning: "Hexagon",
  explanation: "ష తో షట్కోణం. ఆరు భుజాలు, ఆరు కోణాలు గల జ్యామితీయ ఆకారం.",
  funFact: "Retroflex sibilant 'Ssha'. 'షట్' means six in Sanskrit & classical Telugu!",
  svgKey: "hexagon",
  accentColor: "#1DD1A1",
  bgSoft: "#E8FAF5"
}, {
  id: "sa",
  "char": "స",
  name: "స",
  type: "consonant",
  varga: "ఊష్మాలు",
  category: "హల్లులు (Consonants)",
  translit: "sa",
  ipa: "[sʌ]",
  word: "సంచి",
  wordTranslit: "Sanchi",
  meaning: "Bag",
  explanation: "స తో సంచి. పుస్తకాలు, సామాన్లు మోయడానికి సహాయపడే సంచి.",
  funFact: "Dental sibilant 'Sa' like in 'sun'. Cloth bags protect nature!",
  svgKey: "bag",
  accentColor: "#10AC84",
  bgSoft: "#E7F7F3"
}, {
  id: "ha",
  "char": "హ",
  name: "హ",
  type: "consonant",
  varga: "ఊష్మాలు",
  category: "హల్లులు (Consonants)",
  translit: "ha",
  ipa: "[hʌ]",
  word: "హంస",
  wordTranslit: "Hamsa",
  meaning: "Swan",
  explanation: "హ తో హంస. నీరు పాలు వేరుచేసే వివేకానికి చిహ్నమైన అందమైన తెల్లని పక్షి.",
  funFact: "Glottal aspirate 'Ha'. Saraswati Devi rides the graceful white Hamsa!",
  svgKey: "swan",
  accentColor: "#54A0FF",
  bgSoft: "#EEF5FF"
}, {
  id: "lla",
  "char": "ళ",
  name: "ళ",
  type: "consonant",
  varga: "ఊష్మాలు",
  category: "హల్లులు (Consonants)",
  translit: "lla",
  ipa: "[ɭʌ]",
  word: "తాళం",
  wordTranslit: "Taalam",
  meaning: "Lock / Padlock",
  explanation: "ళ తో తాళం. మన ఇళ్లకు, ఆస్తులకు రక్షణ కల్పించే తాళం కప్ప.",
  funFact: "Retroflex 'Lla' - pronounced deep inside the mouth with curled tongue.",
  svgKey: "lock",
  accentColor: "#5F27CD",
  bgSoft: "#F0EBFA"
}, {
  id: "ksha",
  "char": "క్ష",
  name: "క్ష",
  type: "consonant",
  varga: "సంయుక్తాక్షరం",
  category: "హల్లులు (Consonants)",
  translit: "ksha",
  ipa: "[kʃʌ]",
  word: "వృక్షం",
  wordTranslit: "Vruksham",
  meaning: "Tree",
  explanation: "క్ష తో వృక్షం. మనకు నీడ, పండ్లు, స్వచ్ఛమైన గాలిని ఇచ్చే ప్రాణదాత చెట్టు.",
  funFact: "Traditional compound letter (క + ష = క్ష) always taught in Telugu alphabet charts!",
  svgKey: "tree",
  accentColor: "#20BF6B",
  bgSoft: "#E9F8F0"
}, {
  id: "bandi_ra",
  "char": "ఱ",
  name: "ఱ (బండి ర)",
  type: "consonant",
  varga: "అంతస్థాలు",
  category: "హల్లులు (Consonants)",
  translit: "ra (bandi)",
  ipa: "[rːʌ]",
  word: "గుఱ్ఱం",
  wordTranslit: "Gurram",
  meaning: "Horse",
  explanation: "ఱ తో గుఱ్ఱం. గాలివేగంతో పరిగెత్తే దృఢమైన అందమైన జంతువు.",
  funFact: "Known as 'Bandi Ra' (బండి ర) in Telugu. Traditional trilled 'R' sound!",
  svgKey: "horse",
  accentColor: "#FA8231",
  bgSoft: "#FFF0E6"
}];

// ================= GUNINTHALU (గుణింతాలు) SYSTEM =================
// 16 Vowel signs in Telugu:
var GUNINTHAPU_GURTULU = exports.GUNINTHAPU_GURTULU = [{
  id: "talakattu",
  name: "తలకట్టు",
  sign: "",
  vowel: "అ",
  translit: "a",
  symbol: "( ్ లేక మూల రూపం)"
}, {
  id: "dirgham",
  name: "దీర్ఘం",
  sign: "ా",
  vowel: "ఆ",
  translit: "aa",
  symbol: " ా "
}, {
  id: "gudi",
  name: "గుడి",
  sign: "ి",
  vowel: "ఇ",
  translit: "i",
  symbol: " ి "
}, {
  id: "gudi_dirgham",
  name: "గుడిదీర్ఘం",
  sign: "ీ",
  vowel: "ఈ",
  translit: "ee",
  symbol: " ీ "
}, {
  id: "kommu",
  name: "కొమ్ము",
  sign: "ు",
  vowel: "ఉ",
  translit: "u",
  symbol: " ు "
}, {
  id: "kommu_dirgham",
  name: "కొమ్ముదీర్ఘం",
  sign: "ూ",
  vowel: "ఊ",
  translit: "oo",
  symbol: " ూ "
}, {
  id: "vatrusudi",
  name: "వట్రుసుడి",
  sign: "ృ",
  vowel: "ఋ",
  translit: "ru",
  symbol: " ృ "
}, {
  id: "vatrusudi_dirgham",
  name: "వట్రుసుడిదీర్ఘం",
  sign: "ౄ",
  vowel: "ౠ",
  translit: "roo",
  symbol: " ౄ "
}, {
  id: "etvam",
  name: "ఎత్వం",
  sign: "ె",
  vowel: "ఎ",
  translit: "e",
  symbol: " ె "
}, {
  id: "aetvam",
  name: "ఏత్వం",
  sign: "ే",
  vowel: "ఏ",
  translit: "ae",
  symbol: " ే "
}, {
  id: "aitvam",
  name: "ఐత్వం",
  sign: "ై",
  vowel: "ఐ",
  translit: "ai",
  symbol: " ై "
}, {
  id: "otvam",
  name: "ఒత్వం",
  sign: "ొ",
  vowel: "ఒ",
  translit: "o",
  symbol: " ొ "
}, {
  id: "ootvam",
  name: "ఓత్వం",
  sign: "ో",
  vowel: "ఓ",
  translit: "oo",
  symbol: " ో "
}, {
  id: "autvam",
  name: "ఔత్వం",
  sign: "ౌ",
  vowel: "ఔ",
  translit: "au",
  symbol: " ౌ "
}, {
  id: "sunna",
  name: "సున్న",
  sign: "ం",
  vowel: "అం",
  translit: "am",
  symbol: " ం "
}, {
  id: "visarga",
  name: "విసర్గ",
  sign: "ః",
  vowel: "అః",
  translit: "aha",
  symbol: " ః "
}];

// Consonants available to practice Guninthalu:
var GUNINTHALU_CONSONANTS = exports.GUNINTHALU_CONSONANTS = [{
  "char": "క",
  baseTranslit: "k",
  name: "క - గుణింతం",
  exampleBase: "కాకి (Crow)"
}, {
  "char": "ఖ",
  baseTranslit: "kh",
  name: "ఖ - గుణింతం",
  exampleBase: "ఖర్జూరం (Dates)"
}, {
  "char": "గ",
  baseTranslit: "g",
  name: "గ - గుణింతం",
  exampleBase: "గాలి (Wind)"
}, {
  "char": "ఘ",
  baseTranslit: "gh",
  name: "ఘ - గుణింతం",
  exampleBase: "ఘంట (Bell)"
}, {
  "char": "చ",
  baseTranslit: "ch",
  name: "చ - గుణింతం",
  exampleBase: "చాప (Mat)"
}, {
  "char": "ఛ",
  baseTranslit: "chh",
  name: "ఛ - గుణింతం",
  exampleBase: "ఛాయ (Shadow)"
}, {
  "char": "జ",
  baseTranslit: "j",
  name: "జ - గుణింతం",
  exampleBase: "జాబిల్లి (Moon)"
}, {
  "char": "ఝ",
  baseTranslit: "jh",
  name: "ఝ - గుణింతం",
  exampleBase: "ఝరి (Stream)"
}, {
  "char": "ట",
  baseTranslit: "t",
  name: "ట - గుణింతం",
  exampleBase: "టాపీ (Trowel)"
}, {
  "char": "ఠ",
  baseTranslit: "th",
  name: "ఠ - గుణింతం",
  exampleBase: "ఠీవి (Dignity)"
}, {
  "char": "డ",
  baseTranslit: "d",
  name: "డ - గుణింతం",
  exampleBase: "డబ్బా (Box)"
}, {
  "char": "ఢ",
  baseTranslit: "dh",
  name: "ఢ - గుణింతం",
  exampleBase: "ఢక్కా (Large drum)"
}, {
  "char": "త",
  baseTranslit: "t",
  name: "త - గుణింతం",
  exampleBase: "తామర (Lotus)"
}, {
  "char": "థ",
  baseTranslit: "th",
  name: "థ - గుణింతం",
  exampleBase: "థామస్ (Thomas)"
}, {
  "char": "ద",
  baseTranslit: "d",
  name: "ద - గుణింతం",
  exampleBase: "దారి (Way)"
}, {
  "char": "ధ",
  baseTranslit: "dh",
  name: "ధ - గుణింతం",
  exampleBase: "ధాత్రి (Earth)"
}, {
  "char": "న",
  baseTranslit: "n",
  name: "న - గుణింతం",
  exampleBase: "నావ (Boat)"
}, {
  "char": "ప",
  baseTranslit: "p",
  name: "ప - గుణింతం",
  exampleBase: "పావురం (Pigeon)"
}, {
  "char": "ఫ",
  baseTranslit: "ph",
  name: "ఫ - గుణింతం",
  exampleBase: "ఫకీరు (Fakir)"
}, {
  "char": "బ",
  baseTranslit: "b",
  name: "బ - గుణింతం",
  exampleBase: "బాతు (Duck)"
}, {
  "char": "భ",
  baseTranslit: "bh",
  name: "భ - గుణింతం",
  exampleBase: "భారతం (India)"
}, {
  "char": "మ",
  baseTranslit: "m",
  name: "మ - గుణింతం",
  exampleBase: "మాల (Garland)"
}, {
  "char": "య",
  baseTranslit: "y",
  name: "య - గుణింతం",
  exampleBase: "యామిని (Night)"
}, {
  "char": "ర",
  baseTranslit: "r",
  name: "ర - గుణింతం",
  exampleBase: "రాజు (King)"
}, {
  "char": "ల",
  baseTranslit: "l",
  name: "ల - గుణింతం",
  exampleBase: "లాంతరు (Lantern)"
}, {
  "char": "వ",
  baseTranslit: "v",
  name: "వ - గుణింతం",
  exampleBase: "వాన (Rain)"
}, {
  "char": "శ",
  baseTranslit: "sh",
  name: "శ - గుణింతం",
  exampleBase: "శారద (Sharada)"
}, {
  "char": "ష",
  baseTranslit: "ssh",
  name: "ష - గుణింతం",
  exampleBase: "షాపు (Shop)"
}, {
  "char": "స",
  baseTranslit: "s",
  name: "స - గుణింతం",
  exampleBase: "సబ్బు (Soap)"
}, {
  "char": "హ",
  baseTranslit: "h",
  name: "హ - గుణింతం",
  exampleBase: "హారతి (Aarti)"
}, {
  "char": "ళ",
  baseTranslit: "ll",
  name: "ళ - గుణింతం",
  exampleBase: "తాళము (Lock)"
}, {
  "char": "ఱ",
  baseTranslit: "rr",
  name: "ఱ - గుణింతం",
  exampleBase: "గుఱ్ఱము (Horse)"
}];

// Helper to generate combinations with correct Telugu Unicode rendering:
function getGuninthamForConsonant(consonantChar, baseTranslit) {
  return GUNINTHAPU_GURTULU.map(function (gurtu) {
    var combinedChar = "";
    if (gurtu.sign === "") {
      combinedChar = consonantChar;
    } else {
      combinedChar = consonantChar + gurtu.sign;
    }
    var fullTranslit = baseTranslit + gurtu.translit;
    return {
      signName: gurtu.name,
      vowel: gurtu.vowel,
      signSymbol: gurtu.symbol,
      combinedChar: combinedChar,
      translit: fullTranslit,
      formula: "".concat(consonantChar, " + ").concat(gurtu.sign || "అ", " = ").concat(combinedChar)
    };
  });
}

// Sample words for each combination of "క"
var SAMPLE_GUNINTHAM_WORDS = exports.SAMPLE_GUNINTHAM_WORDS = {
  "క": {
    word: "కల",
    meaning: "Dream",
    translit: "Kala"
  },
  "కా": {
    word: "కాకి",
    meaning: "Crow",
    translit: "Kaaki"
  },
  "కి": {
    word: "కిటికి",
    meaning: "Window",
    translit: "Kitiki"
  },
  "కీ": {
    word: "కీటకం",
    meaning: "Insect",
    translit: "Keetakam"
  },
  "కు": {
    word: "కుండ",
    meaning: "Clay Pot",
    translit: "Kunda"
  },
  "కూ": {
    word: "కూర",
    meaning: "Curry / Vegetable",
    translit: "Koora"
  },
  "కృ": {
    word: "కృషి",
    meaning: "Hard work / Effort",
    translit: "Krushi"
  },
  "కౄ": {
    word: "కౄరుడు",
    meaning: "Cruel person",
    translit: "Kroorudu"
  },
  "కె": {
    word: "కెరటం",
    meaning: "Ocean Wave",
    translit: "Keratam"
  },
  "కే": {
    word: "కేక",
    meaning: "Shout / Joyous cheer",
    translit: "Keka"
  },
  "కై": {
    word: "కైక",
    meaning: "Kaika (Queen in Ramayana)",
    translit: "Kaika"
  },
  "కొ": {
    word: "కొంగ",
    meaning: "Crane (Bird)",
    translit: "Konga"
  },
  "కో": {
    word: "కోతి",
    meaning: "Monkey",
    translit: "Koti"
  },
  "కౌ": {
    word: "కౌగిలి",
    meaning: "Warm Hug",
    translit: "Kaugili"
  },
  "కం": {
    word: "కంచం",
    meaning: "Plate / Dining dish",
    translit: "Kancham"
  },
  "కః": {
    word: "దుఃఖం (సంయోగం)",
    meaning: "Sorrow (sample)",
    translit: "Duhkham"
  }
};

// ================= 8 CATEGORIES OF PICTURE VOCABULARY =================
var VOCABULARY_CATEGORIES = exports.VOCABULARY_CATEGORIES = [{
  id: "all",
  name: "అన్నీ (All)",
  icon: "✨"
}, {
  id: "animals",
  name: "జంతువులు (Animals)",
  icon: "🦁"
}, {
  id: "birds",
  name: "పక్షులు (Birds)",
  icon: "🦜"
}, {
  id: "fruits",
  name: "పండ్లు (Fruits)",
  icon: "🥭"
}, {
  id: "vegetables",
  name: "కూరగాయలు (Vegetables)",
  icon: "🍅"
}, {
  id: "household",
  name: "గృహోపకరణాలు (Household)",
  icon: "🏠"
}, {
  id: "nature",
  name: "ప్రకృతి (Nature)",
  icon: "🌳"
}, {
  id: "family",
  name: "కుటుంబం (Family)",
  icon: "👨‍👩‍👧‍👦"
}, {
  id: "numbers",
  name: "సంఖ్యలు (Numbers 1-10)",
  icon: "🔢"
}];
var VOCABULARY_ITEMS = exports.VOCABULARY_ITEMS = [
// Animals (జంతువులు)
{
  id: "v1",
  category: "animals",
  telugu: "సింహం",
  translit: "Simham",
  english: "Lion",
  letter: "స",
  svgKey: "lion"
}, {
  id: "v2",
  category: "animals",
  telugu: "ఏనుగు",
  translit: "Aenugu",
  english: "Elephant",
  letter: "ఏ",
  svgKey: "elephant"
}, {
  id: "v3",
  category: "animals",
  telugu: "గుర్రం",
  translit: "Gurram",
  english: "Horse",
  letter: "గ",
  svgKey: "horse"
}, {
  id: "v4",
  category: "animals",
  telugu: "ఆవు",
  translit: "Aavu",
  english: "Cow",
  letter: "ఆ",
  svgKey: "cow"
}, {
  id: "v5",
  category: "animals",
  telugu: "నక్క",
  translit: "Nakka",
  english: "Fox",
  letter: "న",
  svgKey: "fox"
}, {
  id: "v6",
  category: "animals",
  telugu: "కుక్క",
  translit: "Kukka",
  english: "Dog",
  letter: "క",
  svgKey: "dog"
}, {
  id: "v7",
  category: "animals",
  telugu: "పిల్లి",
  translit: "Pilli",
  english: "Cat",
  letter: "ప",
  svgKey: "cat"
}, {
  id: "v8",
  category: "animals",
  telugu: "ఎలుక",
  translit: "Eluka",
  english: "Mouse / Rat",
  letter: "ఎ",
  svgKey: "mouse"
}, {
  id: "v9",
  category: "animals",
  telugu: "ఉడుత",
  translit: "Uduta",
  english: "Squirrel",
  letter: "ఉ",
  svgKey: "squirrel"
}, {
  id: "v10",
  category: "animals",
  telugu: "ఒంటె",
  translit: "Onte",
  english: "Camel",
  letter: "ఒ",
  svgKey: "camel"
}, {
  id: "v11",
  category: "animals",
  telugu: "భల్లూకం",
  translit: "Bhallookam",
  english: "Bear",
  letter: "భ",
  svgKey: "bear"
}, {
  id: "v12",
  category: "animals",
  telugu: "కోతి",
  translit: "Koti",
  english: "Monkey",
  letter: "క",
  svgKey: "monkey"
},
// Birds (పక్షులు)
{
  id: "v13",
  category: "birds",
  telugu: "చిలుక",
  translit: "Chiluka",
  english: "Parrot",
  letter: "చ",
  svgKey: "parrot"
}, {
  id: "v14",
  category: "birds",
  telugu: "నెమలి",
  translit: "Nemali",
  english: "Peacock",
  letter: "న",
  svgKey: "peacock"
}, {
  id: "v15",
  category: "birds",
  telugu: "కాకి",
  translit: "Kaaki",
  english: "Crow",
  letter: "క",
  svgKey: "crow"
}, {
  id: "v16",
  category: "birds",
  telugu: "హంస",
  translit: "Hamsa",
  english: "Swan",
  letter: "హ",
  svgKey: "swan"
}, {
  id: "v17",
  category: "birds",
  telugu: "పావురం",
  translit: "Paavuram",
  english: "Pigeon",
  letter: "ప",
  svgKey: "pigeon"
}, {
  id: "v18",
  category: "birds",
  telugu: "గ్రద్ద",
  translit: "Gradda",
  english: "Eagle",
  letter: "గ",
  svgKey: "eagle"
}, {
  id: "v19",
  category: "birds",
  telugu: "కోడి",
  translit: "Kodi",
  english: "Hen / Rooster",
  letter: "క",
  svgKey: "hen"
},
// Fruits (పండ్లు)
{
  id: "v20",
  category: "fruits",
  telugu: "మామిడి",
  translit: "Maamidi",
  english: "Mango",
  letter: "మ",
  svgKey: "mango"
}, {
  id: "v21",
  category: "fruits",
  telugu: "అరటి",
  translit: "Arati",
  english: "Banana",
  letter: "అ",
  svgKey: "banana"
}, {
  id: "v22",
  category: "fruits",
  telugu: "జామ",
  translit: "Jaama",
  english: "Guava",
  letter: "జ",
  svgKey: "guava"
}, {
  id: "v23",
  category: "fruits",
  telugu: "ఆపిల్",
  translit: "Aapil",
  english: "Apple",
  letter: "ఆ",
  svgKey: "apple"
}, {
  id: "v24",
  category: "fruits",
  telugu: "ద్రాక్ష",
  translit: "Draaksha",
  english: "Grapes",
  letter: "ద",
  svgKey: "grapes"
}, {
  id: "v25",
  category: "fruits",
  telugu: "దానిమ్మ",
  translit: "Danimma",
  english: "Pomegranate",
  letter: "ద",
  svgKey: "pomegranate"
}, {
  id: "v26",
  category: "fruits",
  telugu: "పుచ్చకాయ",
  translit: "Puchhakaaya",
  english: "Watermelon",
  letter: "ప",
  svgKey: "watermelon"
},
// Vegetables (కూరగాయలు)
{
  id: "v27",
  category: "vegetables",
  telugu: "టమాటా",
  translit: "Tamaataa",
  english: "Tomato",
  letter: "ట",
  svgKey: "tomato"
}, {
  id: "v28",
  category: "vegetables",
  telugu: "వంకాయ",
  translit: "Vankaaya",
  english: "Brinjal (Eggplant)",
  letter: "వ",
  svgKey: "brinjal"
}, {
  id: "v29",
  category: "vegetables",
  telugu: "బంగాళాదుంప",
  translit: "Bangaaladumpa",
  english: "Potato",
  letter: "బ",
  svgKey: "potato"
}, {
  id: "v30",
  category: "vegetables",
  telugu: "బెండకాయ",
  translit: "Bendakaaya",
  english: "Lady Finger / Okra",
  letter: "బ",
  svgKey: "okra"
}, {
  id: "v31",
  category: "vegetables",
  telugu: "ఉల్లిపాయ",
  translit: "Ullipaaya",
  english: "Onion",
  letter: "ఉ",
  svgKey: "onion"
}, {
  id: "v32",
  category: "vegetables",
  telugu: "క్యారెట్",
  translit: "Cyaaret",
  english: "Carrot",
  letter: "క",
  svgKey: "carrot"
},
// Household Objects (గృహోపకరణాలు)
{
  id: "v33",
  category: "household",
  telugu: "గడియారం",
  translit: "Gadiyaaram",
  english: "Clock",
  letter: "గ",
  svgKey: "clock"
}, {
  id: "v34",
  category: "household",
  telugu: "పుస్తకం",
  translit: "Pusthakam",
  english: "Book",
  letter: "ప",
  svgKey: "book"
}, {
  id: "v35",
  category: "household",
  telugu: "పలక",
  translit: "Palaka",
  english: "Slate",
  letter: "ప",
  svgKey: "slate"
}, {
  id: "v36",
  category: "household",
  telugu: "కుర్చీ",
  translit: "Kurchi",
  english: "Chair",
  letter: "క",
  svgKey: "chair"
}, {
  id: "v37",
  category: "household",
  telugu: "దీపం",
  translit: "Deepam",
  english: "Lamp",
  letter: "ద",
  svgKey: "lamp"
}, {
  id: "v38",
  category: "household",
  telugu: "తాళం",
  translit: "Taalam",
  english: "Lock",
  letter: "త",
  svgKey: "lock"
}, {
  id: "v39",
  category: "household",
  telugu: "గొడుగు",
  translit: "Godugu",
  english: "Umbrella",
  letter: "గ",
  svgKey: "umbrella"
},
// Nature (ప్రకృతి)
{
  id: "v40",
  category: "nature",
  telugu: "చెట్టు",
  translit: "Chettu",
  english: "Tree",
  letter: "చ",
  svgKey: "tree"
}, {
  id: "v41",
  category: "nature",
  telugu: "పువ్వు",
  translit: "Puvvu",
  english: "Flower",
  letter: "ప",
  svgKey: "flower"
}, {
  id: "v42",
  category: "nature",
  telugu: "నది",
  translit: "Nadi",
  english: "River",
  letter: "న",
  svgKey: "river"
}, {
  id: "v43",
  category: "nature",
  telugu: "సూర్యుడు",
  translit: "Sooryudu",
  english: "Sun",
  letter: "స",
  svgKey: "sun"
}, {
  id: "v44",
  category: "nature",
  telugu: "చంద్రుడు",
  translit: "Chandrudu",
  english: "Moon",
  letter: "చ",
  svgKey: "moon"
}, {
  id: "v45",
  category: "nature",
  telugu: "నక్షత్రం",
  translit: "Nakshatram",
  english: "Star",
  letter: "న",
  svgKey: "star"
}, {
  id: "v46",
  category: "nature",
  telugu: "ఆకాశం",
  translit: "Aakaasham",
  english: "Sky",
  letter: "ఆ",
  svgKey: "sky"
},
// Family (కుటుంబం)
{
  id: "v47",
  category: "family",
  telugu: "అమ్మ",
  translit: "Amma",
  english: "Mother",
  letter: "అ",
  svgKey: "mother"
}, {
  id: "v48",
  category: "family",
  telugu: "నాన్న",
  translit: "Naanna",
  english: "Father",
  letter: "న",
  svgKey: "father"
}, {
  id: "v49",
  category: "family",
  telugu: "తాతయ్య",
  translit: "Taatayya",
  english: "Grandfather",
  letter: "త",
  svgKey: "grandfather"
}, {
  id: "v50",
  category: "family",
  telugu: "అమ్మమ్మ",
  translit: "Ammamma",
  english: "Grandmother",
  letter: "అ",
  svgKey: "grandmother"
}, {
  id: "v51",
  category: "family",
  telugu: "అన్న",
  translit: "Anna",
  english: "Elder Brother",
  letter: "అ",
  svgKey: "brother"
}, {
  id: "v52",
  category: "family",
  telugu: "అక్క",
  translit: "Akka",
  english: "Elder Sister",
  letter: "అ",
  svgKey: "sister"
},
// Numbers 1-10 (సంఖ్యలు)
{
  id: "v53",
  category: "numbers",
  telugu: "ఒకటి (1)",
  translit: "Okati",
  english: "One",
  letter: "ఒ",
  svgKey: "num1"
}, {
  id: "v54",
  category: "numbers",
  telugu: "రెండు (2)",
  translit: "Rendu",
  english: "Two",
  letter: "ర",
  svgKey: "num2"
}, {
  id: "v55",
  category: "numbers",
  telugu: "మూడు (3)",
  translit: "Moodu",
  english: "Three",
  letter: "మ",
  svgKey: "num3"
}, {
  id: "v56",
  category: "numbers",
  telugu: "నాలుగు (4)",
  translit: "Naalugu",
  english: "Four",
  letter: "న",
  svgKey: "num4"
}, {
  id: "v57",
  category: "numbers",
  telugu: "ఐదు (5)",
  translit: "Aidu",
  english: "Five",
  letter: "ఐ",
  svgKey: "num5"
}, {
  id: "v58",
  category: "numbers",
  telugu: "ఆరు (6)",
  translit: "Aaru",
  english: "Six",
  letter: "ఆ",
  svgKey: "num6"
}, {
  id: "v59",
  category: "numbers",
  telugu: "ఏడు (7)",
  translit: "Aedu",
  english: "Seven",
  letter: "ఏ",
  svgKey: "num7"
}, {
  id: "v60",
  category: "numbers",
  telugu: "ఎనిమిది (8)",
  translit: "Enimidi",
  english: "Eight",
  letter: "ఎ",
  svgKey: "num8"
}, {
  id: "v61",
  category: "numbers",
  telugu: "తొమ్మిది (9)",
  translit: "Tommidi",
  english: "Nine",
  letter: "త",
  svgKey: "num9"
}, {
  id: "v62",
  category: "numbers",
  telugu: "పది (10)",
  translit: "Padi",
  english: "Ten",
  letter: "ప",
  svgKey: "num10"
}];
  });

  define("src/utils/audioUtils.js", function(module, exports, require) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audioService = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TELUGU_PHONETICS = {
  // 16 Vowels (అచ్చులు)
  "అ": "uh",
  "ఆ": "aa",
  "ఇ": "ih",
  "ఈ": "ee",
  "ఉ": "oo",
  "ఊ": "ooo",
  "ఋ": "ru",
  "ౠ": "roo",
  "ఎ": "eh",
  "ఏ": "ay",
  "ఐ": "eye",
  "ఒ": "oh",
  "ఓ": "ooh",
  "ఔ": "ow",
  "అం": "um",
  "అః": "aha",
  // 36 Consonants (హల్లులు)
  "క": "ka",
  "ఖ": "kha",
  "గ": "ga",
  "ఘ": "gha",
  "ఙ": "nga",
  "చ": "cha",
  "ఛ": "chha",
  "జ": "ja",
  "ఝ": "jha",
  "ఞ": "nya",
  "ట": "tta",
  "ఠ": "ttha",
  "డ": "dda",
  "ఢ": "ddha",
  "ణ": "nna",
  "త": "tha",
  "థ": "thha",
  "ద": "dha",
  "ధ": "dhha",
  "న": "na",
  "ప": "pa",
  "ఫ": "pha",
  "బ": "ba",
  "భ": "bha",
  "మ": "ma",
  "య": "ya",
  "ర": "ra",
  "ల": "la",
  "వ": "va",
  "శ": "sha",
  "ష": "shha",
  "స": "sa",
  "హ": "ha",
  "ళ": "lla",
  "క్ష": "ksha",
  "ఱ": "rra",
  // Words
  "అమ్మ": "Amma",
  "ఆవు": "Aavu",
  "ఇల్లు": "Illu",
  "ఈగ": "Eega",
  "ఉడుత": "Uduta",
  "ఊయల": "Ooyala",
  "ఋషి": "Rishi",
  "ౠక": "Rooka",
  "ఎలుక": "Eluka",
  "ఏనుగు": "Enugu",
  "ఐదు": "Aidu",
  "ఒంటె": "Onte",
  "ఓడ": "Oada",
  "ఔషధం": "Aushadham",
  "అంబారి": "Ambaari",
  "అంతఃపురం": "Anthahpuram",
  "కమలం": "Kamalam",
  "ఖడ్గం": "Khadgam",
  "గంప": "Gampa",
  "ఘటం": "Ghatam",
  "చక్రం": "Chakram",
  "ఛత్రం": "Chhatram",
  "జడ": "Jada",
  "ఝషం": "Jhasham",
  "టపాకాయ": "Tapaakaaya",
  "కంఠం": "Kantham",
  "డమరుకం": "Damarukam",
  "ఢంకా": "Dhanka",
  "బాణం": "Baanam",
  "తల": "Thala",
  "రథం": "Ratham",
  "దండ": "Dhanda",
  "ధనుస్సు": "Dhanussu",
  "నగ": "Naga",
  "పలక": "Palaka",
  "ఫలం": "Phalam",
  "బంతి": "Banthi",
  "భరిణ": "Bharina",
  "మంచం": "Mancham",
  "యజ్ఞం": "Yajnam",
  "రథము": "Rathamu",
  "లత": "Latha",
  "వల": "Vala",
  "శంఖం": "Shankham",
  "షట్కోణం": "Shatkonam",
  "సంచి": "Sanchi",
  "హంస": "Hamsa",
  "తాళం": "Taalam",
  "వృక్షం": "Vriksham",
  "గుఱ్ఱం": "Gurram",
  "సింహం": "Simham",
  "పులి": "Puli",
  "కుక్క": "Kukka",
  "పిల్లి": "Pilli",
  "తాబేలు": "Taabelu",
  "చేప": "Chepa",
  "చిలుక": "Chiluka",
  "నెమలి": "Nemali",
  "కాకి": "Kaaki",
  "గులాబీ": "Gulaabi",
  "జాజి": "Jaaji",
  "మల్లె": "Malle",
  "సూర్యకాంతి": "Sooryakanthi",
  "కలువ": "Kaluva",
  "మామిడి": "Maamidi",
  "అరటి": "Arati",
  "ద్రాక్ష": "Draaksha",
  "దానిమ్మ": "Daanimma",
  "జామ": "Jaama",
  "సొరకాయ": "Sorakaaya",
  "వంకాయ": "Vankaaya",
  "టమోటా": "Tamota",
  "క్యారెట్": "Carrot",
  "ఉల్లిపాయ": "Ullipaaya",
  "ఎరుపు": "Erupu",
  "నీలం": "Neelam",
  "పసుపు": "Pasupu",
  "ఆకుపచ్చ": "Aakupachha",
  "తెలుపు": "Telupu",
  "ఒకటి": "Okati",
  "రెండు": "Rendu",
  "మూడు": "Moodu",
  "నాలుగు": "Naalugu",
  "ఆరు": "Aaru",
  "ఏడు": "Eedu",
  "ఎనిమిది": "Enimidi",
  "తొమ్మిది": "Tommidi",
  "పది": "Padi"
};
var AudioController = /*#__PURE__*/function () {
  function AudioController() {
    var _this = this;
    _classCallCheck(this, AudioController);
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
      window.speechSynthesis.onvoiceschanged = function () {
        return _this.initVoices();
      };
    }
  }
  return _createClass(AudioController, [{
    key: "initVoices",
    value: function initVoices() {
      try {
        this.voices = window.speechSynthesis.getVoices() || [];
        this.notifyListeners();
      } catch (_unused) {
        this.voices = [];
      }
    }
  }, {
    key: "addListener",
    value: function addListener(fn) {
      var _this2 = this;
      this.listeners.push(fn);
      return function () {
        _this2.listeners = _this2.listeners.filter(function (l) {
          return l !== fn;
        });
      };
    }
  }, {
    key: "notifyListeners",
    value: function notifyListeners() {
      this.listeners.forEach(function (fn) {
        return fn();
      });
    }
  }, {
    key: "getAvailableVoices",
    value: function getAvailableVoices() {
      if (this.voices.length === 0 && typeof window !== "undefined" && "speechSynthesis" in window) {
        this.initVoices();
      }
      return this.voices;
    }
  }, {
    key: "toggleSpeed",
    value: function toggleSpeed() {
      this.isSlow = !this.isSlow;
      this.speechSpeed = this.isSlow ? 0.68 : 0.85;
      this.notifyListeners();
      return this.isSlow;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speedVal) {
      this.speechSpeed = speedVal;
      this.isSlow = speedVal < 0.78;
      this.notifyListeners();
    }
  }, {
    key: "getAudioContext",
    value: function getAudioContext() {
      if (typeof window === "undefined") return null;
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      if (!this.audioCtx || this.audioCtx.state === "suspended") {
        this.audioCtx = new AudioContextClass();
      }
      return this.audioCtx;
    }

    // Find the highest clarity voice for Telugu
  }, {
    key: "findBestVoice",
    value: function findBestVoice() {
      var _this3 = this;
      var voices = this.getAvailableVoices();
      if (voices.length === 0) return null;

      // User preference
      if (this.preferredVoiceURI) {
        var pref = voices.find(function (v) {
          return v.voiceURI === _this3.preferredVoiceURI;
        });
        if (pref) return pref;
      }

      // 1. Direct Telugu voice (te-IN or Telugu name)
      var teluguVoice = voices.find(function (v) {
        return v.lang === "te-IN" || v.lang.toLowerCase().startsWith("te") || v.name.toLowerCase().includes("telugu") || v.name.toLowerCase().includes("mohan") || v.name.toLowerCase().includes("chitra");
      });
      if (teluguVoice) return teluguVoice;

      // 2. Clear Indian English voice (pronounces phonetic syllables naturally)
      var indianVoice = voices.find(function (v) {
        return v.lang === "en-IN" || v.name.toLowerCase().includes("india") || v.name.toLowerCase().includes("ravi") || v.name.toLowerCase().includes("heera");
      });
      if (indianVoice) return indianVoice;

      // 3. Indian Hindi voice fallback
      var hindiVoice = voices.find(function (v) {
        return v.lang === "hi-IN" || v.lang.startsWith("hi");
      });
      if (hindiVoice) return hindiVoice;

      // 4. Default voice
      return voices.find(function (v) {
        return v["default"];
      }) || voices[0];
    }

    // Speak Telugu text with maximum clarity
  }, {
    key: "speak",
    value: function speak(text) {
      var transliteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!this.speechEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) {
        return false;
      }
      try {
        window.speechSynthesis.cancel(); // cancel any ongoing speech

        var bestVoice = this.findBestVoice();
        var utterance = new SpeechSynthesisUtterance();
        var isTeluguVoice = bestVoice && (bestVoice.lang.startsWith("te") || bestVoice.name.toLowerCase().includes("telugu"));

        // Determine what text to utter:
        if (isTeluguVoice) {
          // Native Telugu voice speaks the Telugu script directly
          utterance.text = text;
        } else {
          // Voice is non-Telugu (e.g. Indian English or default)
          // Check transliteration or fallback lookup dictionary for crystal clarity!
          var phoneticFallback = transliteration || TELUGU_PHONETICS[text] || text;
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
  }, {
    key: "speakSyllables",
    value: function speakSyllables(syllablesArray) {
      var _this4 = this;
      if (!this.speechEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
      }
      window.speechSynthesis.cancel();
      syllablesArray.forEach(function (syl, index) {
        setTimeout(function () {
          var translit = TELUGU_PHONETICS[syl] || null;
          _this4.speak(syl, translit);
        }, index * 850);
      });
    }

    // Playful pop click sound
  }, {
    key: "playClick",
    value: function playClick() {
      if (!this.soundFxEnabled) return;
      try {
        var ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
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
  }, {
    key: "playLetterSelect",
    value: function playLetterSelect() {
      if (!this.soundFxEnabled) return;
      try {
        var ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();
        var notes = [523.25, 659.25]; // C5, E5
        notes.forEach(function (freq, idx) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
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
  }, {
    key: "playCorrect",
    value: function playCorrect() {
      if (!this.soundFxEnabled) return;
      try {
        var ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();
        var notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach(function (freq, i) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
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
  }, {
    key: "playWrong",
    value: function playWrong() {
      if (!this.soundFxEnabled) return;
      try {
        var ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
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
  }, {
    key: "playFanfare",
    value: function playFanfare() {
      if (!this.soundFxEnabled) return;
      try {
        var ctx = this.getAudioContext();
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();
        var chords = [{
          f: 523.25,
          t: 0.0,
          d: 0.12
        }, {
          f: 659.25,
          t: 0.12,
          d: 0.12
        }, {
          f: 783.99,
          t: 0.24,
          d: 0.15
        }, {
          f: 1046.50,
          t: 0.40,
          d: 0.5
        }];
        chords.forEach(function (n) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
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
  }]);
}();
var audioService = exports.audioService = new AudioController();
  });

  define("src/utils/wordDataHelper.js", function(module, exports, require) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STROKE_GUIDE_MAP = exports.CURATED_RELATED_WORDS = void 0;
exports.getRelatedWordsFor = getRelatedWordsFor;
exports.getStrokePoints = getStrokePoints;
exports.getWordSyllables = getWordSyllables;
var _teluguData = require("../data/teluguData");
// Word Data Helper for Telugu Learning App
// Provides syllable breakdowns, stroke start/end guide coordinates, and related words

// Accurate Stroke Start & End point coordinates (in 0-200 viewBox space)
// Used for displaying clear 🟢 START and 🛑 END visual guidance
var STROKE_GUIDE_MAP = exports.STROKE_GUIDE_MAP = {
  "అ": {
    start: {
      x: 55,
      y: 80,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 155,
      y: 70,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమవైపు చిన్న సున్నాతో మొదలుపెట్టి, పైకి తిప్పి కుడివైపు తలకట్టుతో ముగించండి."
  },
  "ఆ": {
    start: {
      x: 55,
      y: 80,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 165,
      y: 80,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "'అ' లాగే రాస్తూ కుడివైపు కొమ్ము లేదా దీర్ఘాన్ని పొడవుగా లాగండి."
  },
  "ఇ": {
    start: {
      x: 65,
      y: 70,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 150,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "పై వంపు నుండి మొదలుపెట్టి, కిందకి చుట్టి కుడివైపు ముగించండి."
  },
  "ఈ": {
    start: {
      x: 75,
      y: 95,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 155,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "మధ్యలోని సున్నాతో మొదలుపెట్టి, చుట్టూ తిప్పుతూ పై తలకట్టుతో ముగించండి."
  },
  "ఉ": {
    start: {
      x: 60,
      y: 75,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 155,
      y: 135,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమ పైభాగం నుండి గుండ్రంగా తిప్పుతూ కుడివైపు కొమ్ముతో ముగించండి."
  },
  "ఊ": {
    start: {
      x: 60,
      y: 75,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 165,
      y: 125,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "'ఉ' లాగే రాసి, చివరన దీర్ఘం గీతను పైకి లాగండి."
  },
  "ఋ": {
    start: {
      x: 55,
      y: 85,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 160,
      y: 135,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమ వంపు నుండి మొదలుపెట్టి మూడు మెలికలు చుడుతూ కింద ముగించండి."
  },
  "ఎ": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 70,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "కింది చిన్న సున్నాతో మొదలుపెట్టి పైకి వంపు తిప్పండి."
  },
  "ఏ": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 155,
      y: 60,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "'ఎ' లాగే రాసి పైభాగంలో నిలువు గీత (దీర్ఘం) పెట్టండి."
  },
  "ఐ": {
    start: {
      x: 65,
      y: 110,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 150,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "'ఎ' రాసి కింద ఐత్వపు గుర్తును జోడించండి."
  },
  "ఒ": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 75,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "కింది సున్నాతో మొదలుపెట్టి పైకి వంపు తిప్పుతూ ముగించండి."
  },
  "ఓ": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 155,
      y: 60,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "'ఒ' లాగే రాసి పైకి తలకట్టు దీర్ఘం చేర్చండి."
  },
  "ఔ": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 160,
      y: 70,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "'ఒ' రాసి పక్కన ఔత్వపు వంపును చేర్చండి."
  },
  "క": {
    start: {
      x: 65,
      y: 110,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమ సున్నా నుండి మొదలుపెట్టి, పైకి వెళ్లి తలకట్టు (✓) తో ముగించండి."
  },
  "గ": {
    start: {
      x: 60,
      y: 140,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "కింది వంపు నుండి పైకి వెళ్లి తలకట్టుతో ముగించండి."
  },
  "చ": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "చిన్న సున్నాతో మొదలుపెట్టి, చాపకట్టు తిప్పుతూ తలకట్టు పెట్టండి."
  },
  "జ": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 70,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "కింది సున్నాతో మొదలుపెట్టి పైకి కొమ్ము తిప్పండి."
  },
  "ట": {
    start: {
      x: 60,
      y: 90,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమ నుండి కుడికి గిన్నెలా రాసి పైన తలకట్టు పెట్టండి."
  },
  "డ": {
    start: {
      x: 65,
      y: 110,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎస్ (S) ఆకారంలో తిప్పుతూ పైన తలకట్టు చేర్చండి."
  },
  "త": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "సున్నాతో మొదలై, వంపు తిరిగి తలకట్టుతో ముగుస్తుంది."
  },
  "ద": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "కింది సున్నాతో మొదలుపెట్టి పైకి తలకట్టుతో ముగించండి."
  },
  "న": {
    start: {
      x: 60,
      y: 125,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమ సుడి నుండి మొదలుపెట్టి పైకి తలకట్టు చేర్చండి."
  },
  "ప": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "చిన్న సున్నాతో మొదలుపెట్టి, పైకి వెళ్లి తలకట్టు విడిగా పెట్టండి."
  },
  "బ": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "సున్నాతో మొదలుపెట్టి గుండ్రంగా పైకి తీసుకెళ్లి తలకట్టు పెట్టండి."
  },
  "మ": {
    start: {
      x: 70,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "చిన్న సున్నా కింద పెట్టి, పైకి తలకట్టు కలపండి."
  },
  "య": {
    start: {
      x: 65,
      y: 110,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "పెద్ద సున్నా చుట్టి, పక్కన తలకట్టు స్పర్శించకుండా పెట్టండి."
  },
  "ర": {
    start: {
      x: 100,
      y: 60,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 100,
      y: 60,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "పై నుండి ప్రారంభించి పరిపూర్ణమైన గుండ్రటి సున్నా చుట్టండి."
  },
  "ల": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "సున్నాతో మొదలై పైకి వెళ్లి తలకట్టుతో ముగుస్తుంది."
  },
  "వ": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 145,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "చిన్న సున్నాతో మొదలుపెట్టి పైన తలకట్టు కలపండి."
  },
  "స": {
    start: {
      x: 65,
      y: 120,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "సున్నాతో మొదలై పైన తలకట్టు చేర్చండి."
  },
  "హ": {
    start: {
      x: 65,
      y: 115,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "సున్నాతో మొదలై రెండు కొమ్ములు చేర్చి తలకట్టు పెట్టండి."
  }
};

// Default fallback for any character
function getStrokePoints(_char) {
  if (STROKE_GUIDE_MAP[_char]) {
    return STROKE_GUIDE_MAP[_char];
  }
  return {
    start: {
      x: 65,
      y: 110,
      label: "1. ఇక్కడ మొదలు (Start)"
    },
    end: {
      x: 150,
      y: 65,
      label: "2. ఇక్కడ ముగింపు (End)"
    },
    tip: "ఎడమవైపు నుండి ప్రారంభించి వంపు తిప్పుతూ కుడివైపు తలకట్టుతో ముగించండి."
  };
}

// Curated related words database for each primary letter
var CURATED_RELATED_WORDS = exports.CURATED_RELATED_WORDS = {
  "అ": [{
    telugu: "అమ్మ",
    translit: "Amma",
    english: "Mother",
    svgKey: "mother"
  }, {
    telugu: "అరటి",
    translit: "Arati",
    english: "Banana",
    svgKey: "banana"
  }, {
    telugu: "అన్న",
    translit: "Anna",
    english: "Elder Brother",
    svgKey: "brother"
  }, {
    telugu: "అక్క",
    translit: "Akka",
    english: "Elder Sister",
    svgKey: "sister"
  }, {
    telugu: "అద్దం",
    translit: "Addam",
    english: "Mirror",
    svgKey: "mother"
  }],
  "ఆ": [{
    telugu: "ఆవు",
    translit: "Aavu",
    english: "Cow",
    svgKey: "cow"
  }, {
    telugu: "ఆపిల్",
    translit: "Aapil",
    english: "Apple",
    svgKey: "apple"
  }, {
    telugu: "ఆకాశం",
    translit: "Aakaasham",
    english: "Sky",
    svgKey: "sky"
  }, {
    telugu: "ఆకు",
    translit: "Aaku",
    english: "Leaf",
    svgKey: "tree"
  }],
  "ఇ": [{
    telugu: "ఇల్లు",
    translit: "Illu",
    english: "House",
    svgKey: "house"
  }, {
    telugu: "ఇటుక",
    translit: "Ituka",
    english: "Brick",
    svgKey: "house"
  }, {
    telugu: "ఇనుము",
    translit: "Inumu",
    english: "Iron",
    svgKey: "lock"
  }, {
    telugu: "ఇడ్లీ",
    translit: "Idli",
    english: "Idli (Food)",
    svgKey: "house"
  }],
  "ఈ": [{
    telugu: "ఈగ",
    translit: "Eega",
    english: "Housefly",
    svgKey: "fly"
  }, {
    telugu: "ఈత",
    translit: "Eetha",
    english: "Swimming",
    svgKey: "river"
  }, {
    telugu: "ఈటె",
    translit: "Eete",
    english: "Spear",
    svgKey: "arrow"
  }],
  "ఉ": [{
    telugu: "ఉడుత",
    translit: "Uduta",
    english: "Squirrel",
    svgKey: "squirrel"
  }, {
    telugu: "ఉల్లిపాయ",
    translit: "Ullipaaya",
    english: "Onion",
    svgKey: "onion"
  }, {
    telugu: "ఉంగరం",
    translit: "Ungaram",
    english: "Ring",
    svgKey: "lock"
  }, {
    telugu: "ఉప్పు",
    translit: "Uppu",
    english: "Salt",
    svgKey: "household"
  }],
  "ఊ": [{
    telugu: "ఊయల",
    translit: "Ooyala",
    english: "Swing",
    svgKey: "cradle"
  }, {
    telugu: "ఊరు",
    translit: "Ooru",
    english: "Village / Town",
    svgKey: "house"
  }, {
    telugu: "ఊడ",
    translit: "Ooda",
    english: "Banyan Root",
    svgKey: "tree"
  }],
  "ఎ": [{
    telugu: "ఎలుక",
    translit: "Eluka",
    english: "Mouse / Rat",
    svgKey: "mouse"
  }, {
    telugu: "ఎద్దు",
    translit: "Eddu",
    english: "Bull / Ox",
    svgKey: "cow"
  }, {
    telugu: "ఎండ",
    translit: "Enda",
    english: "Sunlight",
    svgKey: "sun"
  }],
  "ఏ": [{
    telugu: "ఏనుగు",
    translit: "Aenugu",
    english: "Elephant",
    svgKey: "elephant"
  }, {
    telugu: "ఏరు",
    translit: "Aeru",
    english: "Stream / River",
    svgKey: "river"
  }, {
    telugu: "ఏడు",
    translit: "Aedu",
    english: "Seven (7)",
    svgKey: "num7"
  }],
  "ఒ": [{
    telugu: "ఒంటె",
    translit: "Onte",
    english: "Camel",
    svgKey: "camel"
  }, {
    telugu: "ఒకటి",
    translit: "Okati",
    english: "One (1)",
    svgKey: "num1"
  }, {
    telugu: "ఒడ్డు",
    translit: "Oddu",
    english: "Riverbank / Shore",
    svgKey: "river"
  }],
  "ఓ": [{
    telugu: "ఓడ",
    translit: "Oada",
    english: "Ship / Boat",
    svgKey: "ship"
  }, {
    telugu: "ఓటు",
    translit: "Oatu",
    english: "Vote",
    svgKey: "book"
  }],
  "క": [{
    telugu: "కమలం",
    translit: "Kamalam",
    english: "Lotus",
    svgKey: "lotus"
  }, {
    telugu: "కాకి",
    translit: "Kaaki",
    english: "Crow",
    svgKey: "crow"
  }, {
    telugu: "కుక్క",
    translit: "Kukka",
    english: "Dog",
    svgKey: "dog"
  }, {
    telugu: "కోతి",
    translit: "Koti",
    english: "Monkey",
    svgKey: "monkey"
  }, {
    telugu: "కుర్చీ",
    translit: "Kurchi",
    english: "Chair",
    svgKey: "chair"
  }],
  "గ": [{
    telugu: "గడియారం",
    translit: "Gadiyaaram",
    english: "Clock",
    svgKey: "clock"
  }, {
    telugu: "గొడుగు",
    translit: "Godugu",
    english: "Umbrella",
    svgKey: "umbrella"
  }, {
    telugu: "గుర్రం",
    translit: "Gurram",
    english: "Horse",
    svgKey: "horse"
  }, {
    telugu: "గులాబీ",
    translit: "Gulaabi",
    english: "Rose",
    svgKey: "flower"
  }],
  "చ": [{
    telugu: "చక్రం",
    translit: "Chakram",
    english: "Wheel",
    svgKey: "wheel"
  }, {
    telugu: "చిలుక",
    translit: "Chiluka",
    english: "Parrot",
    svgKey: "parrot"
  }, {
    telugu: "చెట్టు",
    translit: "Chettu",
    english: "Tree",
    svgKey: "tree"
  }, {
    telugu: "చంద్రుడు",
    translit: "Chandrudu",
    english: "Moon",
    svgKey: "moon"
  }],
  "జ": [{
    telugu: "జడ",
    translit: "Jada",
    english: "Hair Braid",
    svgKey: "braid"
  }, {
    telugu: "జామ",
    translit: "Jaama",
    english: "Guava",
    svgKey: "guava"
  }, {
    telugu: "జాజి",
    translit: "Jaaji",
    english: "Jasmine",
    svgKey: "flower"
  }],
  "ట": [{
    telugu: "టమాటా",
    translit: "Tamaataa",
    english: "Tomato",
    svgKey: "tomato"
  }, {
    telugu: "టపాకాయ",
    translit: "Tapaakaaya",
    english: "Firecracker",
    svgKey: "firecracker"
  }],
  "త": [{
    telugu: "తల",
    translit: "Thala",
    english: "Head",
    svgKey: "head"
  }, {
    telugu: "తాళం",
    translit: "Taalam",
    english: "Lock",
    svgKey: "lock"
  }, {
    telugu: "తాబేలు",
    translit: "Taabelu",
    english: "Turtle",
    svgKey: "turtle"
  }, {
    telugu: "తాతయ్య",
    translit: "Taatayya",
    english: "Grandfather",
    svgKey: "grandfather"
  }],
  "ద": [{
    telugu: "దండ",
    translit: "Dhanda",
    english: "Garland",
    svgKey: "garland"
  }, {
    telugu: "ద్రాక్ష",
    translit: "Draaksha",
    english: "Grapes",
    svgKey: "grapes"
  }, {
    telugu: "దానిమ్మ",
    translit: "Danimma",
    english: "Pomegranate",
    svgKey: "pomegranate"
  }, {
    telugu: "దీపం",
    translit: "Deepam",
    english: "Lamp",
    svgKey: "lamp"
  }],
  "న": [{
    telugu: "నగ",
    translit: "Naga",
    english: "Jewelry",
    svgKey: "jewelry"
  }, {
    telugu: "నక్క",
    translit: "Nakka",
    english: "Fox",
    svgKey: "fox"
  }, {
    telugu: "నెమలి",
    translit: "Nemali",
    english: "Peacock",
    svgKey: "peacock"
  }, {
    telugu: "నది",
    translit: "Nadi",
    english: "River",
    svgKey: "river"
  }, {
    telugu: "నాన్న",
    translit: "Naanna",
    english: "Father",
    svgKey: "father"
  }],
  "ప": [{
    telugu: "పలక",
    translit: "Palaka",
    english: "Slate",
    svgKey: "slate"
  }, {
    telugu: "పిల్లి",
    translit: "Pilli",
    english: "Cat",
    svgKey: "cat"
  }, {
    telugu: "పుస్తకం",
    translit: "Pusthakam",
    english: "Book",
    svgKey: "book"
  }, {
    telugu: "పువ్వు",
    translit: "Puvvu",
    english: "Flower",
    svgKey: "flower"
  }, {
    telugu: "పావురం",
    translit: "Paavuram",
    english: "Pigeon",
    svgKey: "pigeon"
  }],
  "బ": [{
    telugu: "బంతి",
    translit: "Banthi",
    english: "Ball",
    svgKey: "ball"
  }, {
    telugu: "బంగాళాదుంప",
    translit: "Bangaaladumpa",
    english: "Potato",
    svgKey: "potato"
  }, {
    telugu: "బెండకాయ",
    translit: "Bendakaaya",
    english: "Okra",
    svgKey: "okra"
  }],
  "మ": [{
    telugu: "మామిడి",
    translit: "Maamidi",
    english: "Mango",
    svgKey: "mango"
  }, {
    telugu: "మంచం",
    translit: "Mancham",
    english: "Cot / Bed",
    svgKey: "bed"
  }, {
    telugu: "మల్లె",
    translit: "Malle",
    english: "Jasmine",
    svgKey: "flower"
  }],
  "స": [{
    telugu: "సింహం",
    translit: "Simham",
    english: "Lion",
    svgKey: "lion"
  }, {
    telugu: "సూర్యుడు",
    translit: "Sooryudu",
    english: "Sun",
    svgKey: "sun"
  }, {
    telugu: "సంచి",
    translit: "Sanchi",
    english: "Bag",
    svgKey: "bag"
  }],
  "హ": [{
    telugu: "హంస",
    translit: "Hamsa",
    english: "Swan",
    svgKey: "swan"
  }]
};

// Retrieve related words for any letter or word
function getRelatedWordsFor(letterChar) {
  var currentWord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  // First check curated database
  if (CURATED_RELATED_WORDS[letterChar]) {
    return CURATED_RELATED_WORDS[letterChar].filter(function (w) {
      return w.telugu !== currentWord;
    });
  }

  // Fallback to vocabulary items matching the letter
  var matched = _teluguData.VOCABULARY_ITEMS.filter(function (item) {
    return (item.letter === letterChar || item.telugu.startsWith(letterChar)) && item.telugu !== currentWord;
  }).map(function (item) {
    return {
      telugu: item.telugu,
      translit: item.translit,
      english: item.english,
      svgKey: item.svgKey
    };
  });
  if (matched.length > 0) return matched;

  // Fallback to first 3 items in vocabulary
  return _teluguData.VOCABULARY_ITEMS.slice(0, 3).map(function (item) {
    return {
      telugu: item.telugu,
      translit: item.translit,
      english: item.english,
      svgKey: item.svgKey
    };
  });
}

// Split a Telugu word into clean individual grapheme syllables
function getWordSyllables(word) {
  if (!word) return [];
  try {
    var segmenter = new Intl.Segmenter('te', {
      granularity: 'grapheme'
    });
    return Array.from(segmenter.segment(word)).map(function (s) {
      return s.segment;
    });
  } catch (_unused) {
    return word.split('');
  }
}
  });

  define("src/components/Icons.jsx", function(module, exports, require) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.XCircle = exports.X = exports.VolumeX = exports.Volume2 = exports.Sparkles = exports.Search = exports.RotateCcw = exports.Play = exports.Pencil = exports.Menu = exports.Lightbulb = exports.Layers = exports.Image = exports.Home = exports.HelpCircle = exports.Eraser = exports.ChevronRight = exports.ChevronLeft = exports.CheckCircle = exports.BookOpen = exports.Award = exports.ArrowRight = exports.ArrowLeft = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["size", "className", "color", "fill"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// Lightweight, crisp SVG icons with standard Lucide stroke styling
var createIcon = function createIcon(svgContent) {
  return function (_ref) {
    var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "currentColor" : _ref$color,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "none" : _ref$fill,
      props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/_react["default"].createElement("svg", _extends({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: fill,
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className
    }, props), svgContent);
  };
};
var Volume2 = exports.Volume2 = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M15.54 8.46a5 5 0 0 1 0 7.07"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M19.07 4.93a10 10 0 0 1 0 14.14"
})));
var VolumeX = exports.VolumeX = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "23",
  y1: "9",
  x2: "17",
  y2: "15"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "17",
  y1: "9",
  x2: "23",
  y2: "15"
})));
var ChevronRight = exports.ChevronRight = createIcon( /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "9 18 15 12 9 6"
}));
var ChevronLeft = exports.ChevronLeft = createIcon( /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "15 18 9 12 15 6"
}));
var ArrowLeft = exports.ArrowLeft = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("line", {
  x1: "19",
  y1: "12",
  x2: "5",
  y2: "12"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "12 19 5 12 12 5"
})));
var ArrowRight = exports.ArrowRight = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "12 5 19 12 12 19"
})));
var Search = exports.Search = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
})));
var Sparkles = exports.Sparkles = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M5 3v4"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M19 17v4"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M3 5h4"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M17 19h4"
})));
var BookOpen = exports.BookOpen = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
})));
var Layers = exports.Layers = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("polygon", {
  points: "12 2 2 7 12 12 22 7 12 2"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "2 17 12 22 22 17"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "2 12 12 17 22 12"
})));
var Award = exports.Award = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("circle", {
  cx: "12",
  cy: "8",
  r: "7"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
})));
var RotateCcw = exports.RotateCcw = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M3 3v5h5"
})));
var Eraser = exports.Eraser = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M22 21H7"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "m5 11 9 9"
})));
var CheckCircle = exports.CheckCircle = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
})));
var XCircle = exports.XCircle = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "15",
  y1: "9",
  x2: "9",
  y2: "15"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "9",
  y1: "9",
  x2: "15",
  y2: "15"
})));
var X = exports.X = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})));
var Menu = exports.Menu = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("line", {
  x1: "4",
  y1: "12",
  x2: "20",
  y2: "12"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "4",
  y1: "6",
  x2: "20",
  y2: "6"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "4",
  y1: "18",
  x2: "20",
  y2: "18"
})));
var Lightbulb = exports.Lightbulb = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M9 18h6"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M10 22h4"
})));
var Pencil = exports.Pencil = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "m15 5 4 4"
})));
var HelpCircle = exports.HelpCircle = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "12",
  y1: "17",
  x2: "12.01",
  y2: "17"
})));
var Play = exports.Play = createIcon( /*#__PURE__*/_react["default"].createElement("polygon", {
  points: "5 3 19 12 5 21 5 3"
}));
var Home = exports.Home = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/_react["default"].createElement("polyline", {
  points: "9 22 9 12 15 12 15 22"
})));
var Image = exports.Image = createIcon( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/_react["default"].createElement("circle", {
  cx: "9",
  cy: "9",
  r: "2"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
})));
var _default = exports["default"] = {
  Volume2: Volume2,
  VolumeX: VolumeX,
  ChevronRight: ChevronRight,
  ChevronLeft: ChevronLeft,
  ArrowLeft: ArrowLeft,
  ArrowRight: ArrowRight,
  Search: Search,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Layers: Layers,
  Award: Award,
  RotateCcw: RotateCcw,
  Eraser: Eraser,
  CheckCircle: CheckCircle,
  XCircle: XCircle,
  X: X,
  Menu: Menu,
  Lightbulb: Lightbulb,
  Pencil: Pencil,
  HelpCircle: HelpCircle,
  Play: Play,
  Home: Home,
  Image: Image
};
  });

  define("src/components/illustrations/Illustration.jsx", function(module, exports, require) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Illustration = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Comprehensive, crisp SVG illustrations for Telugu letters, words, and vocabulary
// Designed with vibrant, kid-friendly colors, rounded shapes, and high visual contrast

var Illustration = exports.Illustration = function Illustration(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 120 : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var s = size;
  switch (name) {
    // ----------------- VOWEL WORDS -----------------
    case "mother":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0F0"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 20 C40 20 32 28 32 38 C32 46 38 52 46 54 L44 80 L56 80 L54 54 C62 52 68 46 68 38 C68 28 60 20 50 20 Z",
        fill: "#FF8DA1"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M35 34 C35 24 42 16 50 16 C58 16 65 24 65 34 C63 26 57 22 50 22 C43 22 37 26 35 34 Z",
        fill: "#2C3A47"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "35",
        r: "13",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "31",
        r: "1.5",
        fill: "#EE5253"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "45",
        cy: "35",
        r: "1.5",
        fill: "#2C3A47"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "55",
        cy: "35",
        r: "1.5",
        fill: "#2C3A47"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M47 39 Q50 42 53 39",
        stroke: "#E55039",
        strokeWidth: "1.2",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M36 55 Q50 70 64 55 L60 85 L40 85 Z",
        fill: "#E71C23"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 58 Q50 68 56 58",
        stroke: "#F8EFBA",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "62",
        r: "7",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M55 64 Q58 67 61 64",
        stroke: "#2C3A47",
        strokeWidth: "1",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M52 68 Q60 62 66 72",
        fill: "#74B9FF"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22 28 Q22 22 27 22 Q32 22 32 27 Q32 34 27 38 Q22 34 22 28 Z",
        fill: "#FF6B81",
        opacity: "0.8"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M72 26 Q72 20 77 20 Q82 20 82 25 Q82 32 77 36 Q72 32 72 26 Z",
        fill: "#FF6B81",
        opacity: "0.8"
      }));
    case "cow":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EE"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "58",
        rx: "28",
        ry: "20",
        fill: "#FFFFFF",
        stroke: "#4A5568",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M38 48 Q44 42 48 50 Q46 56 40 56 Z",
        fill: "#2D3748"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M60 52 Q68 50 66 60 Q58 64 60 52 Z",
        fill: "#2D3748"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "32",
        y: "72",
        width: "6",
        height: "15",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "42",
        y: "72",
        width: "6",
        height: "15",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "54",
        y: "72",
        width: "6",
        height: "15",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "64",
        y: "72",
        width: "6",
        height: "15",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M34 28 Q30 20 28 22 Q26 28 32 32",
        fill: "#E2E8F0",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M48 28 Q52 20 54 22 Q56 28 50 32",
        fill: "#E2E8F0",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "40",
        cy: "38",
        rx: "14",
        ry: "12",
        fill: "#FFFFFF",
        stroke: "#4A5568",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "40",
        cy: "43",
        rx: "10",
        ry: "6",
        fill: "#FFC0CB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "37",
        cy: "43",
        r: "1.5",
        fill: "#4A5568"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "43",
        cy: "43",
        r: "1.5",
        fill: "#4A5568"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "35",
        cy: "34",
        r: "2",
        fill: "#2D3748"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "45",
        cy: "34",
        r: "2",
        fill: "#2D3748"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "26",
        cy: "35",
        rx: "5",
        ry: "3",
        fill: "#FFC0CB",
        transform: "rotate(-20 26 35)"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "54",
        cy: "35",
        rx: "5",
        ry: "3",
        fill: "#FFC0CB",
        transform: "rotate(20 54 35)"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M46 54 L44 60 L50 60 L48 54 Z",
        fill: "#F6E05E",
        stroke: "#D69E2E",
        strokeWidth: "1"
      }));
    case "house":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E8F8F7"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "65",
        y: "24",
        width: "8",
        height: "18",
        fill: "#E17055",
        rx: "1"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "69",
        cy: "18",
        r: "3",
        fill: "#DFE6E9",
        opacity: "0.8"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,18 20,44 80,44",
        fill: "#FF7675",
        stroke: "#D63031",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "26",
        y: "44",
        width: "48",
        height: "38",
        fill: "#FFEAA7",
        stroke: "#FDCB6E",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "43",
        y: "56",
        width: "14",
        height: "26",
        rx: "2",
        fill: "#6C5CE7"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "53",
        cy: "70",
        r: "1.5",
        fill: "#FFEAA7"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "30",
        y: "52",
        width: "10",
        height: "10",
        rx: "1",
        fill: "#74B9FF",
        stroke: "#0984E3",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "60",
        y: "52",
        width: "10",
        height: "10",
        rx: "1",
        fill: "#74B9FF",
        stroke: "#0984E3",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "22",
        cy: "80",
        r: "8",
        fill: "#00B894"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "78",
        cy: "80",
        r: "8",
        fill: "#00B894"
      }));
    case "fly":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAF6FA"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "36",
        cy: "40",
        rx: "18",
        ry: "10",
        fill: "#74B9FF",
        opacity: "0.6",
        transform: "rotate(-30 36 40)",
        stroke: "#0984E3",
        strokeWidth: "1"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "64",
        cy: "40",
        rx: "18",
        ry: "10",
        fill: "#74B9FF",
        opacity: "0.6",
        transform: "rotate(30 64 40)",
        stroke: "#0984E3",
        strokeWidth: "1"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "55",
        rx: "12",
        ry: "18",
        fill: "#2D3436"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M40 52 Q50 50 60 52",
        stroke: "#636E72",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M40 58 Q50 56 60 58",
        stroke: "#636E72",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "38",
        r: "7",
        fill: "#D63031"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "56",
        cy: "38",
        r: "7",
        fill: "#D63031"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "45",
        cy: "36",
        r: "2",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "57",
        cy: "36",
        r: "2",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M38 52 L26 50 M38 60 L24 64 M62 52 L74 50 M62 60 L76 64",
        stroke: "#2D3436",
        strokeWidth: "2",
        strokeLinecap: "round"
      }));
    case "squirrel":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF9E7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 65 C20 60 16 35 32 25 C42 18 48 30 42 42 C38 50 44 65 30 65 Z",
        fill: "#E17055",
        stroke: "#D35400",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M26 48 C24 38 28 30 36 28",
        stroke: "#F39C12",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "52",
        cy: "62",
        rx: "14",
        ry: "18",
        fill: "#E17055"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "56",
        cy: "64",
        rx: "8",
        ry: "12",
        fill: "#FFEAA7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 52 Q46 64 45 74 M48 50 Q50 62 49 72 M52 50 Q53 60 52 70",
        stroke: "#FFFFFF",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "42",
        r: "11",
        fill: "#E17055"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "56,33 60,25 64,33",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "63,35 68,28 70,36",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "63",
        cy: "40",
        r: "2",
        fill: "#2D3436"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "39",
        r: "0.6",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "68",
        cy: "44",
        rx: "2",
        ry: "1.5",
        fill: "#2D3436"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "64",
        cy: "56",
        rx: "4",
        ry: "3",
        fill: "#FFEAA7"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "68",
        cy: "56",
        rx: "3.5",
        ry: "4.5",
        fill: "#A0522D"
      }));
    case "swing":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F5EEFD"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M15 25 Q50 20 85 24",
        stroke: "#8D6E63",
        strokeWidth: "7",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "28",
        cy: "20",
        r: "8",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "75",
        cy: "18",
        r: "9",
        fill: "#27AE60"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "38",
        y1: "24",
        x2: "38",
        y2: "70",
        stroke: "#F1C40F",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "62",
        y1: "24",
        x2: "62",
        y2: "70",
        stroke: "#F1C40F",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "30",
        y: "70",
        width: "40",
        height: "7",
        rx: "3",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "38",
        cy: "45",
        r: "3",
        fill: "#FF7675"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "62",
        cy: "50",
        r: "3",
        fill: "#FF7675"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "38",
        cy: "45",
        r: "1",
        fill: "#FEEAA7"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "62",
        cy: "50",
        r: "1",
        fill: "#FEEAA7"
      }));
    case "sage":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0E6"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 85 C30 65 38 55 50 55 C62 55 70 65 70 85 Z",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "40",
        r: "12",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "25",
        rx: "6",
        ry: "7",
        fill: "#6D4C41"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "20",
        r: "3",
        fill: "#8D6E63"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M42 45 C42 62 58 62 58 45 Z",
        fill: "#FFFFFF",
        stroke: "#CFD8DC",
        strokeWidth: "1"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "48",
        y1: "34",
        x2: "52",
        y2: "34",
        stroke: "#C0392B",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "34",
        r: "1",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 38 Q46 40 48 38",
        stroke: "#2D3436",
        strokeWidth: "1.2",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M52 38 Q54 40 56 38",
        stroke: "#2D3436",
        strokeWidth: "1.2",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M42 58 Q50 68 58 58",
        stroke: "#795548",
        strokeWidth: "2.5",
        strokeDasharray: "2,2"
      }));
    case "coin":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF3EB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "32",
        fill: "#F1C40F",
        stroke: "#D68910",
        strokeWidth: "3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "26",
        fill: "#F7DC6F",
        stroke: "#B7950B",
        strokeWidth: "1.5",
        strokeDasharray: "3,2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "10",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "50",
        y: "55",
        fontSize: "16",
        fontWeight: "bold",
        fill: "#7D6608",
        textAnchor: "middle"
      }, "\u20B9"));
    case "mouse":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAFBF2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M26 62 Q16 55 20 40",
        stroke: "#BDC3C7",
        strokeWidth: "2.5",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "48",
        cy: "60",
        rx: "20",
        ry: "14",
        fill: "#95A5A6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "34",
        r: "9",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "34",
        r: "5.5",
        fill: "#F8A5C2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "34",
        r: "9",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "34",
        r: "5.5",
        fill: "#F8A5C2"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "58",
        cy: "48",
        rx: "13",
        ry: "10",
        fill: "#95A5A6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "70",
        cy: "48",
        r: "2.5",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "44",
        r: "2",
        fill: "#2C3A47"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "59",
        cy: "43.5",
        r: "0.6",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "64",
        y1: "46",
        x2: "76",
        y2: "43",
        stroke: "#2C3A47",
        strokeWidth: "1"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "64",
        y1: "50",
        x2: "76",
        y2: "53",
        stroke: "#2C3A47",
        strokeWidth: "1"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "66,66 78,60 76,72",
        fill: "#F1C40F",
        stroke: "#D4AC0D",
        strokeWidth: "1"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "72",
        cy: "65",
        r: "1",
        fill: "#B7950B"
      }));
    case "elephant":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E9F8F0"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "46",
        cy: "56",
        rx: "26",
        ry: "20",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "28",
        y: "68",
        width: "8",
        height: "18",
        rx: "4",
        fill: "#636E72"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "40",
        y: "68",
        width: "8",
        height: "18",
        rx: "4",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "52",
        y: "68",
        width: "8",
        height: "18",
        rx: "4",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "64",
        y: "68",
        width: "8",
        height: "18",
        rx: "4",
        fill: "#636E72"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "68",
        cy: "44",
        r: "16",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "56",
        cy: "44",
        rx: "11",
        ry: "14",
        fill: "#95A5A6",
        stroke: "#636E72",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "56",
        cy: "44",
        rx: "7",
        ry: "10",
        fill: "#F8A5C2",
        opacity: "0.6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "70",
        cy: "40",
        r: "2",
        fill: "#2C3A47"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M78 48 C85 52 86 36 82 30",
        stroke: "#7F8C8D",
        strokeWidth: "6",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M76 52 Q82 54 84 48",
        stroke: "#FFFFFF",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M40 38 Q50 34 60 38 L58 46 L42 46 Z",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "42",
        r: "2",
        fill: "#F1C40F"
      }));
    case "five":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDECEF"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "40",
        y: "52",
        width: "22",
        height: "26",
        rx: "6",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M38 60 C30 58 32 50 38 52 Z",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "40",
        y: "32",
        width: "4.5",
        height: "22",
        rx: "2.2",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "46",
        y: "26",
        width: "4.5",
        height: "28",
        rx: "2.2",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "52",
        y: "28",
        width: "4.5",
        height: "26",
        rx: "2.2",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "58",
        y: "36",
        width: "4.5",
        height: "18",
        rx: "2.2",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "72",
        cy: "72",
        r: "14",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "72",
        y: "78",
        fontSize: "18",
        fontWeight: "900",
        fill: "#FFFFFF",
        textAnchor: "middle"
      }, "5"));
    case "camel":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF5E7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 65 L32 54 Q40 40 48 54 Q56 40 64 54 L68 65 Z",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M64 58 Q72 50 72 32 L78 30 Q82 34 78 40 L70 60",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "77",
        cy: "33",
        rx: "5",
        ry: "3",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "76",
        cy: "32",
        r: "1.2",
        fill: "#2C3A47"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "36",
        y1: "65",
        x2: "36",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "44",
        y1: "65",
        x2: "44",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "56",
        y1: "65",
        x2: "56",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "64",
        y1: "65",
        x2: "64",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M46 54 Q52 50 58 54",
        stroke: "#F1C40F",
        strokeWidth: "3",
        fill: "none"
      }));
    case "ship":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EBF0FB"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M12 76 Q25 70 38 76 Q51 82 64 76 Q77 70 90 76",
        stroke: "#3498DB",
        strokeWidth: "4",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M18 84 Q31 78 44 84 Q57 90 70 84 Q83 78 88 84",
        stroke: "#2980B9",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "22,64 30,76 72,76 80,64",
        fill: "#C0392B",
        stroke: "#962D22",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "34",
        y: "48",
        width: "34",
        height: "16",
        fill: "#ECF0F1",
        stroke: "#BDC3C7",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "42",
        y: "38",
        width: "18",
        height: "10",
        fill: "#34495E",
        rx: "1"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "52",
        y: "28",
        width: "6",
        height: "10",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "55",
        cy: "22",
        r: "3",
        fill: "#BDC3C7",
        opacity: "0.8"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "16",
        r: "4",
        fill: "#BDC3C7",
        opacity: "0.6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "42",
        cy: "56",
        r: "2.5",
        fill: "#3498DB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "51",
        cy: "56",
        r: "2.5",
        fill: "#3498DB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "60",
        cy: "56",
        r: "2.5",
        fill: "#3498DB"
      }));
    case "medicine":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F3EEFA"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "36",
        y: "36",
        width: "28",
        height: "42",
        rx: "4",
        fill: "#E8F8F5",
        stroke: "#1ABC9C",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "42",
        y: "28",
        width: "16",
        height: "8",
        rx: "2",
        fill: "#16A085"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "47",
        y: "48",
        width: "6",
        height: "18",
        fill: "#E74C3C",
        rx: "1"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "41",
        y: "54",
        width: "18",
        height: "6",
        fill: "#E74C3C",
        rx: "1"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(62, 60) rotate(35)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "0",
        width: "12",
        height: "24",
        rx: "6",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "12",
        width: "12",
        height: "12",
        rx: "0",
        fill: "#E74C3C"
      })));
    case "sky":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E7F8F7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22 68 A28 28 0 0 1 78 68",
        stroke: "#E74C3C",
        strokeWidth: "3",
        fill: "none",
        opacity: "0.7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M25 68 A25 25 0 0 1 75 68",
        stroke: "#F1C40F",
        strokeWidth: "3",
        fill: "none",
        opacity: "0.7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M28 68 A22 22 0 0 1 72 68",
        stroke: "#2ECC71",
        strokeWidth: "3",
        fill: "none",
        opacity: "0.7"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M31 68 A19 19 0 0 1 69 68",
        stroke: "#3498DB",
        strokeWidth: "3",
        fill: "none",
        opacity: "0.7"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "70",
        cy: "30",
        r: "10",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "40",
        cy: "55",
        rx: "16",
        ry: "10",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "32",
        cy: "50",
        r: "9",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "48",
        cy: "48",
        r: "11",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "26,26 28,30 32,31 29,34 30,38 26,35 22,38 23,34 20,31 24,30",
        fill: "#F1C40F"
      }));
    case "palace":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAF5FB"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "25",
        y: "48",
        width: "50",
        height: "34",
        fill: "#FDEBD0",
        stroke: "#F5B041",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M40 48 C40 30 60 30 60 48 Z",
        fill: "#F39C12",
        stroke: "#D68910",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "28",
        x2: "50",
        y2: "20",
        stroke: "#C0392B",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,20 58,23 50,26",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "18",
        y: "40",
        width: "12",
        height: "42",
        fill: "#FAD7A0",
        stroke: "#F5B041",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M18 40 C18 30 30 30 30 40 Z",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "70",
        y: "40",
        width: "12",
        height: "42",
        fill: "#FAD7A0",
        stroke: "#F5B041",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M70 40 C70 30 82 30 82 40 Z",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 82 L44 65 C44 58 56 58 56 65 L56 82 Z",
        fill: "#7D3C98"
      }));

    // ----------------- CONSONANT WORDS -----------------
    case "lotus":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFEFF0"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "74",
        rx: "36",
        ry: "10",
        fill: "#2ECC71",
        stroke: "#27AE60",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "74",
        x2: "68",
        y2: "70",
        stroke: "#27AE60",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 30 C40 45 42 62 50 68 C58 62 60 45 50 30 Z",
        fill: "#FF7675"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M34 42 C30 54 38 64 50 68 C42 60 40 48 34 42 Z",
        fill: "#FD79A8"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M66 42 C70 54 62 64 50 68 C58 60 60 48 66 42 Z",
        fill: "#FD79A8"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22 52 C22 62 34 68 50 70 C36 66 30 58 22 52 Z",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M78 52 C78 62 66 68 50 70 C64 66 70 58 78 52 Z",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "56",
        r: "4",
        fill: "#F1C40F"
      }));
    case "sword":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDECEF"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(10, 10)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M65 15 L35 55 L28 50 L58 10 Z",
        fill: "#BDC3C7",
        stroke: "#7F8C8D",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "65,15 72,12 58,10",
        fill: "#ECF0F1"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22",
        y: "52",
        width: "20",
        height: "6",
        rx: "2",
        fill: "#F1C40F",
        stroke: "#D4AC0D",
        strokeWidth: "1.5",
        transform: "rotate(-40 28 54)"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "16",
        y: "60",
        width: "6",
        height: "14",
        rx: "2",
        fill: "#8E44AD",
        transform: "rotate(-40 18 64)"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "10",
        cy: "74",
        r: "4",
        fill: "#E74C3C"
      })));
    case "clock":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0E6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "34",
        fill: "#FFFFFF",
        stroke: "#E67E22",
        strokeWidth: "4"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "24",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "76",
        cy: "50",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "76",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "24",
        cy: "50",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "50",
        x2: "38",
        y2: "34",
        stroke: "#2C3E50",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "50",
        x2: "65",
        y2: "38",
        stroke: "#E74C3C",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "3.5",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "34",
        cy: "18",
        r: "6",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "66",
        cy: "18",
        r: "6",
        fill: "#F39C12"
      }));
    case "pot":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF9E7"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "62",
        rx: "26",
        ry: "22",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "38",
        y: "34",
        width: "24",
        height: "8",
        rx: "2",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "34",
        rx: "14",
        ry: "4",
        fill: "#F39C12",
        stroke: "#BA4A00",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M28 58 Q50 64 72 58",
        stroke: "#F1C40F",
        strokeWidth: "2.5",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "36",
        cy: "66",
        r: "2",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "45",
        cy: "68",
        r: "2",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "55",
        cy: "68",
        r: "2",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "66",
        r: "2",
        fill: "#FFFFFF"
      }));
    case "literature":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFFCE6"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "20",
        y: "38",
        width: "60",
        height: "12",
        rx: "3",
        fill: "#FAD7A0",
        stroke: "#D4AC0D",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "18",
        y: "52",
        width: "60",
        height: "12",
        rx: "3",
        fill: "#F9E79F",
        stroke: "#D4AC0D",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "32",
        cy: "44",
        r: "2.5",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "32",
        cy: "58",
        r: "2.5",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "32",
        y1: "36",
        x2: "32",
        y2: "68",
        stroke: "#E74C3C",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "42",
        y1: "44",
        x2: "70",
        y2: "44",
        stroke: "#7D6608",
        strokeWidth: "1.5",
        strokeDasharray: "3,2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "42",
        y1: "58",
        x2: "70",
        y2: "58",
        stroke: "#7D6608",
        strokeWidth: "1.5",
        strokeDasharray: "3,2"
      }));
    case "parrot":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E9F8F0"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "20",
        y1: "78",
        x2: "80",
        y2: "78",
        stroke: "#8D6E63",
        strokeWidth: "5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M42 66 L34 92 L46 90 L48 66 Z",
        fill: "#27AE60"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "56",
        rx: "14",
        ry: "18",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M42 46 Q50 50 58 46",
        stroke: "#E74C3C",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "52",
        cy: "38",
        r: "12",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "48",
        cy: "36",
        r: "2.5",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "48",
        cy: "36",
        r: "1.2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M58 35 Q68 36 65 44 Q60 41 58 41 Z",
        fill: "#E74C3C"
      }));
    case "umbrella":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAFBF2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M20 54 C20 30 80 30 80 54 C70 50 60 56 50 52 C40 56 30 50 20 54 Z",
        fill: "#3498DB",
        stroke: "#2980B9",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 30 Q44 42 40 52",
        stroke: "#F1C40F",
        strokeWidth: "2",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 30 Q56 42 60 52",
        stroke: "#F1C40F",
        strokeWidth: "2",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "30",
        x2: "50",
        y2: "24",
        stroke: "#2C3E50",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "52",
        x2: "50",
        y2: "76",
        stroke: "#2C3E50",
        strokeWidth: "3"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 76 C50 82 42 82 42 76",
        stroke: "#E67E22",
        strokeWidth: "3.5",
        fill: "none",
        strokeLinecap: "round"
      }));
    case "guava":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E7F7F3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "56",
        r: "22",
        fill: "#2ECC71",
        stroke: "#27AE60",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 34 Q48 24 54 28",
        stroke: "#8D6E63",
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "56",
        cy: "32",
        rx: "7",
        ry: "4",
        fill: "#27AE60",
        transform: "rotate(25 56 32)"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "64",
        cy: "62",
        rx: "16",
        ry: "18",
        fill: "#FF7675",
        stroke: "#2ECC71",
        strokeWidth: "3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "60",
        cy: "58",
        r: "1.5",
        fill: "#FFEAA7"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "68",
        cy: "58",
        r: "1.5",
        fill: "#FFEAA7"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "66",
        r: "1.5",
        fill: "#FFEAA7"
      }));
    case "fish":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E5FAFA"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "26,50 14,36 14,64",
        fill: "#E67E22",
        stroke: "#D35400",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "50",
        rx: "26",
        ry: "18",
        fill: "#F39C12",
        stroke: "#D35400",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M46 34 Q52 50 46 66",
        stroke: "#FFFFFF",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M56 36 Q62 50 56 64",
        stroke: "#FFFFFF",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "66",
        cy: "46",
        r: "4",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "67",
        cy: "46",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "78",
        cy: "38",
        r: "2.5",
        fill: "#74B9FF",
        opacity: "0.8"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "82",
        cy: "30",
        r: "3.5",
        fill: "#74B9FF",
        opacity: "0.8"
      }));
    case "command":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E5F6F6"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "28",
        y: "24",
        width: "44",
        height: "52",
        rx: "3",
        fill: "#FFF9E6",
        stroke: "#D4AC0D",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22",
        y: "20",
        width: "56",
        height: "8",
        rx: "4",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22",
        y: "72",
        width: "56",
        height: "8",
        rx: "4",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "52",
        r: "10",
        fill: "#C0392B",
        stroke: "#922B21",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "50",
        y: "56",
        fontSize: "11",
        fontWeight: "bold",
        fill: "#FADBD8",
        textAnchor: "middle"
      }, "\u2605"));
    case "tomato":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0F0"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "56",
        r: "26",
        fill: "#E74C3C",
        stroke: "#C0392B",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M38 42 Q48 38 52 42",
        stroke: "#FFFFFF",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        opacity: "0.8"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 30 L50 20 Q54 18 56 22",
        stroke: "#27AE60",
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,30 42,26 44,32 38,34 44,36 46,42 50,36 54,42 56,36 62,34 56,32 58,26",
        fill: "#2ECC71"
      }));
    case "throat":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDEEEE"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M34 25 C34 40 40 50 40 75 L60 75 C60 50 66 40 66 25 Z",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M68 45 Q76 50 68 55",
        stroke: "#9B59B6",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M74 40 Q86 50 74 60",
        stroke: "#8E44AD",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "74",
        y: "36",
        fontSize: "16",
        fill: "#E74C3C"
      }, "\u266A"));
    case "drum":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EC"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "26,30 74,30 50,52",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "26,74 74,74 50,52",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "30",
        rx: "24",
        ry: "6",
        fill: "#FAD7A0",
        stroke: "#BA4A00",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "74",
        rx: "24",
        ry: "6",
        fill: "#FAD7A0",
        stroke: "#BA4A00",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "52",
        r: "4",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "52",
        x2: "30",
        y2: "44",
        stroke: "#7F8C8D",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "30",
        cy: "44",
        r: "3",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "52",
        x2: "70",
        y2: "60",
        stroke: "#7F8C8D",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "70",
        cy: "60",
        r: "3",
        fill: "#E74C3C"
      }));
    case "kettledrum":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF0FC"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22 45 C22 75 78 75 78 45 Z",
        fill: "#F39C12",
        stroke: "#D68910",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "45",
        rx: "28",
        ry: "8",
        fill: "#F9E79F",
        stroke: "#D68910",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "34",
        y1: "70",
        x2: "26",
        y2: "86",
        stroke: "#7F8C8D",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "66",
        y1: "70",
        x2: "74",
        y2: "86",
        stroke: "#7F8C8D",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "38",
        y1: "26",
        x2: "48",
        y2: "44",
        stroke: "#8E44AD",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "62",
        y1: "26",
        x2: "52",
        y2: "44",
        stroke: "#8E44AD",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "48",
        cy: "44",
        r: "3",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "52",
        cy: "44",
        r: "3",
        fill: "#E74C3C"
      }));
    case "veena":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EEF5FF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "70",
        cy: "68",
        r: "16",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "70",
        y1: "68",
        x2: "26",
        y2: "28",
        stroke: "#E67E22",
        strokeWidth: "6",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "34",
        cy: "34",
        r: "8",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M26 28 Q20 20 28 18 Q32 24 26 28",
        fill: "#F1C40F",
        stroke: "#D4AC0D",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "66",
        y1: "64",
        x2: "28",
        y2: "26",
        stroke: "#F7DC6F",
        strokeWidth: "1.5"
      }));
    case "head":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F0EBFA"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "52",
        r: "22",
        fill: "#FED7B2",
        stroke: "#E58E26",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 46 C30 30 70 30 70 46 C64 34 36 34 30 46 Z",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "43",
        cy: "50",
        r: "2.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "57",
        cy: "50",
        r: "2.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 58 Q50 64 56 58",
        stroke: "#E74C3C",
        strokeWidth: "2",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "38,32 44,20 50,28 56,20 62,32",
        fill: "#F1C40F",
        stroke: "#F39C12",
        strokeWidth: "1.5"
      }));
    case "chariot":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAE8F5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "30",
        y: "50",
        width: "40",
        height: "20",
        fill: "#E67E22",
        stroke: "#D35400",
        strokeWidth: "2",
        rx: "2"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,18 26,48 74,48",
        fill: "#E74C3C",
        stroke: "#C0392B",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "18",
        r: "3",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "74",
        r: "14",
        fill: "#F9E79F",
        stroke: "#795548",
        strokeWidth: "3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "74",
        r: "3",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "60",
        x2: "50",
        y2: "88",
        stroke: "#795548",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "36",
        y1: "74",
        x2: "64",
        y2: "74",
        stroke: "#795548",
        strokeWidth: "1.5"
      }));
    case "tooth":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E6F8FC"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M34 32 C26 40 26 55 36 78 C40 86 44 86 46 72 C48 64 52 64 54 72 C56 86 60 86 64 78 C74 55 74 40 66 32 C60 26 40 26 34 32 Z",
        fill: "#FFFFFF",
        stroke: "#00CEC9",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "46",
        r: "2",
        fill: "#2D3436"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "56",
        cy: "46",
        r: "2",
        fill: "#2D3436"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M46 54 Q50 58 54 54",
        stroke: "#FF7675",
        strokeWidth: "2",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "72,28 74,34 80,36 74,38 72,44 70,38 64,36 70,34",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "26,48 27,52 31,53 27,54 26,58 25,54 21,53 25,52",
        fill: "#00CEC9"
      }));
    case "bow":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E7F7F3"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M35 20 C60 35 60 65 35 80",
        stroke: "#D35400",
        strokeWidth: "4",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "35",
        y1: "20",
        x2: "35",
        y2: "80",
        stroke: "#BDC3C7",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "25",
        y1: "50",
        x2: "75",
        y2: "50",
        stroke: "#F1C40F",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "75,50 66,45 66,55",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "25,50 20,46 22,50 20,54",
        fill: "#3498DB"
      }));
    case "fox":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EC"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M25 66 C15 55 20 40 32 46 C30 55 35 65 25 66 Z",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "20",
        cy: "48",
        r: "4",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "48",
        cy: "62",
        rx: "18",
        ry: "14",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,35 56,18 64,30",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "66,32 74,20 78,36",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "46,40 82,46 56,60",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "62,48 82,46 66,58",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "82",
        cy: "46",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "62",
        cy: "42",
        rx: "2",
        ry: "1.5",
        fill: "#2C3E50"
      }));
    case "slate":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#ECFBFF"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22",
        y: "24",
        width: "56",
        height: "52",
        rx: "4",
        fill: "#8D6E63",
        stroke: "#5D4037",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "28",
        y: "30",
        width: "44",
        height: "40",
        fill: "#263238"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "50",
        y: "58",
        fontSize: "28",
        fontWeight: "bold",
        fill: "#FFFFFF",
        textAnchor: "middle",
        fontFamily: "'Noto Sans Telugu', sans-serif"
      }, "\u0C05"), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "68",
        y1: "62",
        x2: "80",
        y2: "76",
        stroke: "#ECEFF1",
        strokeWidth: "3",
        strokeLinecap: "round"
      }));
    case "fruit":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E8FAF5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M24 55 C24 78 76 78 76 55 Z",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "40",
        cy: "48",
        r: "12",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "60",
        cy: "48",
        r: "12",
        fill: "#F39C12"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "42",
        r: "10",
        fill: "#9B59B6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "32",
        r: "2",
        fill: "#27AE60"
      }));
    case "ball":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDEEEE"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "28",
        fill: "#E74C3C",
        stroke: "#C0392B",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 22 C34 32 34 68 50 78 Z",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 22 C66 32 66 68 50 78 Z",
        fill: "#3498DB"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "22",
        y1: "50",
        x2: "78",
        y2: "50",
        stroke: "#FFFFFF",
        strokeWidth: "2"
      }));
    case "bear":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F0EBFA"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "34",
        cy: "32",
        r: "8",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "34",
        cy: "32",
        r: "4",
        fill: "#D7CCC8"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "66",
        cy: "32",
        r: "8",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "66",
        cy: "32",
        r: "4",
        fill: "#D7CCC8"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "48",
        r: "22",
        fill: "#8D6E63"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "54",
        rx: "10",
        ry: "7",
        fill: "#D7CCC8"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "51",
        rx: "4",
        ry: "2.5",
        fill: "#3E2723"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 54 L50 57",
        stroke: "#3E2723",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "43",
        cy: "44",
        r: "2",
        fill: "#3E2723"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "57",
        cy: "44",
        r: "2",
        fill: "#3E2723"
      }));
    case "mango":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EC"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M52 28 C32 30 28 54 44 72 C58 84 76 74 72 54 C68 38 60 26 52 28 Z",
        fill: "#F39C12",
        stroke: "#E67E22",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M42 45 C38 55 42 66 52 72",
        stroke: "#E74C3C",
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.6",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M52 28 Q50 18 46 16",
        stroke: "#795548",
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M52 24 Q66 18 64 30 Q54 30 52 24 Z",
        fill: "#2ECC71",
        stroke: "#27AE60",
        strokeWidth: "1.5"
      }));
    case "machine":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAE8F5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "46",
        r: "16",
        fill: "#95A5A6",
        stroke: "#7F8C8D",
        strokeWidth: "3",
        strokeDasharray: "6,4"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "46",
        r: "6",
        fill: "#EAE8F5",
        stroke: "#7F8C8D",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "62",
        r: "12",
        fill: "#3498DB",
        stroke: "#2980B9",
        strokeWidth: "3",
        strokeDasharray: "5,3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "62",
        r: "4",
        fill: "#EAE8F5",
        stroke: "#2980B9",
        strokeWidth: "2"
      }));
    case "sun":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF0FC"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        stroke: "#F39C12",
        strokeWidth: "3",
        strokeLinecap: "round"
      }, /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "16",
        x2: "50",
        y2: "24"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "76",
        x2: "50",
        y2: "84"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "16",
        y1: "50",
        x2: "24",
        y2: "50"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "76",
        y1: "50",
        x2: "84",
        y2: "50"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "26",
        y1: "26",
        x2: "32",
        y2: "32"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "68",
        y1: "68",
        x2: "74",
        y2: "74"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "26",
        y1: "74",
        x2: "32",
        y2: "68"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "68",
        y1: "32",
        x2: "74",
        y2: "26"
      })), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "22",
        fill: "#F1C40F",
        stroke: "#F39C12",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "43",
        cy: "46",
        r: "2",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "57",
        cy: "46",
        r: "2",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M43 54 Q50 60 57 54",
        stroke: "#D35400",
        strokeWidth: "2",
        strokeLinecap: "round",
        fill: "none"
      }));
    case "laddu":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0F0"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "74",
        rx: "34",
        ry: "10",
        fill: "#2ECC71",
        stroke: "#27AE60",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "24",
        fill: "#F39C12",
        stroke: "#D68910",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "42",
        cy: "42",
        r: "2",
        fill: "#F9E79F"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "56",
        cy: "40",
        r: "1.5",
        fill: "#27AE60"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "48",
        r: "2",
        fill: "#F9E79F"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "40",
        cy: "56",
        r: "1.5",
        fill: "#C0392B"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "56",
        r: "2",
        fill: "#F9E79F"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "48",
        cy: "62",
        r: "1.5",
        fill: "#27AE60"
      }));
    case "net":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#ECFBFF"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M26 30 Q50 40 74 30 L66 76 Q50 82 34 76 Z",
        fill: "#E8F8F5",
        stroke: "#16A085",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "38",
        y1: "32",
        x2: "42",
        y2: "78",
        stroke: "#1ABC9C",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "35",
        x2: "50",
        y2: "80",
        stroke: "#1ABC9C",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "62",
        y1: "32",
        x2: "58",
        y2: "78",
        stroke: "#1ABC9C",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "30",
        y1: "46",
        x2: "70",
        y2: "46",
        stroke: "#1ABC9C",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "32",
        y1: "62",
        x2: "68",
        y2: "62",
        stroke: "#1ABC9C",
        strokeWidth: "1.5"
      }));
    case "conch":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E6F8FC"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 46 C24 35 36 24 50 24 C66 24 78 36 74 54 C70 70 54 80 44 80 C36 80 34 72 38 66 C42 62 46 64 50 62 C58 58 64 50 60 40 C56 32 42 34 38 42 Z",
        fill: "#FFFFFF",
        stroke: "#BDC3C7",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M42 42 Q52 40 56 48",
        stroke: "#F1C40F",
        strokeWidth: "2",
        fill: "none"
      }));
    case "hexagon":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E8FAF5"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,22 76,36 76,64 50,78 24,64 24,36",
        fill: "#1ABC9C",
        stroke: "#16A085",
        strokeWidth: "3"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "50",
        y: "56",
        fontSize: "20",
        fontWeight: "bold",
        fill: "#FFFFFF",
        textAnchor: "middle"
      }, "6"));
    case "bag":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E7F7F3"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "28",
        y: "38",
        width: "44",
        height: "42",
        rx: "6",
        fill: "#E74C3C",
        stroke: "#C0392B",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M28 44 Q50 60 72 44 L72 38 L28 38 Z",
        fill: "#F1C40F",
        stroke: "#D4AC0D",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "46",
        y: "52",
        width: "8",
        height: "6",
        rx: "1",
        fill: "#34495E"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M40 38 V28 H60 V38",
        stroke: "#C0392B",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }));
    case "swan":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EEF5FF"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M15 76 Q30 72 45 76 Q60 80 75 76 Q85 72 90 76",
        stroke: "#3498DB",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "46",
        cy: "62",
        rx: "22",
        ry: "14",
        fill: "#FFFFFF",
        stroke: "#BDC3C7",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M58 64 C66 60 70 45 64 34 C60 28 66 22 72 24 C76 26 74 36 68 46 L60 64",
        fill: "#FFFFFF",
        stroke: "#BDC3C7",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "71",
        cy: "26",
        r: "1.2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "74,25 84,28 75,31",
        fill: "#E67E22"
      }));
    case "lock":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F0EBFA"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M38 46 V32 C38 24 62 24 62 32 V46",
        stroke: "#7F8C8D",
        strokeWidth: "5",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "30",
        y: "46",
        width: "40",
        height: "34",
        rx: "6",
        fill: "#F1C40F",
        stroke: "#D4AC0D",
        strokeWidth: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "60",
        r: "4",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "48,60 52,60 53,70 47,70",
        fill: "#2C3E50"
      }));
    case "tree":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E9F8F0"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 84 L46 54 L54 54 L56 84 Z",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "40",
        r: "18",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "36",
        cy: "46",
        r: "14",
        fill: "#27AE60"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "46",
        r: "14",
        fill: "#27AE60"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "30",
        r: "14",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "42",
        cy: "38",
        r: "2.5",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "36",
        r: "2.5",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "52",
        cy: "48",
        r: "2.5",
        fill: "#E74C3C"
      }));
    case "horse":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0E6"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "46",
        cy: "58",
        rx: "24",
        ry: "16",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M58 56 L72 34 L78 38 L68 64 Z",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "74",
        cy: "34",
        r: "7",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "68,28 72,20 75,28",
        fill: "#BA4A00"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M60 40 Q56 50 58 54",
        stroke: "#2C3E50",
        strokeWidth: "4",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "32",
        y1: "68",
        x2: "28",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "42",
        y1: "68",
        x2: "42",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "54",
        y1: "68",
        x2: "56",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "64",
        y1: "68",
        x2: "68",
        y2: "86",
        stroke: "#BA4A00",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M24 54 Q14 62 18 78",
        stroke: "#2C3E50",
        strokeWidth: "3.5",
        fill: "none",
        strokeLinecap: "round"
      }));

    // ----------------- ADDITIONAL VOCABULARY ASSETS -----------------
    case "lion":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF5E7"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "48",
        r: "26",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "18",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "36",
        cy: "34",
        r: "5",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "34",
        r: "5",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "43",
        cy: "46",
        r: "2.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "57",
        cy: "46",
        r: "2.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,52 46,56 54,56",
        fill: "#D35400"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M46 58 Q50 62 54 58",
        stroke: "#2C3E50",
        strokeWidth: "1.5",
        fill: "none"
      }));
    case "dog":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDEEEE"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "32",
        cy: "46",
        rx: "6",
        ry: "12",
        fill: "#795548",
        transform: "rotate(-15 32 46)"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "68",
        cy: "46",
        rx: "6",
        ry: "12",
        fill: "#795548",
        transform: "rotate(15 68 46)"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "48",
        r: "18",
        fill: "#F5EEFD",
        stroke: "#795548",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "54",
        rx: "8",
        ry: "6",
        fill: "#D7CCC8"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "52",
        rx: "3.5",
        ry: "2.5",
        fill: "#3E2723"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 55 C50 62 56 62 56 58 Z",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "44",
        r: "2.5",
        fill: "#3E2723"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "56",
        cy: "44",
        r: "2.5",
        fill: "#3E2723"
      }));
    case "cat":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0F0"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "34,36 40,20 48,34",
        fill: "#FFA07A"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "37,34 40,24 45,34",
        fill: "#FFC0CB"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "66,36 60,20 52,34",
        fill: "#FFA07A"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "63,34 60,24 55,34",
        fill: "#FFC0CB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "48",
        r: "18",
        fill: "#FFA07A"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "43",
        cy: "45",
        rx: "2.5",
        ry: "3.5",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "57",
        cy: "45",
        rx: "2.5",
        ry: "3.5",
        fill: "#2ECC71"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,51 47,54 53,54",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "38",
        y1: "52",
        x2: "26",
        y2: "50",
        stroke: "#2C3E50",
        strokeWidth: "1.2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "38",
        y1: "55",
        x2: "26",
        y2: "57",
        stroke: "#2C3E50",
        strokeWidth: "1.2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "62",
        y1: "52",
        x2: "74",
        y2: "50",
        stroke: "#2C3E50",
        strokeWidth: "1.2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "62",
        y1: "55",
        x2: "74",
        y2: "57",
        stroke: "#2C3E50",
        strokeWidth: "1.2"
      }));
    case "monkey":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EC"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "28",
        cy: "46",
        r: "8",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "28",
        cy: "46",
        r: "5",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "72",
        cy: "46",
        r: "8",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "72",
        cy: "46",
        r: "5",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "46",
        r: "18",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "52",
        rx: "12",
        ry: "9",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "44",
        cy: "42",
        r: "2.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "56",
        cy: "42",
        r: "2.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "49",
        rx: "2",
        ry: "1.5",
        fill: "#3E2723"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M44 54 Q50 59 56 54",
        stroke: "#3E2723",
        strokeWidth: "1.5",
        fill: "none",
        strokeLinecap: "round"
      }));
    case "peacock":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E8FAF5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 60 C15 35 15 15 50 15 C85 15 85 35 50 60 Z",
        fill: "#00CEC9",
        opacity: "0.8"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "35",
        cy: "28",
        r: "4",
        fill: "#0984E3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "22",
        r: "4",
        fill: "#0984E3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "65",
        cy: "28",
        r: "4",
        fill: "#0984E3"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "62",
        rx: "10",
        ry: "16",
        fill: "#0984E3"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "46",
        r: "7",
        fill: "#0984E3"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,47 56,50 50,52",
        fill: "#F1C40F"
      }));
    case "crow":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F5F6FA"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "56",
        rx: "16",
        ry: "12",
        fill: "#2F3640"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "44",
        r: "9",
        fill: "#2F3640"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "60",
        cy: "42",
        r: "1.5",
        fill: "#F5F6FA"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "66,42 78,45 66,48",
        fill: "#718093"
      }));
    case "pigeon":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAF0FB"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "48",
        cy: "56",
        rx: "18",
        ry: "14",
        fill: "#7F8C8D"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "62",
        cy: "44",
        r: "8",
        fill: "#95A5A6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "64",
        cy: "42",
        r: "1.5",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "68,42 76,44 68,46",
        fill: "#F39C12"
      }));
    case "eagle":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0E6"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M20 40 Q50 30 80 40 L50 65 Z",
        fill: "#795548"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "35",
        r: "9",
        fill: "#FFFFFF"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,34 58,38 50,42",
        fill: "#F1C40F"
      }));
    case "hen":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF5E7"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "48",
        cy: "58",
        rx: "18",
        ry: "14",
        fill: "#FFFFFF",
        stroke: "#BDC3C7",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "60",
        cy: "44",
        r: "8",
        fill: "#FFFFFF",
        stroke: "#BDC3C7",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M58 36 C58 30 64 30 64 36 Z",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "66,42 74,45 66,48",
        fill: "#F39C12"
      }));
    case "banana":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFFCE6"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 65 C40 75 65 65 72 35 C64 45 45 55 30 65 Z",
        fill: "#F1C40F",
        stroke: "#F39C12",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "72",
        cy: "35",
        r: "2",
        fill: "#795548"
      }));
    case "apple":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDECEF"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "44",
        cy: "56",
        rx: "16",
        ry: "18",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "56",
        cy: "56",
        rx: "16",
        ry: "18",
        fill: "#E74C3C"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 38 Q52 26 56 24",
        stroke: "#795548",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "60",
        cy: "28",
        rx: "5",
        ry: "3",
        fill: "#2ECC71",
        transform: "rotate(20 60 28)"
      }));
    case "grapes":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F5EEFD"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "42",
        cy: "42",
        r: "7",
        fill: "#8E44AD"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "58",
        cy: "42",
        r: "7",
        fill: "#8E44AD"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "7",
        fill: "#9B59B6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "38",
        cy: "56",
        r: "6",
        fill: "#8E44AD"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "62",
        r: "6",
        fill: "#9B59B6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "62",
        cy: "56",
        r: "6",
        fill: "#8E44AD"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "72",
        r: "5",
        fill: "#8E44AD"
      }));
    case "pomegranate":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0F0"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "55",
        r: "22",
        fill: "#C0392B"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,33 46,26 50,28 54,26",
        fill: "#C0392B"
      }));
    case "watermelon":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E8FAF5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M22 45 Q50 85 78 45 Z",
        fill: "#E74C3C",
        stroke: "#27AE60",
        strokeWidth: "5"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "40",
        cy: "52",
        r: "1.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "58",
        r: "1.5",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "60",
        cy: "52",
        r: "1.5",
        fill: "#2C3E50"
      }));
    case "brinjal":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F5EEFD"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "58",
        rx: "16",
        ry: "22",
        fill: "#8E44AD"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 36 L50 24",
        stroke: "#27AE60",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,36 40,38 46,42 54,42 60,38",
        fill: "#2ECC71"
      }));
    case "potato":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF9E7"
      }), /*#__PURE__*/_react["default"].createElement("ellipse", {
        cx: "50",
        cy: "52",
        rx: "24",
        ry: "18",
        fill: "#D4AC0D"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "40",
        cy: "46",
        r: "1.5",
        fill: "#9A7D0A"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "56",
        cy: "54",
        r: "1.5",
        fill: "#9A7D0A"
      }));
    case "okra":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#E9F8F0"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M36 28 L64 74 L58 76 L32 30 Z",
        fill: "#27AE60"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "34",
        cy: "28",
        r: "3",
        fill: "#1E8449"
      }));
    case "onion":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDECEF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "54",
        r: "20",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,34 46,26 54,26",
        fill: "#2ECC71"
      }));
    case "carrot":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EC"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "40,36 60,36 50,78",
        fill: "#E67E22"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 36 L50 20 M46 36 L40 24 M54 36 L60 24",
        stroke: "#27AE60",
        strokeWidth: "2.5"
      }));
    case "book":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EEF5FF"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M26 40 Q50 34 74 40 L74 68 Q50 62 26 68 Z",
        fill: "#3498DB",
        stroke: "#2980B9",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("line", {
        x1: "50",
        y1: "36",
        x2: "50",
        y2: "65",
        stroke: "#F1C40F",
        strokeWidth: "2"
      }));
    case "chair":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF5E7"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "36",
        y: "26",
        width: "6",
        height: "54",
        fill: "#8D6E63"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "36",
        y: "52",
        width: "28",
        height: "6",
        fill: "#A1887F"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "58",
        y: "52",
        width: "6",
        height: "28",
        fill: "#8D6E63"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "36",
        y: "26",
        width: "28",
        height: "6",
        fill: "#8D6E63"
      }));
    case "lamp":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF5EC"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 60 C30 74 70 74 70 60 Z",
        fill: "#D35400",
        stroke: "#BA4A00",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50 32 C44 44 44 54 50 58 C56 54 56 44 50 32 Z",
        fill: "#F1C40F"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "3",
        fill: "#E74C3C"
      }));
    case "flower":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FDECEF"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "38",
        r: "8",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "62",
        r: "8",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "38",
        cy: "50",
        r: "8",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "62",
        cy: "50",
        r: "8",
        fill: "#E84393"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "9",
        fill: "#F1C40F"
      }));
    case "river":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAF0FB"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M30 20 Q50 50 30 80 L70 80 Q50 50 70 20 Z",
        fill: "#3498DB",
        opacity: "0.8"
      }));
    case "moon":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#F0EBFA"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M60 25 C45 25 35 38 35 52 C35 66 45 78 60 78 C48 72 44 58 48 46 C50 38 54 30 60 25 Z",
        fill: "#F1C40F",
        stroke: "#F39C12",
        strokeWidth: "2"
      }));
    case "star":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FEF9E7"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "50,22 58,38 76,40 62,54 66,72 50,62 34,72 38,54 24,40 42,38",
        fill: "#F1C40F",
        stroke: "#F39C12",
        strokeWidth: "2"
      }));
    case "father":
    case "grandfather":
    case "grandmother":
    case "brother":
    case "sister":
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFF0F0"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "42",
        r: "16",
        fill: "#FED7B2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M32 78 C32 62 40 56 50 56 C60 56 68 62 68 78 Z",
        fill: "#3498DB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "45",
        cy: "40",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "55",
        cy: "40",
        r: "2",
        fill: "#2C3E50"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M46 48 Q50 52 54 48",
        stroke: "#E74C3C",
        strokeWidth: "1.5",
        fill: "none",
        strokeLinecap: "round"
      }));

    // Numbers 1-10
    case "num1":
    case "num2":
    case "num3":
    case "num4":
    case "num5":
    case "num6":
    case "num7":
    case "num8":
    case "num9":
    case "num10":
      var numStr = name.replace("num", "");
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#FFFCE6"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "34",
        fill: "#FF7675",
        stroke: "#D63031",
        strokeWidth: "3"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "50",
        y: "60",
        fontSize: "32",
        fontWeight: "bold",
        fill: "#FFFFFF",
        textAnchor: "middle",
        fontFamily: "'Outfit', sans-serif"
      }, numStr));
    default:
      return /*#__PURE__*/_react["default"].createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 100 100",
        className: className,
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "46",
        fill: "#EAF5FB"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "50",
        cy: "50",
        r: "28",
        fill: "#3867D6"
      }), /*#__PURE__*/_react["default"].createElement("text", {
        x: "50",
        y: "58",
        fontSize: "24",
        fontWeight: "bold",
        fill: "#FFFFFF",
        textAnchor: "middle"
      }, "\u2605"));
  }
};
var _default = exports["default"] = Illustration;
  });

  define("src/components/HowToWriteModal.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HowToWriteModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HowToWriteModal = exports.HowToWriteModal = function HowToWriteModal(_ref) {
  var word = _ref.word,
    translit = _ref.translit,
    meaning = _ref.meaning,
    letter = _ref.letter,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCharIndex = _useState2[0],
    setSelectedCharIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAnimating = _useState4[0],
    setIsAnimating = _useState4[1];
  var _useState5 = (0, _react.useState)('#FF6B6B'),
    _useState6 = _slicedToArray(_useState5, 2),
    userStrokeColor = _useState6[0],
    setUserStrokeColor = _useState6[1];
  var _useState7 = (0, _react.useState)(14),
    _useState8 = _slicedToArray(_useState7, 2),
    brushSize = _useState8[0],
    setBrushSize = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isDrawing = _useState10[0],
    setIsDrawing = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showWellDone = _useState12[0],
    setShowWellDone = _useState12[1];
  var canvasRef = (0, _react.useRef)(null);

  // Break word into syllables / characters for writing
  // Simple heuristic or grapheme cluster split for Telugu
  var chars = Array.from(new Intl.Segmenter('te', {
    granularity: 'grapheme'
  }).segment(word)).map(function (s) {
    return s.segment;
  });
  var activeChar = chars[selectedCharIndex] || chars[0] || word;
  var colors = ["#FF6B6B", "#FA8231", "#F7B731", "#20BF6B", "#0984E3", "#8854D0", "#FD79A8"];

  // Initialize practice canvas
  (0, _react.useEffect)(function () {
    clearCanvas();
    triggerAnimation();
  }, [selectedCharIndex, word]);
  var clearCanvas = function clearCanvas() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setShowWellDone(false);
  };
  var triggerAnimation = function triggerAnimation() {
    setIsAnimating(false);
    setTimeout(function () {
      setIsAnimating(true);
      _audioUtils.audioService.playLetterSelect();
      _audioUtils.audioService.speak(activeChar);
    }, 50);
  };
  var getCoordinates = function getCoordinates(e) {
    var canvas = canvasRef.current;
    var rect = canvas.getBoundingClientRect();
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
  var startDrawing = function startDrawing(e) {
    e.preventDefault();
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var _getCoordinates = getCoordinates(e),
      x = _getCoordinates.x,
      y = _getCoordinates.y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = userStrokeColor;
    ctx.lineWidth = brushSize;
    setIsDrawing(true);
  };
  var draw = function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var _getCoordinates2 = getCoordinates(e),
      x = _getCoordinates2.x,
      y = _getCoordinates2.y;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  var stopDrawing = function stopDrawing() {
    if (isDrawing) {
      setIsDrawing(false);
      setShowWellDone(true);
      _audioUtils.audioService.playClick();
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-modal-container",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-modal-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-header-title"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-badge-icon"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Pencil, {
    size: 20
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "write-modal-heading"
  }, "\u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02 (How to Write)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "write-modal-sub"
  }, "\u0C2A\u0C26\u0C02: ", /*#__PURE__*/_react["default"].createElement("strong", {
    className: "highlight-word"
  }, word), " (", translit, " \u2014 ", meaning, ")"))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close-btn",
    onClick: onClose,
    title: "\u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C3F (Close)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.X, {
    size: 22
  }))), chars.length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "syllable-step-row"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "step-label"
  }, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "syllable-pills"
  }, chars.map(function (ch, idx) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: idx,
      className: "syllable-pill ".concat(selectedCharIndex === idx ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setSelectedCharIndex(idx);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "pill-step-num"
    }, idx + 1), /*#__PURE__*/_react["default"].createElement("span", {
      className: "pill-char"
    }, ch));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-stage-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "stroke-animation-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-top-header"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "subcard-title"
  }, "1. \u0C30\u0C3E\u0C24 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F (Watch Stroke Demo)"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "play-stroke-btn",
    onClick: triggerAnimation,
    title: "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F (Play Again)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.RotateCcw, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2A\u0C4D\u0C32\u0C47 \u0C1A\u0C47\u0C2F\u0C3F"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "animation-canvas-box"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "stroke-svg",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "140",
    textAnchor: "middle",
    fontFamily: "'Noto Sans Telugu', sans-serif",
    fontSize: "120",
    fontWeight: "900",
    fill: "#F1F5F9",
    stroke: "#CBD5E1",
    strokeWidth: "2"
  }, activeChar), /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "140",
    textAnchor: "middle",
    fontFamily: "'Noto Sans Telugu', sans-serif",
    fontSize: "120",
    fontWeight: "900",
    fill: "none",
    stroke: "#FF6B6B",
    strokeWidth: "5",
    strokeDasharray: "800",
    strokeDashoffset: isAnimating ? "0" : "800",
    className: isAnimating ? "animated-writing-stroke" : ""
  }, activeChar)), isAnimating && /*#__PURE__*/_react["default"].createElement("div", {
    className: "animated-pencil-cursor"
  }, "\u270F\uFE0F")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sound-helper-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "speak-char-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      _audioUtils.audioService.speak(activeChar);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C08 \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F: \"", activeChar, "\"")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "interactive-slate-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-top-header"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "subcard-title"
  }, "2. \u0C2E\u0C40\u0C30\u0C47 \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F (Your Turn to Practice)"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "clear-slate-btn",
    onClick: clearCanvas,
    title: "\u0C2A\u0C32\u0C15 \u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C3F (Clear)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.RotateCcw, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C3F"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "practice-canvas-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slate-watermark",
    "aria-hidden": "true"
  }, activeChar), /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    className: "practice-draw-canvas",
    onMouseDown: startDrawing,
    onMouseMove: draw,
    onMouseUp: stopDrawing,
    onMouseLeave: stopDrawing,
    onTouchStart: startDrawing,
    onTouchMove: draw,
    onTouchEnd: stopDrawing
  }), showWellDone && /*#__PURE__*/_react["default"].createElement("div", {
    className: "well-done-toast"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C1A\u0C3E\u0C32\u0C3E \u0C2C\u0C3E\u0C17\u0C3E \u0C30\u0C3E\u0C36\u0C3E\u0C30\u0C41! (Well Done!)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slate-tools-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-swatches-group"
  }, colors.map(function (c) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: c,
      className: "swatch-btn ".concat(userStrokeColor === c ? 'selected' : ''),
      style: {
        backgroundColor: c
      },
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setUserStrokeColor(c);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "brush-size-group"
  }, [8, 14, 22].map(function (sz) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: sz,
      className: "size-btn ".concat(brushSize === sz ? 'selected' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setBrushSize(sz);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "size-dot",
      style: {
        width: sz / 1.5,
        height: sz / 1.5
      }
    }));
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "write-modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "full-word-listen-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      _audioUtils.audioService.speak(word, translit);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C2A\u0C26\u0C02 \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F: \"", word, "\" (", translit, ")")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "done-close-btn",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement(_Icons.CheckCircle, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C2F\u0C3F\u0C02\u0C26\u0C3F (Done)")))));
};
var _default = exports["default"] = HowToWriteModal;
  });

  define("src/components/WordDetailPage.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WordDetailPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _Illustration = require("./illustrations/Illustration");
var _audioUtils = require("../utils/audioUtils");
var _wordDataHelper = require("../utils/wordDataHelper");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WordDetailPage = exports.WordDetailPage = function WordDetailPage(_ref) {
  var wordData = _ref.wordData,
    onBack = _ref.onBack,
    onSelectWord = _ref.onSelectWord,
    onSelectLetter = _ref.onSelectLetter;
  var word = wordData.word,
    translit = wordData.translit,
    meaning = wordData.meaning,
    _wordData$letter = wordData.letter,
    letter = _wordData$letter === void 0 ? word[0] : _wordData$letter,
    explanation = wordData.explanation,
    _wordData$svgKey = wordData.svgKey,
    svgKey = _wordData$svgKey === void 0 ? "mother" : _wordData$svgKey,
    _wordData$accentColor = wordData.accentColor,
    accentColor = _wordData$accentColor === void 0 ? "#FF6B6B" : _wordData$accentColor;
  var syllables = (0, _wordDataHelper.getWordSyllables)(word);
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCharIndex = _useState2[0],
    setSelectedCharIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isAnimating = _useState4[0],
    setIsAnimating = _useState4[1];
  var _useState5 = (0, _react.useState)('#FF6B6B'),
    _useState6 = _slicedToArray(_useState5, 2),
    userStrokeColor = _useState6[0],
    setUserStrokeColor = _useState6[1];
  var _useState7 = (0, _react.useState)(14),
    _useState8 = _slicedToArray(_useState7, 2),
    brushSize = _useState8[0],
    setBrushSize = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isDrawing = _useState10[0],
    setIsDrawing = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showWellDone = _useState12[0],
    setShowWellDone = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isPlayingWordAudio = _useState14[0],
    setIsPlayingWordAudio = _useState14[1];
  var canvasRef = (0, _react.useRef)(null);
  var activeChar = syllables[selectedCharIndex] || syllables[0] || word;
  var strokeInfo = (0, _wordDataHelper.getStrokePoints)(activeChar);
  var relatedWords = (0, _wordDataHelper.getRelatedWordsFor)(letter, word);
  var chalkColors = ["#FF6B6B", "#FA8231", "#F7B731", "#20BF6B", "#00D2D3", "#54A0FF", "#5F27CD", "#FFFFFF"];

  // Auto-speak word on load
  (0, _react.useEffect)(function () {
    _audioUtils.audioService.speak(word, translit);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [word]);

  // Reset and trigger stroke animation when active character changes
  (0, _react.useEffect)(function () {
    clearCanvas();
    triggerAnimation();
  }, [selectedCharIndex, word]);
  var clearCanvas = function clearCanvas() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setShowWellDone(false);
  };
  var triggerAnimation = function triggerAnimation() {
    setIsAnimating(false);
    setTimeout(function () {
      setIsAnimating(true);
      _audioUtils.audioService.playLetterSelect();
      _audioUtils.audioService.speak(activeChar);
    }, 60);
  };
  var playWordAudio = function playWordAudio() {
    setIsPlayingWordAudio(true);
    _audioUtils.audioService.playClick();
    _audioUtils.audioService.speak(word, translit);
    setTimeout(function () {
      return setIsPlayingWordAudio(false);
    }, 1000);
  };
  var playSlowSyllables = function playSlowSyllables() {
    _audioUtils.audioService.playClick();
    _audioUtils.audioService.speakSyllables(syllables);
  };
  var playSingleChar = function playSingleChar(_char) {
    _audioUtils.audioService.playClick();
    _audioUtils.audioService.speak(_char);
  };

  // Drawing canvas handlers
  var getCoordinates = function getCoordinates(e) {
    var canvas = canvasRef.current;
    var rect = canvas.getBoundingClientRect();
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
  var startDrawing = function startDrawing(e) {
    e.preventDefault();
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var _getCoordinates = getCoordinates(e),
      x = _getCoordinates.x,
      y = _getCoordinates.y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = userStrokeColor;
    ctx.lineWidth = brushSize;
    setIsDrawing(true);
  };
  var draw = function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var _getCoordinates2 = getCoordinates(e),
      x = _getCoordinates2.x,
      y = _getCoordinates2.y;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  var stopDrawing = function stopDrawing() {
    if (isDrawing) {
      setIsDrawing(false);
      setShowWellDone(true);
      _audioUtils.audioService.playCorrect();
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-detail-page",
    style: {
      '--page-accent': accentColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-page-top-nav"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "nav-back-btn",
    onClick: onBack,
    title: "\u0C35\u0C46\u0C28\u0C15\u0C4D\u0C15\u0C3F \u0C35\u0C46\u0C33\u0C4D\u0C33\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.ArrowLeft, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C35\u0C46\u0C28\u0C15\u0C4D\u0C15\u0C3F (Back)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-page-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.BookOpen, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2A\u0C26\u0C02 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02 \u2022 Word Learning")), onSelectLetter && /*#__PURE__*/_react["default"].createElement("button", {
    className: "goto-letter-btn",
    onClick: function onClick() {
      return onSelectLetter(letter);
    },
    title: "\"".concat(letter, "\" \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F")
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02: ", /*#__PURE__*/_react["default"].createElement("strong", null, letter)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-hero-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-hero-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-hero-visual"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "visual-circle-bg"
  }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
    name: svgKey,
    size: 190
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-hero-details"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-heading-row"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "word-display-title"
  }, word), /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-translit-pill"
  }, translit)), /*#__PURE__*/_react["default"].createElement("p", {
    className: "word-meaning-sub"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "English:"), " ", meaning), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-syllables-box"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "syllables-label"
  }, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32 \u0C27\u0C4D\u0C35\u0C28\u0C3F (Syllable Sounds):"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "syllable-chips-row"
  }, syllables.map(function (syl, idx) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: idx,
      className: "syllable-sound-chip",
      onClick: function onClick() {
        return playSingleChar(syl);
      },
      title: "\u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F: \"".concat(syl, "\"")
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "chip-num"
    }, idx + 1), /*#__PURE__*/_react["default"].createElement("span", {
      className: "chip-text"
    }, syl), /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
      size: 16,
      className: "chip-audio-icon"
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-audio-actions"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "primary-listen-btn ".concat(isPlayingWordAudio ? 'pulse' : ''),
    onClick: playWordAudio
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 24
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C2A\u0C26\u0C02 \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F: \"", word, "\"")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "secondary-listen-btn",
    onClick: playSlowSyllables,
    title: "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32\u0C28\u0C41 \u0C35\u0C3F\u0C21\u0C26\u0C40\u0C38\u0C3F \u0C28\u0C3F\u0C26\u0C3E\u0C28\u0C02\u0C17\u0C3E \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C35\u0C3F\u0C21\u0C26\u0C40\u0C38\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F (Slow)"))), explanation && /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-explanation-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explanation-header"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Lightbulb, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C1A\u0C3F\u0C28\u0C4D\u0C28 \u0C35\u0C3F\u0C35\u0C30\u0C23 (Simple Note):")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "explanation-content"
  }, explanation))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-writing-section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title-bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-icon-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Pencil, {
    size: 22
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "section-title"
  }, "\u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C0E\u0C32\u0C3E\u0C17\u0C4B \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02 (How to Write)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "section-subtitle"
  }, "\u0C0E\u0C15\u0C4D\u0C15\u0C21 \u0C2E\u0C4A\u0C26\u0C32\u0C41\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C3E\u0C32\u0C3F? \u0C0E\u0C15\u0C4D\u0C15\u0C21 \u0C2E\u0C41\u0C17\u0C3F\u0C02\u0C1A\u0C3E\u0C32\u0C3F? (Watch Stroke Demo & Practice Tracing)"))), syllables.length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "syllable-step-container"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "step-guide-text"
  }, "\u0C30\u0C3E\u0C2F\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "syllable-step-tabs"
  }, syllables.map(function (syl, idx) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: idx,
      className: "syllable-step-tab ".concat(selectedCharIndex === idx ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setSelectedCharIndex(idx);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "step-tab-num"
    }, idx + 1, "\u0C35 \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "step-tab-char"
    }, syl));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "stroke-points-legend"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend-item start"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-dot start-dot"
  }, "1"), /*#__PURE__*/_react["default"].createElement("strong", null, "\u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D \u0C2C\u0C3F\u0C02\u0C26\u0C41\u0C35\u0C41 (START HERE)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend-item direction"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-arrow"
  }, "\u2794 \u2794 \u2794"), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C30\u0C3E\u0C24 \u0C26\u0C3F\u0C36 (Stroke Flow)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend-item end"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-dot end-dot"
  }, "2"), /*#__PURE__*/_react["default"].createElement("strong", null, "\u0C2E\u0C41\u0C17\u0C3F\u0C02\u0C2A\u0C41 \u0C2C\u0C3F\u0C02\u0C26\u0C41\u0C35\u0C41 (END HERE)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "writing-studio-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "studio-demo-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "studio-card-header"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "studio-header-title"
  }, "1. \u0C30\u0C3E\u0C24 \u0C2A\u0C26\u0C4D\u0C27\u0C24\u0C3F \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F (Watch Stroke Demo)"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "action-pill-btn",
    onClick: triggerAnimation,
    title: "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F (Play Again)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.RotateCcw, {
    size: 15
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C2A\u0C4D\u0C32\u0C47 \u0C1A\u0C47\u0C2F\u0C3F"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "demo-canvas-area"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "stroke-svg-stage",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "140",
    textAnchor: "middle",
    fontFamily: "'Noto Sans Telugu', sans-serif",
    fontSize: "125",
    fontWeight: "900",
    fill: "#F8FAFC",
    stroke: "#E2E8F0",
    strokeWidth: "3"
  }, activeChar), /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "140",
    textAnchor: "middle",
    fontFamily: "'Noto Sans Telugu', sans-serif",
    fontSize: "125",
    fontWeight: "900",
    fill: "none",
    stroke: "#FF6B6B",
    strokeWidth: "6",
    strokeDasharray: "900",
    strokeDashoffset: isAnimating ? "0" : "900",
    className: isAnimating ? "animated-writing-stroke" : ""
  }, activeChar), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: strokeInfo.start.x,
    cy: strokeInfo.start.y,
    r: "14",
    fill: "#10B981",
    stroke: "#FFFFFF",
    strokeWidth: "3",
    className: "pulsing-marker"
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: strokeInfo.start.x,
    y: strokeInfo.start.y + 5,
    textAnchor: "middle",
    fontFamily: "sans-serif",
    fontSize: "13",
    fontWeight: "900",
    fill: "#FFFFFF"
  }, "1"), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: strokeInfo.end.x,
    cy: strokeInfo.end.y,
    r: "14",
    fill: "#EF4444",
    stroke: "#FFFFFF",
    strokeWidth: "3",
    className: "pulsing-marker"
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: strokeInfo.end.x,
    y: strokeInfo.end.y + 5,
    textAnchor: "middle",
    fontFamily: "sans-serif",
    fontSize: "13",
    fontWeight: "900",
    fill: "#FFFFFF"
  }, "2")), isAnimating && /*#__PURE__*/_react["default"].createElement("div", {
    className: "animated-pencil-cursor"
  }, "\u270F\uFE0F")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "stroke-tip-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tip-badge"
  }, "\u0C30\u0C3E\u0C24 \u0C38\u0C42\u0C1A\u0C28:"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "tip-text"
  }, strokeInfo.tip)), /*#__PURE__*/_react["default"].createElement("button", {
    className: "speak-active-char-btn",
    onClick: function onClick() {
      return playSingleChar(activeChar);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C08 \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F: \"", activeChar, "\""))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "studio-practice-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "studio-card-header"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "studio-header-title"
  }, "2. \u0C2E\u0C40\u0C30\u0C47 \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F (Your Turn to Practice)"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "action-pill-btn",
    onClick: clearCanvas,
    title: "\u0C2A\u0C32\u0C15 \u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C3F (Clear Slate)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.RotateCcw, {
    size: 15
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C3F"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "chalkboard-frame"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "chalkboard-watermark",
    "aria-hidden": "true"
  }, activeChar), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slate-guide-marker start-marker",
    style: {
      left: "".concat(strokeInfo.start.x / 200 * 100, "%"),
      top: "".concat(strokeInfo.start.y / 200 * 100, "%")
    },
    title: "\u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C2E\u0C4A\u0C26\u0C32\u0C41\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C02\u0C21\u0C3F (Start Here)"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "1. \u0C2E\u0C4A\u0C26\u0C32\u0C41")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slate-guide-marker end-marker",
    style: {
      left: "".concat(strokeInfo.end.x / 200 * 100, "%"),
      top: "".concat(strokeInfo.end.y / 200 * 100, "%")
    },
    title: "\u0C07\u0C15\u0C4D\u0C15\u0C21 \u0C2E\u0C41\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F (End Here)"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "2. \u0C2E\u0C41\u0C17\u0C3F\u0C02\u0C2A\u0C41")), /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    className: "chalkboard-draw-surface",
    onMouseDown: startDrawing,
    onMouseMove: draw,
    onMouseUp: stopDrawing,
    onMouseLeave: stopDrawing,
    onTouchStart: startDrawing,
    onTouchMove: draw,
    onTouchEnd: stopDrawing
  }), showWellDone && /*#__PURE__*/_react["default"].createElement("div", {
    className: "encouragement-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C1A\u0C3E\u0C32\u0C3E \u0C05\u0C26\u0C4D\u0C2D\u0C41\u0C24\u0C02\u0C17\u0C3E \u0C30\u0C3E\u0C36\u0C3E\u0C30\u0C41! (Great Writing!)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "chalkboard-tools"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "chalk-palette"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "palette-label"
  }, "\u0C30\u0C02\u0C17\u0C41:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "swatches-row"
  }, chalkColors.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: col,
      className: "chalk-swatch ".concat(userStrokeColor === col ? 'active' : ''),
      style: {
        backgroundColor: col
      },
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setUserStrokeColor(col);
      },
      title: col
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "brush-selector"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "palette-label"
  }, "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sizes-row"
  }, [8, 14, 22].map(function (sz) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: sz,
      className: "brush-size-btn ".concat(brushSize === sz ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setBrushSize(sz);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "brush-dot",
      style: {
        width: sz / 1.5,
        height: sz / 1.5
      }
    }));
  }))))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "related-words-section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "related-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "related-title-box"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 22,
    className: "related-icon"
  }), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "related-title"
  }, "\u0C38\u0C02\u0C2C\u0C02\u0C27\u0C3F\u0C24 \u0C2A\u0C26\u0C3E\u0C32\u0C41 (Related Words with \"", letter, "\")")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "related-subtitle"
  }, "\u0C08 \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02\u0C24\u0C4B \u0C2E\u0C4A\u0C26\u0C32\u0C2F\u0C4D\u0C2F\u0C47 \u0C2E\u0C30\u0C3F\u0C28\u0C4D\u0C28\u0C3F \u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C2A\u0C26\u0C3E\u0C32\u0C41 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F!")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "related-words-grid"
  }, relatedWords.map(function (item, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "related-word-card",
      onClick: function onClick() {
        if (onSelectWord) {
          _audioUtils.audioService.playClick();
          onSelectWord({
            word: item.telugu,
            translit: item.translit,
            meaning: item.english,
            letter: letter,
            svgKey: item.svgKey || svgKey
          });
        }
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "related-card-visual"
    }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
      name: item.svgKey || svgKey,
      size: 70
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "related-card-info"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "related-telugu"
    }, item.telugu), /*#__PURE__*/_react["default"].createElement("p", {
      className: "related-translit"
    }, item.translit), /*#__PURE__*/_react["default"].createElement("p", {
      className: "related-meaning"
    }, item.english)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "related-card-actions"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "related-audio-btn",
      onClick: function onClick(e) {
        e.stopPropagation();
        _audioUtils.audioService.playClick();
        _audioUtils.audioService.speak(item.telugu, item.translit);
      },
      title: "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
    }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
      size: 18
    })), /*#__PURE__*/_react["default"].createElement("button", {
      className: "related-view-btn"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "\u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F \u2794"))));
  }))));
};
var _default = exports["default"] = WordDetailPage;
  });

  define("src/components/LetterCanvas.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LetterCanvas = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LetterCanvas = exports.LetterCanvas = function LetterCanvas(_ref) {
  var _char = _ref["char"],
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#FF6B6B" : _ref$color;
  var canvasRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDrawing = _useState2[0],
    setIsDrawing = _useState2[1];
  var _useState3 = (0, _react.useState)(color),
    _useState4 = _slicedToArray(_useState3, 2),
    brushColor = _useState4[0],
    setBrushColor = _useState4[1];
  var _useState5 = (0, _react.useState)(14),
    _useState6 = _slicedToArray(_useState5, 2),
    brushSize = _useState6[0],
    setBrushSize = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isEraser = _useState8[0],
    setIsEraser = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasDrawn = _useState10[0],
    setHasDrawn = _useState10[1];
  var colors = ["#FF6B6B",
  // Red
  "#FA8231",
  // Orange
  "#F7B731",
  // Yellow
  "#20BF6B",
  // Green
  "#0984E3",
  // Blue
  "#8854D0",
  // Purple
  "#FD79A8" // Pink
  ];

  // Initialize canvas
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    // Handle high DPI
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    clearCanvas();
  }, [_char]);
  var clearCanvas = function clearCanvas() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };
  var getCoordinates = function getCoordinates(e) {
    var canvas = canvasRef.current;
    var rect = canvas.getBoundingClientRect();
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
  var startDrawing = function startDrawing(e) {
    e.preventDefault();
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var _getCoordinates = getCoordinates(e),
      x = _getCoordinates.x,
      y = _getCoordinates.y;
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
  var draw = function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var _getCoordinates2 = getCoordinates(e),
      x = _getCoordinates2.x,
      y = _getCoordinates2.y;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  var stopDrawing = function stopDrawing() {
    setIsDrawing(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tracing-canvas-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tracing-canvas-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tracing-title"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 18,
    className: "tracing-icon"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C26\u0C3F\u0C26\u0C4D\u0C26\u0C41\u0C26\u0C3E\u0C02 (Trace & Practice)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tracing-actions"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "tool-btn ".concat(isEraser ? 'active' : ''),
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      setIsEraser(!isEraser);
    },
    title: "\u0C30\u0C2C\u0C4D\u0C2C\u0C30\u0C41 (Eraser)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Eraser, {
    size: 18
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "tool-btn danger",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      clearCanvas();
    },
    title: "\u0C36\u0C41\u0C2D\u0C4D\u0C30\u0C02 \u0C1A\u0C47\u0C2F\u0C3F (Clear Canvas)"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.RotateCcw, {
    size: 18
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "canvas-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "letter-watermark",
    "aria-hidden": "true"
  }, _char), /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    className: "drawing-canvas",
    onMouseDown: startDrawing,
    onMouseMove: draw,
    onMouseUp: stopDrawing,
    onMouseLeave: stopDrawing,
    onTouchStart: startDrawing,
    onTouchMove: draw,
    onTouchEnd: stopDrawing
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "canvas-controls"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette"
  }, colors.map(function (c) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: c,
      className: "color-swatch ".concat(brushColor === c && !isEraser ? 'selected' : ''),
      style: {
        backgroundColor: c
      },
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setBrushColor(c);
        setIsEraser(false);
      },
      "aria-label": "Color ".concat(c)
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "brush-sizes"
  }, [8, 14, 22].map(function (sz) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: sz,
      className: "size-dot-btn ".concat(brushSize === sz ? 'selected' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setBrushSize(sz);
      },
      title: "Brush Size ".concat(sz)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "dot-preview",
      style: {
        width: sz / 1.5,
        height: sz / 1.5
      }
    }));
  }))));
};
var _default = exports["default"] = LetterCanvas;
  });

  define("src/components/LetterCard.jsx", function(module, exports, require) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LetterCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _Icons = require("./Icons");
var _Illustration = require("./illustrations/Illustration");
var _audioUtils = require("../utils/audioUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LetterCard = exports.LetterCard = function LetterCard(_ref) {
  var letter = _ref.letter,
    onSelect = _ref.onSelect,
    onWriteWord = _ref.onWriteWord;
  var handleAudio = function handleAudio(e) {
    e.stopPropagation();
    _audioUtils.audioService.playLetterSelect();
    _audioUtils.audioService.speak(letter["char"], letter.translit);
  };
  var handleCardClick = function handleCardClick() {
    _audioUtils.audioService.playLetterSelect();
    _audioUtils.audioService.speak(letter["char"], letter.translit);
    onSelect(letter);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "letter-card",
    onClick: handleCardClick,
    style: {
      '--card-accent': letter.accentColor,
      '--card-bg-soft': letter.bgSoft
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        handleCardClick();
      }
    },
    "aria-label": "Telugu letter ".concat(letter["char"], ", pronunciation ").concat(letter.translit, ", word ").concat(letter.word)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-top-row"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "card-translit"
  }, letter.translit), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-actions-top"
  }, onWriteWord && /*#__PURE__*/_react["default"].createElement("button", {
    className: "card-quick-write-btn",
    onClick: function onClick(e) {
      e.stopPropagation();
      onWriteWord(letter);
    },
    title: "\"".concat(letter.word, "\" \u0C2A\u0C26\u0C02 \u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C0E\u0C32\u0C3E? (How to Write)"),
    "aria-label": "How to write word"
  }, "\u270D\uFE0F"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "card-audio-btn",
    onClick: handleAudio,
    title: "Listen to ".concat(letter["char"]),
    "aria-label": "Play audio for ".concat(letter["char"])
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 16
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-char-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "card-char"
  }, letter["char"])), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-footer-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-mini-illustration"
  }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
    name: letter.svgKey,
    size: 36
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-word-info",
    onClick: function onClick(e) {
      if (onWriteWord) {
        e.stopPropagation();
        onWriteWord(letter);
      }
    },
    title: "\u0C08 \u0C2A\u0C26\u0C02 \u0C0E\u0C32\u0C3E \u0C30\u0C3E\u0C2F\u0C3E\u0C32\u0C4B \u0C1A\u0C42\u0C21\u0C1F\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "card-word-te"
  }, letter.word), /*#__PURE__*/_react["default"].createElement("span", {
    className: "card-word-en"
  }, letter.meaning)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-arrow-indicator"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.ChevronRight, {
    size: 18
  }))));
};
var _default = exports["default"] = LetterCard;
  });

  define("src/components/LetterDetail.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LetterDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _Illustration = require("./illustrations/Illustration");
var _LetterCanvas = require("./LetterCanvas");
var _HowToWriteModal = require("./HowToWriteModal");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LetterDetail = exports.LetterDetail = function LetterDetail(_ref) {
  var letter = _ref.letter,
    allLetters = _ref.allLetters,
    onBack = _ref.onBack,
    onSelectLetter = _ref.onSelectLetter,
    onOpenWordPage = _ref.onOpenWordPage;
  var _useState = (0, _react.useState)(typeof window !== 'undefined' && window.location.hash.includes('/trace') ? 'trace' : 'learn'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPlayingLetterAudio = _useState4[0],
    setIsPlayingLetterAudio = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPlayingWordAudio = _useState6[0],
    setIsPlayingWordAudio = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showWriteModal = _useState8[0],
    setShowWriteModal = _useState8[1];
  var handleWordPageClick = function handleWordPageClick() {
    _audioUtils.audioService.playClick();
    if (onOpenWordPage) {
      onOpenWordPage({
        word: letter.word,
        translit: letter.wordTranslit,
        meaning: letter.meaning,
        letter: letter["char"],
        explanation: letter.explanation,
        svgKey: letter.svgKey,
        accentColor: letter.accentColor
      });
    } else {
      setShowWriteModal(true);
    }
  };
  var currentIndex = allLetters.findIndex(function (l) {
    return l.id === letter.id;
  });
  var prevLetter = currentIndex > 0 ? allLetters[currentIndex - 1] : allLetters[allLetters.length - 1];
  var nextLetter = currentIndex < allLetters.length - 1 ? allLetters[currentIndex + 1] : allLetters[0];

  // Auto-play audio when navigating to a new letter
  (0, _react.useEffect)(function () {
    _audioUtils.audioService.speak(letter["char"], letter.translit);
  }, [letter.id]);

  // Keyboard navigation
  (0, _react.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        onSelectLetter(prevLetter);
      } else if (e.key === 'ArrowRight') {
        onSelectLetter(nextLetter);
      } else if (e.key === 'Escape') {
        if (showWriteModal) setShowWriteModal(false);else onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [letter.id, prevLetter, nextLetter, onSelectLetter, onBack, showWriteModal]);
  var playLetterSound = function playLetterSound() {
    setIsPlayingLetterAudio(true);
    _audioUtils.audioService.playLetterSelect();
    _audioUtils.audioService.speak(letter["char"], letter.translit);
    setTimeout(function () {
      return setIsPlayingLetterAudio(false);
    }, 1000);
  };
  var playWordSound = function playWordSound() {
    setIsPlayingWordAudio(true);
    _audioUtils.audioService.playClick();
    _audioUtils.audioService.speak(letter.word, letter.wordTranslit);
    setTimeout(function () {
      return setIsPlayingWordAudio(false);
    }, 1000);
  };
  var playSlowSyllables = function playSlowSyllables() {
    _audioUtils.audioService.playClick();
    var chars = Array.from(new Intl.Segmenter('te', {
      granularity: 'grapheme'
    }).segment(letter.word)).map(function (s) {
      return s.segment;
    });
    _audioUtils.audioService.speakSyllables(chars);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "letter-detail-view",
    style: {
      '--detail-accent': letter.accentColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-top-nav"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "nav-back-btn",
    onClick: onBack
  }, /*#__PURE__*/_react["default"].createElement(_Icons.ArrowLeft, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C2E\u0C3E\u0C32 (Back to Letters)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "letter-counter-badge"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 ", currentIndex + 1, " / ", allLetters.length)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "prev-next-controls"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "pager-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      onSelectLetter(prevLetter);
    },
    title: "Previous: ".concat(prevLetter["char"])
  }, /*#__PURE__*/_react["default"].createElement(_Icons.ChevronLeft, {
    size: 22
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "pager-char"
  }, prevLetter["char"])), /*#__PURE__*/_react["default"].createElement("button", {
    className: "pager-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      onSelectLetter(nextLetter);
    },
    title: "Next: ".concat(nextLetter["char"])
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "pager-char"
  }, nextLetter["char"]), /*#__PURE__*/_react["default"].createElement(_Icons.ChevronRight, {
    size: 22
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-tabs"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "detail-tab-btn ".concat(activeTab === 'learn' ? 'active' : ''),
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      setActiveTab('learn');
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.BookOpen, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02 (Learn Letter)")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "detail-tab-btn ".concat(activeTab === 'trace' ? 'active' : ''),
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      setActiveTab('trace');
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Pencil, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C30\u0C3E\u0C26\u0C4D\u0C26\u0C3E\u0C02 (Trace & Practice)"))), activeTab === 'learn' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-main-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-letter-hero"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-char-box",
    style: {
      backgroundColor: letter.bgSoft
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "hero-char"
  }, letter["char"]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-phonetic-badge"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "hero-translit"
  }, "\"", letter.translit, "\""))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-audio-actions"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "big-audio-btn ".concat(isPlayingLetterAudio ? 'pulse' : ''),
    onClick: playLetterSound
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 24
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30 \u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "letter-category-tag"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, letter.category), letter.varga && /*#__PURE__*/_react["default"].createElement("span", {
    className: "varga-subtag"
  }, "\u2022 ", letter.varga))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-word-hero"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-illustration-card clickable-card",
    onClick: handleWordPageClick,
    title: "\u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C0E\u0C32\u0C3E\u0C17\u0C4B \u0C1A\u0C42\u0C21\u0C1F\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F (Click to see how to write)"
  }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
    name: letter.svgKey,
    size: 180
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "click-write-badge"
  }, "\u270D\uFE0F \u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F (Click to Write)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-word-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-click-area",
    onClick: handleWordPageClick,
    title: "\u0C08 \u0C2A\u0C26\u0C02 \u0C0E\u0C32\u0C3E \u0C30\u0C3E\u0C2F\u0C3E\u0C32\u0C4B \u0C1A\u0C42\u0C21\u0C1F\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "hero-word-te"
  }, letter.word), /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-interactive-tag"
  }, "\u270D\uFE0F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C38\u0C3F \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "hero-word-en"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-translit"
  }, letter.wordTranslit), " \u2014 ", letter.meaning)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-audio-actions-group"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "word-audio-btn ".concat(isPlayingWordAudio ? 'pulse' : ''),
    onClick: playWordSound,
    title: "\u0C2A\u0C26\u0C02 \u0C09\u0C1A\u0C4D\u0C1A\u0C3E\u0C30\u0C23 \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 24
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "how-to-write-banner"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "how-to-write-btn",
    onClick: handleWordPageClick
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Pencil, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\"", letter.word, "\" \u0C2A\u0C26\u0C02 \u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C0E\u0C32\u0C3E? (How to Write)")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "syllable-listen-btn",
    onClick: playSlowSyllables,
    title: "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32\u0C28\u0C41 \u0C35\u0C3F\u0C21\u0C26\u0C40\u0C38\u0C3F \u0C28\u0C3F\u0C26\u0C3E\u0C28\u0C02\u0C17\u0C3E \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C35\u0C3F\u0C21\u0C26\u0C40\u0C38\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F (Slow)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-explanation-box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explanation-title"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Lightbulb, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C38\u0C41\u0C32\u0C2D\u0C2E\u0C48\u0C28 \u0C35\u0C3F\u0C35\u0C30\u0C23 (Simple Explanation):")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "explanation-text"
  }, letter.explanation)), letter.funFact && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fun-fact-box"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fun-fact-badge"
  }, "\u0C38\u0C30\u0C26\u0C3E \u0C35\u0C3F\u0C37\u0C2F\u0C02:"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "fun-fact-text"
  }, letter.funFact)))))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "detail-trace-view"
  }, /*#__PURE__*/_react["default"].createElement(_LetterCanvas.LetterCanvas, {
    "char": letter["char"],
    color: letter.accentColor
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "letter-quick-strip"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "strip-label"
  }, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32 \u0C1C\u0C3E\u0C2C\u0C3F\u0C24\u0C3E:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "strip-scroll"
  }, allLetters.map(function (l) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: l.id,
      className: "strip-letter-btn ".concat(l.id === letter.id ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        onSelectLetter(l);
      },
      title: "".concat(l["char"], " (").concat(l.translit, ")")
    }, l["char"]);
  }))), showWriteModal && /*#__PURE__*/_react["default"].createElement(_HowToWriteModal.HowToWriteModal, {
    word: letter.word,
    translit: letter.wordTranslit,
    meaning: letter.meaning,
    letter: letter["char"],
    onClose: function onClose() {
      return setShowWriteModal(false);
    }
  }));
};
var _default = exports["default"] = LetterDetail;
  });

  define("src/components/AlphabetGrid.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AlphabetGrid = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _LetterCard = require("./LetterCard");
var _HowToWriteModal = require("./HowToWriteModal");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AlphabetGrid = exports.AlphabetGrid = function AlphabetGrid(_ref) {
  var letters = _ref.letters,
    onSelectLetter = _ref.onSelectLetter,
    onOpenWordPage = _ref.onOpenWordPage;
  var _useState = (0, _react.useState)('all'),
    _useState2 = _slicedToArray(_useState, 2),
    activeFilter = _useState2[0],
    setActiveFilter = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchQuery = _useState4[0],
    setSearchQuery = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showAdvancedVargas = _useState6[0],
    setShowAdvancedVargas = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    writingLetter = _useState8[0],
    setWritingLetter = _useState8[1];

  // Simplified child-friendly primary filter tabs
  var mainFilterTabs = [{
    id: 'all',
    label: '🌟 అన్నీ (All 52)',
    count: letters.length
  }, {
    id: 'vowels',
    label: '🍎 అచ్చులు (Vowels)',
    count: 16
  }, {
    id: 'consonants',
    label: '🐘 హల్లులు (Consonants)',
    count: 36
  }];
  var vargaFilterTabs = [{
    id: 'ka_varga',
    label: 'క వర్గం',
    count: 5
  }, {
    id: 'cha_varga',
    label: 'చ వర్గం',
    count: 5
  }, {
    id: 'ta_varga',
    label: 'ట వర్గం',
    count: 5
  }, {
    id: 'tha_varga',
    label: 'త వర్గం',
    count: 5
  }, {
    id: 'pa_varga',
    label: 'ప వర్గం',
    count: 5
  }];
  var filteredLetters = (0, _react.useMemo)(function () {
    var result = letters;

    // Category filter
    if (activeFilter === 'vowels') {
      result = result.filter(function (l) {
        return l.type === 'vowel';
      });
    } else if (activeFilter === 'consonants') {
      result = result.filter(function (l) {
        return l.type === 'consonant';
      });
    } else if (activeFilter === 'ka_varga') {
      result = result.filter(function (l) {
        return l.varga === 'క వర్గం';
      });
    } else if (activeFilter === 'cha_varga') {
      result = result.filter(function (l) {
        return l.varga === 'చ వర్గం';
      });
    } else if (activeFilter === 'ta_varga') {
      result = result.filter(function (l) {
        return l.varga === 'ట వర్గం';
      });
    } else if (activeFilter === 'tha_varga') {
      result = result.filter(function (l) {
        return l.varga === 'త వర్గం';
      });
    } else if (activeFilter === 'pa_varga') {
      result = result.filter(function (l) {
        return l.varga === 'ప వర్గం';
      });
    }

    // Search filter
    if (searchQuery.trim()) {
      var q = searchQuery.toLowerCase().trim();
      result = result.filter(function (l) {
        return l["char"].includes(q) || l.translit.toLowerCase().includes(q) || l.word.includes(q) || l.meaning.toLowerCase().includes(q) || l.wordTranslit.toLowerCase().includes(q);
      });
    }
    return result;
  }, [letters, activeFilter, searchQuery]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alphabet-grid-section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-banner-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C15\u0C41\u0C32 \u0C15\u0C4B\u0C38\u0C02 \u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C35\u0C30\u0C4D\u0C23\u0C2E\u0C3E\u0C32")), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "hero-title"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "hero-subtitle"
  }, "Let's Learn Telugu Alphabet with sounds, pictures, handwriting practice, and fun!"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "alphabet-stats"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "stat-pill"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "16"), " \u0C05\u0C1A\u0C4D\u0C1A\u0C41\u0C32\u0C41 (Vowels)"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "stat-pill"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "36"), " \u0C39\u0C32\u0C4D\u0C32\u0C41\u0C32\u0C41 (Consonants)"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "stat-pill highlight"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "52"), " \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32\u0C41 (Total Letters)")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "controls-bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "search-input-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Search, {
    size: 20,
    className: "search-icon"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "search-input",
    placeholder: "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C32\u0C47\u0C26\u0C3E \u0C2A\u0C26\u0C02 \u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F (Search: \u0C05\u0C2E\u0C4D\u0C2E, cow, ka, illu)...",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    }
  }), searchQuery && /*#__PURE__*/_react["default"].createElement("button", {
    className: "search-clear-btn",
    onClick: function onClick() {
      return setSearchQuery('');
    }
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-scroll-row"
  }, mainFilterTabs.map(function (tab) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: tab.id,
      className: "filter-pill-btn ".concat(activeFilter === tab.id ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setActiveFilter(tab.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, tab.label), /*#__PURE__*/_react["default"].createElement("span", {
      className: "pill-count"
    }, tab.count));
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "varga-toggle-btn ".concat(showAdvancedVargas ? 'open' : ''),
    onClick: function onClick() {
      return setShowAdvancedVargas(!showAdvancedVargas);
    },
    title: "\u0C35\u0C30\u0C4D\u0C17\u0C3E\u0C32 \u0C35\u0C3F\u0C2D\u0C1C\u0C28 \u0C1A\u0C42\u0C2A\u0C3F\u0C02\u0C1A\u0C41"
  }, /*#__PURE__*/_react["default"].createElement("span", null, showAdvancedVargas ? 'వర్గాలు దాచు ▴' : 'మరిన్ని వర్గాలు ▾'))), showAdvancedVargas && /*#__PURE__*/_react["default"].createElement("div", {
    className: "sub-filter-row"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sub-filter-title"
  }, "\u0C35\u0C30\u0C4D\u0C17\u0C3E\u0C32\u0C41:"), vargaFilterTabs.map(function (tab) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: tab.id,
      className: "filter-pill-btn sub-pill ".concat(activeFilter === tab.id ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setActiveFilter(tab.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, tab.label), /*#__PURE__*/_react["default"].createElement("span", {
      className: "pill-count"
    }, tab.count));
  }))), filteredLetters.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "letters-grid"
  }, filteredLetters.map(function (letter) {
    return /*#__PURE__*/_react["default"].createElement(_LetterCard.LetterCard, {
      key: letter.id,
      letter: letter,
      onSelect: onSelectLetter,
      onWriteWord: function onWriteWord(l) {
        _audioUtils.audioService.playClick();
        if (onOpenWordPage) {
          onOpenWordPage({
            word: l.word,
            translit: l.wordTranslit,
            meaning: l.meaning,
            letter: l["char"],
            explanation: l.explanation,
            svgKey: l.svgKey,
            accentColor: l.accentColor
          });
        } else {
          setWritingLetter(l);
        }
      }
    });
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "empty-search-state"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "\u0C0F \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C15\u0C28\u0C3F\u0C2A\u0C3F\u0C02\u0C1A\u0C32\u0C47\u0C26\u0C41. \u0C35\u0C47\u0C30\u0C47 \u0C36\u0C4B\u0C27\u0C28\u0C28\u0C41 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F!"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "clear-filters-btn",
    onClick: function onClick() {
      setSearchQuery('');
      setActiveFilter('all');
    }
  }, "\u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C3F (Show All)")), writingLetter && /*#__PURE__*/_react["default"].createElement(_HowToWriteModal.HowToWriteModal, {
    word: writingLetter.word,
    translit: writingLetter.wordTranslit,
    meaning: writingLetter.meaning,
    letter: writingLetter["char"],
    onClose: function onClose() {
      return setWritingLetter(null);
    }
  }));
};
var _default = exports["default"] = AlphabetGrid;
  });

  define("src/components/GuninthaluPage.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GuninthaluPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _teluguData = require("../data/teluguData");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GuninthaluPage = exports.GuninthaluPage = function GuninthaluPage() {
  var _useState = (0, _react.useState)(_teluguData.GUNINTHALU_CONSONANTS[0]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedConsonant = _useState2[0],
    setSelectedConsonant = _useState2[1]; // default 'క'
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedItem = _useState4[0],
    setSelectedItem = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showSignsGuide = _useState6[0],
    setShowSignsGuide = _useState6[1];

  // Generate 16 combinations for the chosen consonant
  var combinations = (0, _teluguData.getGuninthamForConsonant)(selectedConsonant["char"], selectedConsonant.baseTranslit);
  var activeCombination = selectedItem || combinations[0];
  var handleSelectCombination = function handleSelectCombination(item) {
    setSelectedItem(item);
    _audioUtils.audioService.playLetterSelect();
    _audioUtils.audioService.speak(item.combinedChar);
  };
  var sampleWord = _teluguData.SAMPLE_GUNINTHAM_WORDS[activeCombination.combinedChar];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "guninthalu-page"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-header-banner guninthalu-banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-header-text"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Layers, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C1A\u0C4D\u0C1A\u0C41\u0C32\u0C41 + \u0C39\u0C32\u0C4D\u0C32\u0C41\u0C32\u0C41 = \u0C17\u0C41\u0C23\u0C3F\u0C02\u0C24\u0C3E\u0C32\u0C41")), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "page-title"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C17\u0C41\u0C23\u0C3F\u0C02\u0C24\u0C3E\u0C32\u0C41 (Guninthalu)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "page-subtitle"
  }, "Learn how consonants combine with vowel signs to form Telugu syllables!")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "guide-toggle-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      setShowSignsGuide(!showSignsGuide);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.HelpCircle, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, showSignsGuide ? 'గుర్తుల పట్టిక దాచు' : 'గుణింతాల గుర్తులు (Vowel Signs)'))), showSignsGuide && /*#__PURE__*/_react["default"].createElement("div", {
    className: "signs-guide-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "signs-guide-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "\u0C17\u0C41\u0C23\u0C3F\u0C02\u0C24\u0C3E\u0C32 \u0C17\u0C41\u0C30\u0C4D\u0C24\u0C41\u0C32\u0C41 (Vowel Signs System)"), /*#__PURE__*/_react["default"].createElement("p", null, "\u0C2A\u0C4D\u0C30\u0C24\u0C3F \u0C39\u0C32\u0C4D\u0C32\u0C41\u0C24\u0C4B \u0C05\u0C1A\u0C4D\u0C1A\u0C41\u0C32\u0C41 \u0C15\u0C32\u0C3F\u0C38\u0C3F\u0C28\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C41 \u0C0F\u0C30\u0C4D\u0C2A\u0C21\u0C47 \u0C1A\u0C3F\u0C39\u0C4D\u0C28\u0C3E\u0C32\u0C41:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "signs-grid"
  }, _teluguData.GUNINTHAPU_GURTULU.map(function (gurtu) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: gurtu.id,
      className: "sign-cell"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "sign-vowel"
    }, gurtu.vowel), /*#__PURE__*/_react["default"].createElement("span", {
      className: "sign-symbol"
    }, gurtu.signSymbol), /*#__PURE__*/_react["default"].createElement("span", {
      className: "sign-name"
    }, gurtu.name), /*#__PURE__*/_react["default"].createElement("span", {
      className: "sign-translit"
    }, "(", gurtu.translit, ")"));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "consonant-selector-box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "selector-title-row"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "selector-label"
  }, "\u0C39\u0C32\u0C4D\u0C32\u0C41\u0C28\u0C41 \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F (Select Consonant):"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "selected-consonant-label"
  }, "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28\u0C26\u0C3F: ", /*#__PURE__*/_react["default"].createElement("strong", null, selectedConsonant["char"]), " (", selectedConsonant.baseTranslit, "a)")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "consonant-pills-row"
  }, _teluguData.GUNINTHALU_CONSONANTS.map(function (c) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: c["char"],
      className: "consonant-pill ".concat(c["char"] === selectedConsonant["char"] ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setSelectedConsonant(c);
        setSelectedItem(null); // reset to first combination
        _audioUtils.audioService.speak(c["char"]);
      }
    }, c["char"]);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "guninthalu-stage-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "combinations-panel"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-heading"
  }, /*#__PURE__*/_react["default"].createElement("span", null, selectedConsonant["char"], " \u0C17\u0C41\u0C23\u0C3F\u0C02\u0C24\u0C02 \u0C35\u0C30\u0C41\u0C38 (16 \u0C30\u0C42\u0C2A\u0C3E\u0C32\u0C41)"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "click-hint"
  }, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02\u0C2A\u0C48 \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C38\u0C3F \u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "combinations-grid"
  }, combinations.map(function (item, idx) {
    var isSelected = item.combinedChar === activeCombination.combinedChar;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "gunintham-cell ".concat(isSelected ? 'selected' : ''),
      onClick: function onClick() {
        return handleSelectCombination(item);
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') handleSelectCombination(item);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "comb-char"
    }, item.combinedChar), /*#__PURE__*/_react["default"].createElement("span", {
      className: "comb-translit"
    }, item.translit), /*#__PURE__*/_react["default"].createElement("span", {
      className: "comb-sign-name"
    }, item.signName));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "combination-spotlight-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-header"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "spotlight-badge"
  }, "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C30\u0C42\u0C2A\u0C02"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "spotlight-audio-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playLetterSelect();
      _audioUtils.audioService.speak(activeCombination.combinedChar);
    },
    title: "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 24
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-char-display"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "spotlight-char"
  }, activeCombination.combinedChar), /*#__PURE__*/_react["default"].createElement("span", {
    className: "spotlight-translit"
  }, "Pronounced: \"", activeCombination.translit, "\"")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-formula-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "formula-label"
  }, "\u0C05\u0C15\u0C4D\u0C37\u0C30 \u0C38\u0C02\u0C2F\u0C4B\u0C17\u0C02 (Formula):"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "formula-equation"
  }, activeCombination.formula), /*#__PURE__*/_react["default"].createElement("span", {
    className: "formula-breakdown"
  }, "\u0C39\u0C32\u0C4D\u0C32\u0C41 (", selectedConsonant["char"], ") + \u0C05\u0C1A\u0C4D\u0C1A\u0C41 (", activeCombination.vowel, ") \u2192 ", activeCombination.signName)), sampleWord ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-word-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-card-title"
  }, "\u0C09\u0C26\u0C3E\u0C39\u0C30\u0C23 \u0C2A\u0C26\u0C02 (Example Word):"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-card-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "word-text-group"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-te"
  }, sampleWord.word), /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-meta"
  }, sampleWord.translit, " \u2014 ", sampleWord.meaning)), /*#__PURE__*/_react["default"].createElement("button", {
    className: "word-listen-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      _audioUtils.audioService.speak(sampleWord.word);
    },
    title: "Hear word"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 18
  })))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-word-card generic"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-card-title"
  }, "\u0C17\u0C41\u0C23\u0C3F\u0C02\u0C24 \u0C05\u0C2D\u0C4D\u0C2F\u0C3E\u0C38\u0C02:"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "generic-practice-text"
  }, "\"", activeCombination.combinedChar, "\" \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C38\u0C4D\u0C2A\u0C37\u0C4D\u0C1F\u0C02\u0C17\u0C3E \u0C2A\u0C32\u0C15\u0C02\u0C21\u0C3F: ", /*#__PURE__*/_react["default"].createElement("strong", null, activeCombination.translit))))));
};
var _default = exports["default"] = GuninthaluPage;
  });

  define("src/components/VocabularyPage.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VocabularyPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _teluguData = require("../data/teluguData");
var _Illustration = require("./illustrations/Illustration");
var _HowToWriteModal = require("./HowToWriteModal");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var VocabularyPage = exports.VocabularyPage = function VocabularyPage(_ref) {
  var onSelectLetterByChar = _ref.onSelectLetterByChar,
    onOpenWordPage = _ref.onOpenWordPage;
  var _useState = (0, _react.useState)('all'),
    _useState2 = _slicedToArray(_useState, 2),
    activeCategory = _useState2[0],
    setActiveCategory = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchQuery = _useState4[0],
    setSearchQuery = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    spotlightItem = _useState6[0],
    setSpotlightItem = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    writingItem = _useState8[0],
    setWritingItem = _useState8[1];
  var filteredItems = (0, _react.useMemo)(function () {
    var result = _teluguData.VOCABULARY_ITEMS;
    if (activeCategory !== 'all') {
      result = result.filter(function (item) {
        return item.category === activeCategory;
      });
    }
    if (searchQuery.trim()) {
      var q = searchQuery.toLowerCase().trim();
      result = result.filter(function (item) {
        return item.telugu.includes(q) || item.english.toLowerCase().includes(q) || item.translit.toLowerCase().includes(q) || item.letter.includes(q);
      });
    }
    return result;
  }, [activeCategory, searchQuery]);
  var handleCardClick = function handleCardClick(item) {
    _audioUtils.audioService.playLetterSelect();
    _audioUtils.audioService.speak(item.telugu, item.translit);
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
  var handlePlayAudio = function handlePlayAudio(e, item) {
    e.stopPropagation();
    _audioUtils.audioService.playClick();
    _audioUtils.audioService.speak(item.telugu, item.translit);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "vocabulary-page"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-header-banner vocab-banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-header-text"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Sparkles, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C3E\u0C32\u0C24\u0C4B \u0C2A\u0C26\u0C3E\u0C32\u0C41 & \u0C30\u0C3E\u0C24")), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "page-title"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C2A\u0C26\u0C15\u0C4B\u0C36\u0C02 (Telugu Vocabulary)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "page-subtitle"
  }, "Explore Telugu words with colorful pictures, audio pronunciation, and handwriting guides!"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "controls-bar vocab-controls"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "search-input-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Search, {
    size: 20,
    className: "search-icon"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "search-input",
    placeholder: "\u0C2A\u0C26\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C36\u0C4B\u0C27\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F (Search word: \u0C2E\u0C3E\u0C2E\u0C3F\u0C21\u0C3F, lion, mango)...",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    }
  }), searchQuery && /*#__PURE__*/_react["default"].createElement("button", {
    className: "search-clear-btn",
    onClick: function onClick() {
      return setSearchQuery('');
    }
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "category-scroll-row"
  }, _teluguData.VOCABULARY_CATEGORIES.map(function (cat) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: cat.id,
      className: "cat-pill-btn ".concat(activeCategory === cat.id ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setActiveCategory(cat.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "cat-icon"
    }, cat.icon), /*#__PURE__*/_react["default"].createElement("span", {
      className: "cat-name"
    }, cat.name));
  }))), filteredItems.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "vocab-grid"
  }, filteredItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "vocab-card",
      onClick: function onClick() {
        return handleCardClick(item);
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') handleCardClick(item);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "vocab-card-header"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "letter-jump-tag",
      onClick: function onClick(e) {
        e.stopPropagation();
        _audioUtils.audioService.playClick();
        if (onSelectLetterByChar) onSelectLetterByChar(item.letter);
      },
      title: "Go to letter ".concat(item.letter)
    }, /*#__PURE__*/_react["default"].createElement("span", null, "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02: ", /*#__PURE__*/_react["default"].createElement("strong", null, item.letter))), /*#__PURE__*/_react["default"].createElement("button", {
      className: "card-listen-btn",
      onClick: function onClick(e) {
        return handlePlayAudio(e, item);
      },
      title: "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F",
      "aria-label": "Listen to ".concat(item.telugu)
    }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
      size: 17
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "vocab-card-illustration"
    }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
      name: item.svgKey,
      size: 110
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "vocab-card-body"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "vocab-telugu-word"
    }, item.telugu), /*#__PURE__*/_react["default"].createElement("p", {
      className: "vocab-translit"
    }, item.translit), /*#__PURE__*/_react["default"].createElement("p", {
      className: "vocab-english"
    }, item.english), /*#__PURE__*/_react["default"].createElement("span", {
      className: "card-write-hint"
    }, "\u270D\uFE0F \u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F")));
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "empty-search-state"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "\u0C0F \u0C2A\u0C26\u0C02 \u0C15\u0C28\u0C3F\u0C2A\u0C3F\u0C02\u0C1A\u0C32\u0C47\u0C26\u0C41."), /*#__PURE__*/_react["default"].createElement("button", {
    className: "clear-filters-btn",
    onClick: function onClick() {
      setSearchQuery('');
      setActiveCategory('all');
    }
  }, "\u0C05\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C26\u0C3E\u0C32\u0C28\u0C41 \u0C1A\u0C42\u0C2A\u0C3F\u0C02\u0C1A\u0C41 (Show All)")), spotlightItem && !writingItem && /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-modal-overlay",
    onClick: function onClick() {
      return setSpotlightItem(null);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "spotlight-modal-card",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close-btn",
    onClick: function onClick() {
      return setSpotlightItem(null);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.X, {
    size: 20
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-illustration-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
    name: spotlightItem.svgKey,
    size: 160
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-info-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modal-telugu-title"
  }, spotlightItem.telugu), /*#__PURE__*/_react["default"].createElement("p", {
    className: "modal-translit-text"
  }, spotlightItem.translit), /*#__PURE__*/_react["default"].createElement("p", {
    className: "modal-english-text"
  }, spotlightItem.english), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-audio-btn",
    onClick: function onClick() {
      return _audioUtils.audioService.speak(spotlightItem.telugu, spotlightItem.translit);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F (Listen)")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-write-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      setWritingItem(spotlightItem);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Pencil, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C30\u0C3E\u0C2F\u0C21\u0C02 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F (How to Write)")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-letter-btn",
    onClick: function onClick() {
      setSpotlightItem(null);
      if (onSelectLetterByChar) onSelectLetterByChar(spotlightItem.letter);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\"", spotlightItem.letter, "\" \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F"), /*#__PURE__*/_react["default"].createElement(_Icons.ArrowRight, {
    size: 18
  })))))), writingItem && /*#__PURE__*/_react["default"].createElement(_HowToWriteModal.HowToWriteModal, {
    word: writingItem.telugu,
    translit: writingItem.translit,
    meaning: writingItem.english,
    letter: writingItem.letter,
    onClose: function onClose() {
      return setWritingItem(null);
    }
  }));
};
var _default = exports["default"] = VocabularyPage;
  });

  define("src/components/QuizCard.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.QuizCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _Illustration = require("./illustrations/Illustration");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var QuizCard = exports.QuizCard = function QuizCard(_ref) {
  var question = _ref.question,
    selectedAnswer = _ref.selectedAnswer,
    onSelectAnswer = _ref.onSelectAnswer,
    onNextQuestion = _ref.onNextQuestion,
    isLastQuestion = _ref.isLastQuestion;
  var hasAnswered = selectedAnswer !== null;

  // For audio mode: auto-play question audio on mount or question change
  (0, _react.useEffect)(function () {
    if (question.type === 'mode_d') {
      _audioUtils.audioService.speak(question.audioText);
    }
  }, [question.id, question.type, question.audioText]);
  var handleOptionClick = function handleOptionClick(option) {
    if (hasAnswered) return;
    onSelectAnswer(option);
  };
  var handleReplayAudio = function handleReplayAudio() {
    _audioUtils.audioService.playClick();
    _audioUtils.audioService.speak(question.audioText);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-card-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-question-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "quiz-question-title"
  }, question.promptTe), /*#__PURE__*/_react["default"].createElement("p", {
    className: "quiz-question-sub"
  }, question.promptEn)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-stimulus-box"
  }, question.type === 'mode_a' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "stimulus-picture"
  }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
    name: question.svgKey,
    size: 150
  })), question.type === 'mode_b' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "stimulus-letter-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "stimulus-char"
  }, question["char"]), /*#__PURE__*/_react["default"].createElement("button", {
    className: "stimulus-audio-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playLetterSelect();
      _audioUtils.audioService.speak(question["char"]);
    },
    title: "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 22
  }))), question.type === 'mode_c' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "stimulus-word-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "stimulus-word-text"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-large"
  }, question.wordTe), /*#__PURE__*/_react["default"].createElement("span", {
    className: "word-meaning-sub"
  }, "(", question.wordEn, ")")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "stimulus-audio-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      _audioUtils.audioService.speak(question.wordTe);
    },
    title: "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 22
  }))), question.type === 'mode_d' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "stimulus-audio-card"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "big-listen-btn",
    onClick: handleReplayAudio
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 36
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C35\u0C3F\u0C28\u0C02\u0C21\u0C3F (Listen Again)")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "audio-hint-text"
  }, "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C35\u0C3F\u0C28\u0C3F \u0C38\u0C30\u0C48\u0C28 \u0C38\u0C2E\u0C3E\u0C27\u0C3E\u0C28\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-options-grid ".concat(question.type === 'mode_c' ? 'image-options' : 'text-options')
  }, question.options.map(function (option, idx) {
    var btnStateClass = '';
    if (hasAnswered) {
      if (option.id === question.correctOptionId) {
        btnStateClass = 'correct-choice';
      } else if (option.id === selectedAnswer.id) {
        btnStateClass = 'wrong-choice';
      } else {
        btnStateClass = 'dimmed-choice';
      }
    }
    if (question.type === 'mode_c') {
      // Mode C: 4 Image Option Cards
      return /*#__PURE__*/_react["default"].createElement("button", {
        key: option.id,
        className: "option-image-card ".concat(btnStateClass),
        onClick: function onClick() {
          return handleOptionClick(option);
        },
        disabled: hasAnswered
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "option-image-preview"
      }, /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, {
        name: option.svgKey,
        size: 90
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "option-image-footer"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "option-label"
      }, String.fromCharCode(65 + idx), "."), /*#__PURE__*/_react["default"].createElement("span", {
        className: "option-text-name"
      }, option.text), hasAnswered && option.id === question.correctOptionId && /*#__PURE__*/_react["default"].createElement(_Icons.CheckCircle, {
        size: 20,
        className: "result-icon correct"
      }), hasAnswered && option.id === selectedAnswer.id && option.id !== question.correctOptionId && /*#__PURE__*/_react["default"].createElement(_Icons.XCircle, {
        size: 20,
        className: "result-icon wrong"
      })));
    }

    // Mode A, B, D: Text/Word/Letter Choice Buttons
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: option.id,
      className: "option-text-btn ".concat(btnStateClass),
      onClick: function onClick() {
        return handleOptionClick(option);
      },
      disabled: hasAnswered
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "option-bullet"
    }, String.fromCharCode(65 + idx)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "option-content"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "option-main-text"
    }, option.text), option.subtext && /*#__PURE__*/_react["default"].createElement("span", {
      className: "option-subtext"
    }, option.subtext)), hasAnswered && option.id === question.correctOptionId && /*#__PURE__*/_react["default"].createElement(_Icons.CheckCircle, {
      size: 22,
      className: "result-icon correct"
    }), hasAnswered && option.id === selectedAnswer.id && option.id !== question.correctOptionId && /*#__PURE__*/_react["default"].createElement(_Icons.XCircle, {
      size: 22,
      className: "result-icon wrong"
    }));
  })), hasAnswered && /*#__PURE__*/_react["default"].createElement("div", {
    className: "answer-feedback-banner ".concat(selectedAnswer.id === question.correctOptionId ? 'success' : 'correction')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "feedback-message"
  }, selectedAnswer.id === question.correctOptionId ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "feedback-content"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "feedback-title"
  }, "\uD83C\uDF89 \u0C05\u0C26\u0C4D\u0C2D\u0C41\u0C24\u0C02! (Correct Answer!)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "feedback-detail"
  }, question.explanation)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "feedback-content"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "feedback-title"
  }, "\u0C38\u0C30\u0C48\u0C28 \u0C38\u0C2E\u0C3E\u0C27\u0C3E\u0C28\u0C02 (Correction):"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "feedback-detail"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, question.correctAnswerDisplay), " \u2014 ", question.explanation))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "next-question-btn",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      onNextQuestion();
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, isLastQuestion ? 'ఫలితాలు చూడండి (View Results)' : 'తరువాతి ప్రశ్న (Next)'), /*#__PURE__*/_react["default"].createElement(_Icons.ArrowRight, {
    size: 20
  }))));
};
var _default = exports["default"] = QuizCard;
  });

  define("src/components/QuizResult.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.QuizResult = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var QuizResult = exports.QuizResult = function QuizResult(_ref) {
  var score = _ref.score,
    totalQuestions = _ref.totalQuestions,
    history = _ref.history,
    onRestart = _ref.onRestart,
    onReturnHome = _ref.onReturnHome;
  var percentage = Math.round(score / totalQuestions * 100);
  var incorrectCount = totalQuestions - score;
  (0, _react.useEffect)(function () {
    _audioUtils.audioService.playFanfare();

    // Trigger colorful confetti burst if score is good (>= 60%)
    if (percentage >= 60) {
      try {
        if (typeof window !== 'undefined' && window.confetti) {
          window.confetti({
            particleCount: 100,
            spread: 70,
            origin: {
              y: 0.6
            }
          });
        }
      } catch (e) {}
    }
  }, [percentage]);
  var praiseTitle = 'చాలా బాగా చేశారు! (Well Done!)';
  var praiseSub = 'మీరు తెలుగును ఎంతో ఉత్సాహంగా నేర్చుకుంటున్నారు!';
  var badgeColor = '#20BF6B';
  if (percentage === 100) {
    praiseTitle = 'అద్భుతం! శభాష్! (Perfect Score!)';
    praiseSub = 'మీరు అన్ని సమాధానాలను సరిగ్గా చెప్పారు!';
    badgeColor = '#F1C40F';
  } else if (percentage < 60) {
    praiseTitle = 'మంచి ప్రయత్నం! (Good Effort!)';
    praiseSub = 'మరొకసారి సాధన చేస్తే ఇంకా మంచి మార్కులు వస్తాయి!';
    badgeColor = '#FA8231';
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-result-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-card-main"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-badge-icon",
    style: {
      backgroundColor: badgeColor + '20',
      color: badgeColor
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Award, {
    size: 48
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "result-praise-title"
  }, praiseTitle), /*#__PURE__*/_react["default"].createElement("p", {
    className: "result-praise-sub"
  }, praiseSub), /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-score-circle"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "result-score-num"
  }, score), /*#__PURE__*/_react["default"].createElement("span", {
    className: "result-score-divider"
  }, "/"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "result-score-total"
  }, totalQuestions), /*#__PURE__*/_react["default"].createElement("span", {
    className: "result-score-pct"
  }, percentage, "%")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-stats-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-stat-chip correct"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.CheckCircle, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C38\u0C30\u0C48\u0C28\u0C35\u0C3F (Correct): ", /*#__PURE__*/_react["default"].createElement("strong", null, score))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-stat-chip incorrect"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.XCircle, {
    size: 18
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C24\u0C2A\u0C4D\u0C2A\u0C41\u0C32\u0C41 (Mistakes): ", /*#__PURE__*/_react["default"].createElement("strong", null, incorrectCount)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-actions-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "result-action-btn primary",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      onRestart();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.RotateCcw, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C15\u0C4D\u0C35\u0C3F\u0C1C\u0C4D \u0C30\u0C3E\u0C2F\u0C02\u0C21\u0C3F (Restart Quiz)")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "result-action-btn secondary",
    onClick: function onClick() {
      _audioUtils.audioService.playClick();
      onReturnHome();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Home, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C39\u0C4B\u0C2E\u0C4D \u0C2A\u0C47\u0C1C\u0C40\u0C15\u0C3F \u0C35\u0C46\u0C33\u0C4D\u0C32\u0C02\u0C21\u0C3F (Return Home)")))), history && history.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "result-review-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "review-title"
  }, "\u0C2A\u0C4D\u0C30\u0C36\u0C4D\u0C28\u0C32 \u0C38\u0C2E\u0C40\u0C15\u0C4D\u0C37 (Questions Review):"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "review-items-list"
  }, history.map(function (h, i) {
    var isCorrect = h.selectedOptionId === h.question.correctOptionId;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "review-item-card ".concat(isCorrect ? 'pass' : 'fail')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "review-icon-col"
    }, isCorrect ? /*#__PURE__*/_react["default"].createElement(_Icons.CheckCircle, {
      size: 22,
      className: "pass-icon"
    }) : /*#__PURE__*/_react["default"].createElement(_Icons.XCircle, {
      size: 22,
      className: "fail-icon"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "review-details-col"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "review-prompt"
    }, h.question.promptTe, " (", h.question.promptEn, ")"), /*#__PURE__*/_react["default"].createElement("p", {
      className: "review-ans-row"
    }, "\u0C2E\u0C40 \u0C38\u0C2E\u0C3E\u0C27\u0C3E\u0C28\u0C02: ", /*#__PURE__*/_react["default"].createElement("span", {
      className: isCorrect ? 'ans-correct' : 'ans-wrong'
    }, h.selectedOptionText)), !isCorrect && /*#__PURE__*/_react["default"].createElement("p", {
      className: "review-ans-correct"
    }, "\u0C38\u0C30\u0C48\u0C28 \u0C38\u0C2E\u0C3E\u0C27\u0C3E\u0C28\u0C02: ", /*#__PURE__*/_react["default"].createElement("strong", null, h.question.correctAnswerDisplay))));
  }))));
};
var _default = exports["default"] = QuizResult;
  });

  define("src/components/QuizPage.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.QuizPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _teluguData = require("../data/teluguData");
var _QuizCard = require("./QuizCard");
var _QuizResult = require("./QuizResult");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Helper to shuffle an array (Fisher-Yates)
function shuffleArray(arr) {
  var a = _toConsumableArray(arr);
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  return a;
}

// Generate Questions dynamically
function generateQuestions() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var generated = [];
  var modes = ['mode_a', 'mode_b', 'mode_c', 'mode_d'];

  // Pool of letters and vocabulary items
  var letterPool = shuffleArray(_teluguData.TELUGU_LETTERS);
  var vocabPool = shuffleArray(_teluguData.VOCABULARY_ITEMS);
  var _loop = function _loop() {
    // Choose mode
    var qMode = mode;
    if (mode === 'all') {
      qMode = modes[i % modes.length];
    }
    if (qMode === 'mode_a') {
      // Mode A: Identify Picture to Telugu word
      // Target item from vocabulary or letters
      var target = vocabPool[i % vocabPool.length];
      // 3 wrong distractors
      var distractors = vocabPool.filter(function (v) {
        return v.id !== target.id;
      }).sort(function () {
        return 0.5 - Math.random();
      }).slice(0, 3);
      var options = shuffleArray([{
        id: target.id,
        text: target.telugu,
        subtext: target.english
      }].concat(_toConsumableArray(distractors.map(function (d) {
        return {
          id: d.id,
          text: d.telugu,
          subtext: d.english
        };
      }))));
      generated.push({
        id: "qa_".concat(i, "_").concat(target.id),
        type: 'mode_a',
        promptTe: 'ఈ చిత్రానికి సరైన తెలుగు పదం ఏది?',
        promptEn: 'Which is the correct Telugu word for this picture?',
        svgKey: target.svgKey,
        correctOptionId: target.id,
        correctAnswerDisplay: target.telugu,
        explanation: "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C02\u0C32\u0C4B \u0C09\u0C28\u0C4D\u0C28\u0C26\u0C3F ".concat(target.telugu, " (").concat(target.english, ")."),
        options: options
      });
    } else if (qMode === 'mode_b') {
      // Mode B: Identify the Letter
      var targetLetter = letterPool[i % letterPool.length];
      var _distractors = letterPool.filter(function (l) {
        return l.id !== targetLetter.id;
      }).sort(function () {
        return 0.5 - Math.random();
      }).slice(0, 3);

      // Either ask for word association or transliteration
      var isWordType = i % 2 === 0;
      if (isWordType) {
        var _options = shuffleArray([{
          id: targetLetter.id,
          text: targetLetter.word,
          subtext: targetLetter.meaning
        }].concat(_toConsumableArray(_distractors.map(function (d) {
          return {
            id: d.id,
            text: d.word,
            subtext: d.meaning
          };
        }))));
        generated.push({
          id: "qb_".concat(i, "_").concat(targetLetter.id),
          type: 'mode_b',
          promptTe: "\"".concat(targetLetter["char"], "\" \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02\u0C24\u0C4B \u0C2E\u0C4A\u0C26\u0C32\u0C2F\u0C4D\u0C2F\u0C47 \u0C2A\u0C26\u0C02 \u0C0F\u0C26\u0C3F?"),
          promptEn: "Which word begins with the letter \"".concat(targetLetter["char"], "\"?"),
          "char": targetLetter["char"],
          correctOptionId: targetLetter.id,
          correctAnswerDisplay: targetLetter.word,
          explanation: "\"".concat(targetLetter["char"], "\" \u0C24\u0C4B \u0C2E\u0C4A\u0C26\u0C32\u0C2F\u0C4D\u0C2F\u0C47 \u0C38\u0C30\u0C48\u0C28 \u0C2A\u0C26\u0C02: ").concat(targetLetter.word, " (").concat(targetLetter.meaning, ")."),
          options: _options
        });
      } else {
        var _options2 = shuffleArray([{
          id: targetLetter.id,
          text: targetLetter.translit,
          subtext: targetLetter.ipa
        }].concat(_toConsumableArray(_distractors.map(function (d) {
          return {
            id: d.id,
            text: d.translit,
            subtext: d.ipa
          };
        }))));
        generated.push({
          id: "qb_".concat(i, "_").concat(targetLetter.id),
          type: 'mode_b',
          promptTe: "\u0C08 \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C02 \u0C2F\u0C4A\u0C15\u0C4D\u0C15 \u0C38\u0C30\u0C48\u0C28 \u0C09\u0C1A\u0C4D\u0C1A\u0C3E\u0C30\u0C23 (Pronunciation) \u0C0F\u0C26\u0C3F?",
          promptEn: "What is the correct pronunciation of \"".concat(targetLetter["char"], "\"?"),
          "char": targetLetter["char"],
          correctOptionId: targetLetter.id,
          correctAnswerDisplay: targetLetter.translit,
          explanation: "\"".concat(targetLetter["char"], "\" \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \"").concat(targetLetter.translit, "\" (").concat(targetLetter.ipa, ") \u0C05\u0C28\u0C3F \u0C2A\u0C32\u0C41\u0C15\u0C41\u0C24\u0C3E\u0C30\u0C41."),
          options: _options2
        });
      }
    } else if (qMode === 'mode_c') {
      // Mode C: Show Telugu word, select matching picture from 4 image cards
      var _target = vocabPool[i % vocabPool.length];
      var _distractors2 = vocabPool.filter(function (v) {
        return v.id !== _target.id;
      }).sort(function () {
        return 0.5 - Math.random();
      }).slice(0, 3);
      var _options3 = shuffleArray([{
        id: _target.id,
        text: _target.english,
        svgKey: _target.svgKey
      }].concat(_toConsumableArray(_distractors2.map(function (d) {
        return {
          id: d.id,
          text: d.english,
          svgKey: d.svgKey
        };
      }))));
      generated.push({
        id: "qc_".concat(i, "_").concat(_target.id),
        type: 'mode_c',
        promptTe: "\"".concat(_target.telugu, "\" \u0C2A\u0C26\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C38\u0C30\u0C48\u0C28 \u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F"),
        promptEn: "Select the correct picture for \"".concat(_target.telugu, "\" (").concat(_target.english, ")"),
        wordTe: _target.telugu,
        wordEn: _target.english,
        correctOptionId: _target.id,
        correctAnswerDisplay: _target.english,
        explanation: "\"".concat(_target.telugu, "\" \u0C05\u0C02\u0C1F\u0C47 \u0C07\u0C02\u0C17\u0C4D\u0C32\u0C40\u0C37\u0C41\u0C32\u0C4B \"").concat(_target.english, "\"."),
        options: _options3
      });
    } else {
      // Mode D: Listen and Identify
      var _target2 = letterPool[i % letterPool.length];
      var _distractors3 = letterPool.filter(function (l) {
        return l.id !== _target2.id;
      }).sort(function () {
        return 0.5 - Math.random();
      }).slice(0, 3);
      var _options4 = shuffleArray([{
        id: _target2.id,
        text: _target2["char"],
        subtext: _target2.translit
      }].concat(_toConsumableArray(_distractors3.map(function (d) {
        return {
          id: d.id,
          text: d["char"],
          subtext: d.translit
        };
      }))));
      generated.push({
        id: "qd_".concat(i, "_").concat(_target2.id),
        type: 'mode_d',
        promptTe: 'ధ్వని విని సరైన తెలుగు అక్షరాన్ని గుర్తించండి',
        promptEn: 'Listen to the audio and pick the matching Telugu character',
        audioText: _target2["char"],
        correctOptionId: _target2.id,
        correctAnswerDisplay: "".concat(_target2["char"], " (").concat(_target2.translit, ")"),
        explanation: "\u0C35\u0C3F\u0C28\u0C3F\u0C2A\u0C3F\u0C02\u0C1A\u0C3F\u0C28 \u0C27\u0C4D\u0C35\u0C28\u0C3F: \"".concat(_target2["char"], "\" (").concat(_target2.translit, ")."),
        options: _options4
      });
    }
  };
  for (var i = 0; i < count; i++) {
    _loop();
  }
  return generated;
}
var QuizPage = exports.QuizPage = function QuizPage(_ref2) {
  var onReturnHome = _ref2.onReturnHome;
  var _useState = (0, _react.useState)('config'),
    _useState2 = _slicedToArray(_useState, 2),
    quizState = _useState2[0],
    setQuizState = _useState2[1]; // 'config' | 'active' | 'result'
  var _useState3 = (0, _react.useState)('all'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedMode = _useState4[0],
    setSelectedMode = _useState4[1];
  var _useState5 = (0, _react.useState)(5),
    _useState6 = _slicedToArray(_useState5, 2),
    questionCount = _useState6[0],
    setQuestionCount = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    questions = _useState8[0],
    setQuestions = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    currentIndex = _useState10[0],
    setCurrentIndex = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedAnswer = _useState12[0],
    setSelectedAnswer = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    score = _useState14[0],
    setScore = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    history = _useState16[0],
    setHistory = _useState16[1];
  (0, _react.useEffect)(function () {
    if (window.location.hash.includes('quiz-start')) {
      handleStartQuiz();
    }
  }, []);
  var modesList = [{
    id: 'all',
    title: 'అన్నీ కలిపి (Mixed Quiz)',
    desc: 'నాలుగు పద్ధతుల్లో రకరకాల ప్రశ్నలు'
  }, {
    id: 'mode_a',
    title: 'Mode A: చిత్రాన్ని గుర్తించండి',
    desc: 'చిత్రాన్ని చూసి సరైన తెలుగు పదం ఎంచుకోండి'
  }, {
    id: 'mode_b',
    title: 'Mode B: అక్షరాన్ని గుర్తించండి',
    desc: 'అక్షరాన్ని చూసి ఉచ్చారణ లేదా పదాన్ని గుర్తించండి'
  }, {
    id: 'mode_c',
    title: 'Mode C: సరైన చిత్రం ఎంచుకోండి',
    desc: 'తెలుగు పదం చూసి సరైన చిత్రాన్ని ఎంచుకోండి'
  }, {
    id: 'mode_d',
    title: 'Mode D: విని గుర్తించండి (Audio)',
    desc: 'ధ్వని విని సరైన అక్షరం లేదా పదాన్ని గుర్తించండి'
  }];
  var handleStartQuiz = function handleStartQuiz() {
    _audioUtils.audioService.playClick();
    var newQuestions = generateQuestions(selectedMode, questionCount);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setHistory([]);
    setQuizState('active');
  };
  var handleSelectAnswer = function handleSelectAnswer(option) {
    var currentQ = questions[currentIndex];
    setSelectedAnswer(option);
    var isCorrect = option.id === currentQ.correctOptionId;
    if (isCorrect) {
      setScore(function (prev) {
        return prev + 1;
      });
      _audioUtils.audioService.playCorrect();
    } else {
      _audioUtils.audioService.playWrong();
    }
    setHistory(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        question: currentQ,
        selectedOptionId: option.id,
        selectedOptionText: option.text
      }]);
    });
  };
  var handleNextQuestion = function handleNextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(function (prev) {
        return prev + 1;
      });
      setSelectedAnswer(null);
    } else {
      setQuizState('result');
    }
  };
  var handleRestart = function handleRestart() {
    handleStartQuiz();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-page-wrapper"
  }, quizState === 'config' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-config-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "config-banner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-badge"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Award, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C15\u0C4D\u0C35\u0C3F\u0C1C\u0C4D \u0C38\u0C2E\u0C2F\u0C02")), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "config-title"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C15\u0C4D\u0C35\u0C3F\u0C1C\u0C4D (Telugu Quiz)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "config-subtitle"
  }, "Test your Telugu knowledge with fun interactive quizzes, sounds, and instant feedback!")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "config-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "section-label"
  }, "1. \u0C15\u0C4D\u0C35\u0C3F\u0C1C\u0C4D \u0C30\u0C15\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F (Select Quiz Mode):"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mode-options-grid"
  }, modesList.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: m.id,
      className: "mode-select-btn ".concat(selectedMode === m.id ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setSelectedMode(m.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "mode-title"
    }, m.title), /*#__PURE__*/_react["default"].createElement("span", {
      className: "mode-desc"
    }, m.desc));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "config-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "section-label"
  }, "2. \u0C2A\u0C4D\u0C30\u0C36\u0C4D\u0C28\u0C32 \u0C38\u0C02\u0C16\u0C4D\u0C2F (Question Count):"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "count-selector-row"
  }, [5, 10, 20].map(function (cnt) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: cnt,
      className: "count-pill-btn ".concat(questionCount === cnt ? 'active' : ''),
      onClick: function onClick() {
        _audioUtils.audioService.playClick();
        setQuestionCount(cnt);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, cnt, " \u0C2A\u0C4D\u0C30\u0C36\u0C4D\u0C28\u0C32\u0C41"));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "config-submit-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "start-quiz-btn",
    onClick: handleStartQuiz
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Play, {
    size: 22,
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u0C15\u0C4D\u0C35\u0C3F\u0C1C\u0C4D \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F (Start Quiz)")))), quizState === 'active' && questions.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-active-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-progress-bar-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "quiz-progress-info"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "q-number"
  }, "\u0C2A\u0C4D\u0C30\u0C36\u0C4D\u0C28 ", /*#__PURE__*/_react["default"].createElement("strong", null, currentIndex + 1), " / ", questions.length), /*#__PURE__*/_react["default"].createElement("span", {
    className: "live-score"
  }, "\u0C38\u0C4D\u0C15\u0C4B\u0C30\u0C41: ", /*#__PURE__*/_react["default"].createElement("strong", null, score))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-track"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-fill",
    style: {
      width: "".concat((currentIndex + (selectedAnswer ? 1 : 0)) / questions.length * 100, "%")
    }
  }))), /*#__PURE__*/_react["default"].createElement(_QuizCard.QuizCard, {
    question: questions[currentIndex],
    selectedAnswer: selectedAnswer,
    onSelectAnswer: handleSelectAnswer,
    onNextQuestion: handleNextQuestion,
    isLastQuestion: currentIndex === questions.length - 1
  })), quizState === 'result' && /*#__PURE__*/_react["default"].createElement(_QuizResult.QuizResult, {
    score: score,
    totalQuestions: questions.length,
    history: history,
    onRestart: handleRestart,
    onReturnHome: onReturnHome
  }));
};
var _default = exports["default"] = QuizPage;
  });

  define("src/components/Navbar.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Navbar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./Icons");
var _audioUtils = require("../utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Navbar = exports.Navbar = function Navbar(_ref) {
  var activeTab = _ref.activeTab,
    onSelectTab = _ref.onSelectTab;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mobileMenuOpen = _useState2[0],
    setMobileMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    soundOn = _useState4[0],
    setSoundOn = _useState4[1];
  var navItems = [{
    id: 'alphabet',
    label: 'అక్షరమాల (Alphabet)',
    icon: _Icons.BookOpen
  }, {
    id: 'guninthalu',
    label: 'గుణింతాలు (Guninthalu)',
    icon: _Icons.Layers
  }, {
    id: 'vocabulary',
    label: 'పదాలు (Words & Pictures)',
    icon: _Icons.Image
  }, {
    id: 'quiz',
    label: 'క్విజ్ (Quiz)',
    icon: _Icons.Award
  }];
  var toggleSound = function toggleSound() {
    var nextState = !soundOn;
    setSoundOn(nextState);
    _audioUtils.audioService.soundFxEnabled = nextState;
    _audioUtils.audioService.speechEnabled = nextState;
    if (nextState) {
      _audioUtils.audioService.playClick();
    }
  };
  var handleTabClick = function handleTabClick(id) {
    _audioUtils.audioService.playClick();
    onSelectTab(id);
    setMobileMenuOpen(false);
  };
  var _useState5 = (0, _react.useState)(_audioUtils.audioService.isSlow),
    _useState6 = _slicedToArray(_useState5, 2),
    isSlow = _useState6[0],
    setIsSlow = _useState6[1];
  _react["default"].useEffect(function () {
    return _audioUtils.audioService.addListener(function () {
      setIsSlow(_audioUtils.audioService.isSlow);
    });
  }, []);
  var handleToggleSpeed = function handleToggleSpeed() {
    _audioUtils.audioService.playClick();
    var nextSlow = _audioUtils.audioService.toggleSpeed();
    setIsSlow(nextSlow);
    // Give a clear audio demonstration of the new speed
    if (nextSlow) {
      _audioUtils.audioService.speak("నిదానంగా", "Nidaanamgaa");
    } else {
      _audioUtils.audioService.speak("సాధారణం", "Saadhaaranam");
    }
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "site-navbar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar-brand",
    onClick: function onClick() {
      return handleTabClick('alphabet');
    },
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "brand-logo-badge"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "brand-telugu-char"
  }, "\u0C05")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "brand-titles"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "brand-main"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "brand-sub"
  }, "Let's Learn Telugu"))), /*#__PURE__*/_react["default"].createElement("nav", {
    className: "desktop-nav-links"
  }, navItems.map(function (item) {
    var Icon = item.icon;
    var isActive = activeTab === item.id;
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: item.id,
      className: "nav-link-btn ".concat(isActive ? 'active' : ''),
      onClick: function onClick() {
        return handleTabClick(item.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      size: 18,
      className: "nav-btn-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.label));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar-right-controls"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "speed-toggle-pill ".concat(isSlow ? 'slow-mode' : 'normal-mode'),
    onClick: handleToggleSpeed,
    title: isSlow ? "ప్రస్తుతం నిదానంగా ఉంది (Click for normal speed)" : "ప్రస్తుతం సాధారణ వేగం (Click for slow/clear voice for kids)",
    "aria-label": "Toggle Voice Speed"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "speed-icon"
  }, isSlow ? "🐢" : "🐰"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "speed-label"
  }, isSlow ? "నిదానంగా" : "సాధారణం")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "audio-toggle-btn ".concat(soundOn ? 'sound-active' : 'sound-muted'),
    onClick: toggleSound,
    title: soundOn ? 'మ్యూట్ చేయి (Mute Audio)' : 'శబ్దం ఆన్ చేయి (Unmute Audio)',
    "aria-label": "Toggle Sound"
  }, soundOn ? /*#__PURE__*/_react["default"].createElement(_Icons.Volume2, {
    size: 20
  }) : /*#__PURE__*/_react["default"].createElement(_Icons.VolumeX, {
    size: 20
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "audio-toggle-label"
  }, soundOn ? 'శబ్దం' : 'మ్యూట్')), /*#__PURE__*/_react["default"].createElement("button", {
    className: "mobile-menu-btn",
    onClick: function onClick() {
      return setMobileMenuOpen(!mobileMenuOpen);
    },
    "aria-label": "Toggle Navigation Menu"
  }, mobileMenuOpen ? /*#__PURE__*/_react["default"].createElement(_Icons.X, {
    size: 24
  }) : /*#__PURE__*/_react["default"].createElement(_Icons.Menu, {
    size: 24
  })))), mobileMenuOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-nav-drawer"
  }, navItems.map(function (item) {
    var Icon = item.icon;
    var isActive = activeTab === item.id;
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: item.id,
      className: "mobile-nav-link ".concat(isActive ? 'active' : ''),
      onClick: function onClick() {
        return handleTabClick(item.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      size: 20
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.label));
  })));
};
var _default = exports["default"] = Navbar;
  });

  define("src/App.jsx", function(module, exports, require) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _teluguData = require("./data/teluguData");
var _Navbar = require("./components/Navbar");
var _AlphabetGrid = require("./components/AlphabetGrid");
var _LetterDetail = require("./components/LetterDetail");
var _WordDetailPage = require("./components/WordDetailPage");
var _GuninthaluPage = require("./components/GuninthaluPage");
var _VocabularyPage = require("./components/VocabularyPage");
var _QuizPage = require("./components/QuizPage");
var _audioUtils = require("./utils/audioUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App() {
  var _useState = (0, _react.useState)('alphabet'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1]; // 'alphabet' | 'guninthalu' | 'vocabulary' | 'quiz'
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedLetter = _useState4[0],
    setSelectedLetter = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedWord = _useState6[0],
    setSelectedWord = _useState6[1];

  // Sync with window.location.hash on mount and change
  _react["default"].useEffect(function () {
    var handleHash = function handleHash() {
      var hash = window.location.hash.replace('#', '');

      // Word detail page hash route
      if (hash.startsWith('word/')) {
        var rawWord = decodeURIComponent(hash.replace('word/', ''));
        // Find in TELUGU_LETTERS
        var foundLetter = _teluguData.TELUGU_LETTERS.find(function (l) {
          return l.word === rawWord || l.id === rawWord;
        });
        if (foundLetter) {
          setSelectedWord({
            word: foundLetter.word,
            translit: foundLetter.wordTranslit,
            meaning: foundLetter.meaning,
            letter: foundLetter["char"],
            explanation: foundLetter.explanation,
            svgKey: foundLetter.svgKey,
            accentColor: foundLetter.accentColor
          });
          return;
        }
        // Find in VOCABULARY_ITEMS
        var foundVocab = _teluguData.VOCABULARY_ITEMS.find(function (v) {
          return v.telugu === rawWord || v.id === rawWord;
        });
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
        var letterId = hash.replace('letter/', '').replace('/trace', '');
        var found = _teluguData.TELUGU_LETTERS.find(function (l) {
          return l.id === letterId;
        });
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
    return function () {
      return window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  // Switch tab and clear active details
  var handleSelectTab = function handleSelectTab(tab) {
    setActiveTab(tab);
    setSelectedLetter(null);
    setSelectedWord(null);
    window.location.hash = tab;
  };

  // Open dedicated letter learning view
  var handleSelectLetter = function handleSelectLetter(letter) {
    setSelectedLetter(letter);
    setSelectedWord(null);
    window.location.hash = "letter/".concat(letter.id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Open dedicated word learning page
  var handleSelectWord = function handleSelectWord(wordData) {
    setSelectedWord(wordData);
    window.location.hash = "word/".concat(encodeURIComponent(wordData.word));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Select letter by character string (e.g. from vocabulary tag)
  var handleSelectLetterByChar = function handleSelectLetterByChar(_char) {
    var found = _teluguData.TELUGU_LETTERS.find(function (l) {
      return l["char"] === _char;
    });
    if (found) {
      handleSelectLetter(found);
    }
  };

  // Return from word page
  var handleBackFromWord = function handleBackFromWord() {
    _audioUtils.audioService.playClick();
    setSelectedWord(null);
    if (selectedLetter) {
      window.location.hash = "letter/".concat(selectedLetter.id);
    } else {
      window.location.hash = activeTab;
    }
  };

  // Return to alphabet grid
  var handleBackToGrid = function handleBackToGrid() {
    _audioUtils.audioService.playClick();
    setSelectedLetter(null);
    setSelectedWord(null);
    window.location.hash = 'alphabet';
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-layout"
  }, /*#__PURE__*/_react["default"].createElement(_Navbar.Navbar, {
    activeTab: activeTab,
    onSelectTab: handleSelectTab
  }), /*#__PURE__*/_react["default"].createElement("main", {
    className: "main-content-container"
  }, selectedWord ? /*#__PURE__*/_react["default"].createElement(_WordDetailPage.WordDetailPage, {
    wordData: selectedWord,
    onBack: handleBackFromWord,
    onSelectWord: handleSelectWord,
    onSelectLetter: handleSelectLetterByChar
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, activeTab === 'alphabet' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, selectedLetter ? /*#__PURE__*/_react["default"].createElement(_LetterDetail.LetterDetail, {
    letter: selectedLetter,
    allLetters: _teluguData.TELUGU_LETTERS,
    onBack: handleBackToGrid,
    onSelectLetter: handleSelectLetter,
    onOpenWordPage: handleSelectWord
  }) : /*#__PURE__*/_react["default"].createElement(_AlphabetGrid.AlphabetGrid, {
    letters: _teluguData.TELUGU_LETTERS,
    onSelectLetter: handleSelectLetter,
    onOpenWordPage: handleSelectWord
  })), activeTab === 'guninthalu' && /*#__PURE__*/_react["default"].createElement(_GuninthaluPage.GuninthaluPage, null), activeTab === 'vocabulary' && /*#__PURE__*/_react["default"].createElement(_VocabularyPage.VocabularyPage, {
    onSelectLetterByChar: handleSelectLetterByChar,
    onOpenWordPage: handleSelectWord
  }), activeTab === 'quiz' && /*#__PURE__*/_react["default"].createElement(_QuizPage.QuizPage, {
    onReturnHome: function onReturnHome() {
      return handleSelectTab('alphabet');
    }
  }))), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "footer-title"
  }, "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C26\u0C3E\u0C02 \u2014 \u0C2A\u0C3F\u0C32\u0C4D\u0C32\u0C32 \u0C15\u0C4B\u0C38\u0C02 \u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C07\u0C02\u0C1F\u0C30\u0C3E\u0C15\u0C4D\u0C1F\u0C3F\u0C35\u0C4D \u0C32\u0C46\u0C30\u0C4D\u0C28\u0C3F\u0C02\u0C17\u0C4D \u0C2F\u0C3E\u0C2A\u0C4D"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "footer-sub"
  }, "Designed with \u2764\uFE0F for Telugu learners worldwide \u2022 \u0C35\u0C30\u0C4D\u0C23\u0C2E\u0C3E\u0C32, \u0C17\u0C41\u0C23\u0C3F\u0C02\u0C24\u0C3E\u0C32\u0C41, \u0C2A\u0C26\u0C3E\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C15\u0C4D\u0C35\u0C3F\u0C1C\u0C4D\u200C\u0C32\u0C24\u0C4B \u0C38\u0C30\u0C26\u0C3E\u0C17\u0C3E \u0C28\u0C47\u0C30\u0C4D\u0C1A\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F"))));
}
var _default = exports["default"] = App;
  });

  define("src/main.jsx", function(module, exports, require) {
"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_client["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));
  });

  // Start app
  console.log('✨ Launching Telugu Learning App...');
  createRequire('root')('src/main.jsx');
})();
