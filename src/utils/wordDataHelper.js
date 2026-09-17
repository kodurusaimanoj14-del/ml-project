// Word Data Helper for Telugu Learning App
// Provides syllable breakdowns, stroke start/end guide coordinates, and related words

import { VOCABULARY_ITEMS, TELUGU_LETTERS } from '../data/teluguData';

// Accurate Stroke Start & End point coordinates (in 0-200 viewBox space)
// Used for displaying clear 🟢 START and 🛑 END visual guidance
export const STROKE_GUIDE_MAP = {
  "అ": {
    start: { x: 55, y: 80, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 155, y: 70, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమవైపు చిన్న సున్నాతో మొదలుపెట్టి, పైకి తిప్పి కుడివైపు తలకట్టుతో ముగించండి."
  },
  "ఆ": {
    start: { x: 55, y: 80, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 165, y: 80, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "'అ' లాగే రాస్తూ కుడివైపు కొమ్ము లేదా దీర్ఘాన్ని పొడవుగా లాగండి."
  },
  "ఇ": {
    start: { x: 65, y: 70, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 150, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "పై వంపు నుండి మొదలుపెట్టి, కిందకి చుట్టి కుడివైపు ముగించండి."
  },
  "ఈ": {
    start: { x: 75, y: 95, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 155, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "మధ్యలోని సున్నాతో మొదలుపెట్టి, చుట్టూ తిప్పుతూ పై తలకట్టుతో ముగించండి."
  },
  "ఉ": {
    start: { x: 60, y: 75, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 155, y: 135, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమ పైభాగం నుండి గుండ్రంగా తిప్పుతూ కుడివైపు కొమ్ముతో ముగించండి."
  },
  "ఊ": {
    start: { x: 60, y: 75, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 165, y: 125, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "'ఉ' లాగే రాసి, చివరన దీర్ఘం గీతను పైకి లాగండి."
  },
  "ఋ": {
    start: { x: 55, y: 85, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 160, y: 135, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమ వంపు నుండి మొదలుపెట్టి మూడు మెలికలు చుడుతూ కింద ముగించండి."
  },
  "ఎ": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 70, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "కింది చిన్న సున్నాతో మొదలుపెట్టి పైకి వంపు తిప్పండి."
  },
  "ఏ": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 155, y: 60, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "'ఎ' లాగే రాసి పైభాగంలో నిలువు గీత (దీర్ఘం) పెట్టండి."
  },
  "ఐ": {
    start: { x: 65, y: 110, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 150, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "'ఎ' రాసి కింద ఐత్వపు గుర్తును జోడించండి."
  },
  "ఒ": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 75, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "కింది సున్నాతో మొదలుపెట్టి పైకి వంపు తిప్పుతూ ముగించండి."
  },
  "ఓ": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 155, y: 60, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "'ఒ' లాగే రాసి పైకి తలకట్టు దీర్ఘం చేర్చండి."
  },
  "ఔ": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 160, y: 70, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "'ఒ' రాసి పక్కన ఔత్వపు వంపును చేర్చండి."
  },
  "క": {
    start: { x: 65, y: 110, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమ సున్నా నుండి మొదలుపెట్టి, పైకి వెళ్లి తలకట్టు (✓) తో ముగించండి."
  },
  "గ": {
    start: { x: 60, y: 140, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "కింది వంపు నుండి పైకి వెళ్లి తలకట్టుతో ముగించండి."
  },
  "చ": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "చిన్న సున్నాతో మొదలుపెట్టి, చాపకట్టు తిప్పుతూ తలకట్టు పెట్టండి."
  },
  "జ": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 70, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "కింది సున్నాతో మొదలుపెట్టి పైకి కొమ్ము తిప్పండి."
  },
  "ట": {
    start: { x: 60, y: 90, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమ నుండి కుడికి గిన్నెలా రాసి పైన తలకట్టు పెట్టండి."
  },
  "డ": {
    start: { x: 65, y: 110, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎస్ (S) ఆకారంలో తిప్పుతూ పైన తలకట్టు చేర్చండి."
  },
  "త": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "సున్నాతో మొదలై, వంపు తిరిగి తలకట్టుతో ముగుస్తుంది."
  },
  "ద": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "కింది సున్నాతో మొదలుపెట్టి పైకి తలకట్టుతో ముగించండి."
  },
  "న": {
    start: { x: 60, y: 125, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమ సుడి నుండి మొదలుపెట్టి పైకి తలకట్టు చేర్చండి."
  },
  "ప": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "చిన్న సున్నాతో మొదలుపెట్టి, పైకి వెళ్లి తలకట్టు విడిగా పెట్టండి."
  },
  "బ": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "సున్నాతో మొదలుపెట్టి గుండ్రంగా పైకి తీసుకెళ్లి తలకట్టు పెట్టండి."
  },
  "మ": {
    start: { x: 70, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "చిన్న సున్నా కింద పెట్టి, పైకి తలకట్టు కలపండి."
  },
  "య": {
    start: { x: 65, y: 110, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "పెద్ద సున్నా చుట్టి, పక్కన తలకట్టు స్పర్శించకుండా పెట్టండి."
  },
  "ర": {
    start: { x: 100, y: 60, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 100, y: 60, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "పై నుండి ప్రారంభించి పరిపూర్ణమైన గుండ్రటి సున్నా చుట్టండి."
  },
  "ల": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "సున్నాతో మొదలై పైకి వెళ్లి తలకట్టుతో ముగుస్తుంది."
  },
  "వ": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 145, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "చిన్న సున్నాతో మొదలుపెట్టి పైన తలకట్టు కలపండి."
  },
  "స": {
    start: { x: 65, y: 120, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "సున్నాతో మొదలై పైన తలకట్టు చేర్చండి."
  },
  "హ": {
    start: { x: 65, y: 115, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "సున్నాతో మొదలై రెండు కొమ్ములు చేర్చి తలకట్టు పెట్టండి."
  }
};

// Default fallback for any character
export function getStrokePoints(char) {
  if (STROKE_GUIDE_MAP[char]) {
    return STROKE_GUIDE_MAP[char];
  }
  return {
    start: { x: 65, y: 110, label: "1. ఇక్కడ మొదలు (Start)" },
    end: { x: 150, y: 65, label: "2. ఇక్కడ ముగింపు (End)" },
    tip: "ఎడమవైపు నుండి ప్రారంభించి వంపు తిప్పుతూ కుడివైపు తలకట్టుతో ముగించండి."
  };
}

// Curated related words database for each primary letter
export const CURATED_RELATED_WORDS = {
  "అ": [
    { telugu: "అమ్మ", translit: "Amma", english: "Mother", svgKey: "mother" },
    { telugu: "అరటి", translit: "Arati", english: "Banana", svgKey: "banana" },
    { telugu: "అన్న", translit: "Anna", english: "Elder Brother", svgKey: "brother" },
    { telugu: "అక్క", translit: "Akka", english: "Elder Sister", svgKey: "sister" },
    { telugu: "అద్దం", translit: "Addam", english: "Mirror", svgKey: "mother" }
  ],
  "ఆ": [
    { telugu: "ఆవు", translit: "Aavu", english: "Cow", svgKey: "cow" },
    { telugu: "ఆపిల్", translit: "Aapil", english: "Apple", svgKey: "apple" },
    { telugu: "ఆకాశం", translit: "Aakaasham", english: "Sky", svgKey: "sky" },
    { telugu: "ఆకు", translit: "Aaku", english: "Leaf", svgKey: "tree" }
  ],
  "ఇ": [
    { telugu: "ఇల్లు", translit: "Illu", english: "House", svgKey: "house" },
    { telugu: "ఇటుక", translit: "Ituka", english: "Brick", svgKey: "house" },
    { telugu: "ఇనుము", translit: "Inumu", english: "Iron", svgKey: "lock" },
    { telugu: "ఇడ్లీ", translit: "Idli", english: "Idli (Food)", svgKey: "house" }
  ],
  "ఈ": [
    { telugu: "ఈగ", translit: "Eega", english: "Housefly", svgKey: "fly" },
    { telugu: "ఈత", translit: "Eetha", english: "Swimming", svgKey: "river" },
    { telugu: "ఈటె", translit: "Eete", english: "Spear", svgKey: "arrow" }
  ],
  "ఉ": [
    { telugu: "ఉడుత", translit: "Uduta", english: "Squirrel", svgKey: "squirrel" },
    { telugu: "ఉల్లిపాయ", translit: "Ullipaaya", english: "Onion", svgKey: "onion" },
    { telugu: "ఉంగరం", translit: "Ungaram", english: "Ring", svgKey: "lock" },
    { telugu: "ఉప్పు", translit: "Uppu", english: "Salt", svgKey: "household" }
  ],
  "ఊ": [
    { telugu: "ఊయల", translit: "Ooyala", english: "Swing", svgKey: "cradle" },
    { telugu: "ఊరు", translit: "Ooru", english: "Village / Town", svgKey: "house" },
    { telugu: "ఊడ", translit: "Ooda", english: "Banyan Root", svgKey: "tree" }
  ],
  "ఎ": [
    { telugu: "ఎలుక", translit: "Eluka", english: "Mouse / Rat", svgKey: "mouse" },
    { telugu: "ఎద్దు", translit: "Eddu", english: "Bull / Ox", svgKey: "cow" },
    { telugu: "ఎండ", translit: "Enda", english: "Sunlight", svgKey: "sun" }
  ],
  "ఏ": [
    { telugu: "ఏనుగు", translit: "Aenugu", english: "Elephant", svgKey: "elephant" },
    { telugu: "ఏరు", translit: "Aeru", english: "Stream / River", svgKey: "river" },
    { telugu: "ఏడు", translit: "Aedu", english: "Seven (7)", svgKey: "num7" }
  ],
  "ఒ": [
    { telugu: "ఒంటె", translit: "Onte", english: "Camel", svgKey: "camel" },
    { telugu: "ఒకటి", translit: "Okati", english: "One (1)", svgKey: "num1" },
    { telugu: "ఒడ్డు", translit: "Oddu", english: "Riverbank / Shore", svgKey: "river" }
  ],
  "ఓ": [
    { telugu: "ఓడ", translit: "Oada", english: "Ship / Boat", svgKey: "ship" },
    { telugu: "ఓటు", translit: "Oatu", english: "Vote", svgKey: "book" }
  ],
  "క": [
    { telugu: "కమలం", translit: "Kamalam", english: "Lotus", svgKey: "lotus" },
    { telugu: "కాకి", translit: "Kaaki", english: "Crow", svgKey: "crow" },
    { telugu: "కుక్క", translit: "Kukka", english: "Dog", svgKey: "dog" },
    { telugu: "కోతి", translit: "Koti", english: "Monkey", svgKey: "monkey" },
    { telugu: "కుర్చీ", translit: "Kurchi", english: "Chair", svgKey: "chair" }
  ],
  "గ": [
    { telugu: "గడియారం", translit: "Gadiyaaram", english: "Clock", svgKey: "clock" },
    { telugu: "గొడుగు", translit: "Godugu", english: "Umbrella", svgKey: "umbrella" },
    { telugu: "గుర్రం", translit: "Gurram", english: "Horse", svgKey: "horse" },
    { telugu: "గులాబీ", translit: "Gulaabi", english: "Rose", svgKey: "flower" }
  ],
  "చ": [
    { telugu: "చక్రం", translit: "Chakram", english: "Wheel", svgKey: "wheel" },
    { telugu: "చిలుక", translit: "Chiluka", english: "Parrot", svgKey: "parrot" },
    { telugu: "చెట్టు", translit: "Chettu", english: "Tree", svgKey: "tree" },
    { telugu: "చంద్రుడు", translit: "Chandrudu", english: "Moon", svgKey: "moon" }
  ],
  "జ": [
    { telugu: "జడ", translit: "Jada", english: "Hair Braid", svgKey: "braid" },
    { telugu: "జామ", translit: "Jaama", english: "Guava", svgKey: "guava" },
    { telugu: "జాజి", translit: "Jaaji", english: "Jasmine", svgKey: "flower" }
  ],
  "ట": [
    { telugu: "టమాటా", translit: "Tamaataa", english: "Tomato", svgKey: "tomato" },
    { telugu: "టపాకాయ", translit: "Tapaakaaya", english: "Firecracker", svgKey: "firecracker" }
  ],
  "త": [
    { telugu: "తల", translit: "Thala", english: "Head", svgKey: "head" },
    { telugu: "తాళం", translit: "Taalam", english: "Lock", svgKey: "lock" },
    { telugu: "తాబేలు", translit: "Taabelu", english: "Turtle", svgKey: "turtle" },
    { telugu: "తాతయ్య", translit: "Taatayya", english: "Grandfather", svgKey: "grandfather" }
  ],
  "ద": [
    { telugu: "దండ", translit: "Dhanda", english: "Garland", svgKey: "garland" },
    { telugu: "ద్రాక్ష", translit: "Draaksha", english: "Grapes", svgKey: "grapes" },
    { telugu: "దానిమ్మ", translit: "Danimma", english: "Pomegranate", svgKey: "pomegranate" },
    { telugu: "దీపం", translit: "Deepam", english: "Lamp", svgKey: "lamp" }
  ],
  "న": [
    { telugu: "నగ", translit: "Naga", english: "Jewelry", svgKey: "jewelry" },
    { telugu: "నక్క", translit: "Nakka", english: "Fox", svgKey: "fox" },
    { telugu: "నెమలి", translit: "Nemali", english: "Peacock", svgKey: "peacock" },
    { telugu: "నది", translit: "Nadi", english: "River", svgKey: "river" },
    { telugu: "నాన్న", translit: "Naanna", english: "Father", svgKey: "father" }
  ],
  "ప": [
    { telugu: "పలక", translit: "Palaka", english: "Slate", svgKey: "slate" },
    { telugu: "పిల్లి", translit: "Pilli", english: "Cat", svgKey: "cat" },
    { telugu: "పుస్తకం", translit: "Pusthakam", english: "Book", svgKey: "book" },
    { telugu: "పువ్వు", translit: "Puvvu", english: "Flower", svgKey: "flower" },
    { telugu: "పావురం", translit: "Paavuram", english: "Pigeon", svgKey: "pigeon" }
  ],
  "బ": [
    { telugu: "బంతి", translit: "Banthi", english: "Ball", svgKey: "ball" },
    { telugu: "బంగాళాదుంప", translit: "Bangaaladumpa", english: "Potato", svgKey: "potato" },
    { telugu: "బెండకాయ", translit: "Bendakaaya", english: "Okra", svgKey: "okra" }
  ],
  "మ": [
    { telugu: "మామిడి", translit: "Maamidi", english: "Mango", svgKey: "mango" },
    { telugu: "మంచం", translit: "Mancham", english: "Cot / Bed", svgKey: "bed" },
    { telugu: "మల్లె", translit: "Malle", english: "Jasmine", svgKey: "flower" }
  ],
  "స": [
    { telugu: "సింహం", translit: "Simham", english: "Lion", svgKey: "lion" },
    { telugu: "సూర్యుడు", translit: "Sooryudu", english: "Sun", svgKey: "sun" },
    { telugu: "సంచి", translit: "Sanchi", english: "Bag", svgKey: "bag" }
  ],
  "హ": [
    { telugu: "హంస", translit: "Hamsa", english: "Swan", svgKey: "swan" }
  ]
};

// Retrieve related words for any letter or word
export function getRelatedWordsFor(letterChar, currentWord = "") {
  // First check curated database
  if (CURATED_RELATED_WORDS[letterChar]) {
    return CURATED_RELATED_WORDS[letterChar].filter(w => w.telugu !== currentWord);
  }

  // Fallback to vocabulary items matching the letter
  const matched = VOCABULARY_ITEMS.filter(item => 
    (item.letter === letterChar || item.telugu.startsWith(letterChar)) && item.telugu !== currentWord
  ).map(item => ({
    telugu: item.telugu,
    translit: item.translit,
    english: item.english,
    svgKey: item.svgKey
  }));

  if (matched.length > 0) return matched;

  // Fallback to first 3 items in vocabulary
  return VOCABULARY_ITEMS.slice(0, 3).map(item => ({
    telugu: item.telugu,
    translit: item.translit,
    english: item.english,
    svgKey: item.svgKey
  }));
}

// Split a Telugu word into clean individual grapheme syllables
export function getWordSyllables(word) {
  if (!word) return [];
  try {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(word)).map(s => s.segment);
  } catch {
    return word.split('');
  }
}
