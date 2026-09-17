import React from 'react';

// Comprehensive, crisp SVG illustrations for Telugu letters, words, and vocabulary
// Designed with vibrant, kid-friendly colors, rounded shapes, and high visual contrast

export const Illustration = ({ name, size = 120, className = "" }) => {
  const s = size;

  switch (name) {
    // ----------------- VOWEL WORDS -----------------
    case "mother":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0F0" />
          <path d="M50 20 C40 20 32 28 32 38 C32 46 38 52 46 54 L44 80 L56 80 L54 54 C62 52 68 46 68 38 C68 28 60 20 50 20 Z" fill="#FF8DA1" />
          {/* Hair */}
          <path d="M35 34 C35 24 42 16 50 16 C58 16 65 24 65 34 C63 26 57 22 50 22 C43 22 37 26 35 34 Z" fill="#2C3A47" />
          <circle cx="50" cy="35" r="13" fill="#FED7B2" />
          {/* Bindi */}
          <circle cx="50" cy="31" r="1.5" fill="#EE5253" />
          {/* Eyes & Smile */}
          <circle cx="45" cy="35" r="1.5" fill="#2C3A47" />
          <circle cx="55" cy="35" r="1.5" fill="#2C3A47" />
          <path d="M47 39 Q50 42 53 39" stroke="#E55039" strokeWidth="1.2" strokeLinecap="round" />
          {/* Saree & Baby in arms */}
          <path d="M36 55 Q50 70 64 55 L60 85 L40 85 Z" fill="#E71C23" />
          <path d="M44 58 Q50 68 56 58" stroke="#F8EFBA" strokeWidth="2" strokeLinecap="round" />
          <circle cx="58" cy="62" r="7" fill="#FED7B2" />
          <path d="M55 64 Q58 67 61 64" stroke="#2C3A47" strokeWidth="1" strokeLinecap="round" />
          <path d="M52 68 Q60 62 66 72" fill="#74B9FF" />
          {/* Hearts */}
          <path d="M22 28 Q22 22 27 22 Q32 22 32 27 Q32 34 27 38 Q22 34 22 28 Z" fill="#FF6B81" opacity="0.8" />
          <path d="M72 26 Q72 20 77 20 Q82 20 82 25 Q82 32 77 36 Q72 32 72 26 Z" fill="#FF6B81" opacity="0.8" />
        </svg>
      );

    case "cow":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EE" />
          {/* Cow Body */}
          <ellipse cx="50" cy="58" rx="28" ry="20" fill="#FFFFFF" stroke="#4A5568" strokeWidth="2.5" />
          {/* Spots */}
          <path d="M38 48 Q44 42 48 50 Q46 56 40 56 Z" fill="#2D3748" />
          <path d="M60 52 Q68 50 66 60 Q58 64 60 52 Z" fill="#2D3748" />
          {/* Legs */}
          <rect x="32" y="72" width="6" height="15" rx="3" fill="#FFFFFF" stroke="#4A5568" strokeWidth="2" />
          <rect x="42" y="72" width="6" height="15" rx="3" fill="#FFFFFF" stroke="#4A5568" strokeWidth="2" />
          <rect x="54" y="72" width="6" height="15" rx="3" fill="#FFFFFF" stroke="#4A5568" strokeWidth="2" />
          <rect x="64" y="72" width="6" height="15" rx="3" fill="#FFFFFF" stroke="#4A5568" strokeWidth="2" />
          {/* Head & Horns */}
          <path d="M34 28 Q30 20 28 22 Q26 28 32 32" fill="#E2E8F0" stroke="#4A5568" strokeWidth="2" />
          <path d="M48 28 Q52 20 54 22 Q56 28 50 32" fill="#E2E8F0" stroke="#4A5568" strokeWidth="2" />
          <ellipse cx="40" cy="38" rx="14" ry="12" fill="#FFFFFF" stroke="#4A5568" strokeWidth="2" />
          {/* Snout */}
          <ellipse cx="40" cy="43" rx="10" ry="6" fill="#FFC0CB" />
          <circle cx="37" cy="43" r="1.5" fill="#4A5568" />
          <circle cx="43" cy="43" r="1.5" fill="#4A5568" />
          {/* Eyes & Ears */}
          <circle cx="35" cy="34" r="2" fill="#2D3748" />
          <circle cx="45" cy="34" r="2" fill="#2D3748" />
          <ellipse cx="26" cy="35" rx="5" ry="3" fill="#FFC0CB" transform="rotate(-20 26 35)" />
          <ellipse cx="54" cy="35" rx="5" ry="3" fill="#FFC0CB" transform="rotate(20 54 35)" />
          {/* Bell */}
          <path d="M46 54 L44 60 L50 60 L48 54 Z" fill="#F6E05E" stroke="#D69E2E" strokeWidth="1" />
        </svg>
      );

    case "house":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E8F8F7" />
          {/* Chimney */}
          <rect x="65" y="24" width="8" height="18" fill="#E17055" rx="1" />
          <circle cx="69" cy="18" r="3" fill="#DFE6E9" opacity="0.8" />
          {/* Roof */}
          <polygon points="50,18 20,44 80,44" fill="#FF7675" stroke="#D63031" strokeWidth="2" strokeLinejoin="round" />
          {/* House Base */}
          <rect x="26" y="44" width="48" height="38" fill="#FFEAA7" stroke="#FDCB6E" strokeWidth="2" />
          {/* Door */}
          <rect x="43" y="56" width="14" height="26" rx="2" fill="#6C5CE7" />
          <circle cx="53" cy="70" r="1.5" fill="#FFEAA7" />
          {/* Window */}
          <rect x="30" y="52" width="10" height="10" rx="1" fill="#74B9FF" stroke="#0984E3" strokeWidth="1.5" />
          <rect x="60" y="52" width="10" height="10" rx="1" fill="#74B9FF" stroke="#0984E3" strokeWidth="1.5" />
          {/* Garden Bush */}
          <circle cx="22" cy="80" r="8" fill="#00B894" />
          <circle cx="78" cy="80" r="8" fill="#00B894" />
        </svg>
      );

    case "fly":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAF6FA" />
          {/* Wings */}
          <ellipse cx="36" cy="40" rx="18" ry="10" fill="#74B9FF" opacity="0.6" transform="rotate(-30 36 40)" stroke="#0984E3" strokeWidth="1" />
          <ellipse cx="64" cy="40" rx="18" ry="10" fill="#74B9FF" opacity="0.6" transform="rotate(30 64 40)" stroke="#0984E3" strokeWidth="1" />
          {/* Body */}
          <ellipse cx="50" cy="55" rx="12" ry="18" fill="#2D3436" />
          {/* Stripes */}
          <path d="M40 52 Q50 50 60 52" stroke="#636E72" strokeWidth="2" />
          <path d="M40 58 Q50 56 60 58" stroke="#636E72" strokeWidth="2" />
          {/* Big Cartoon Eyes */}
          <circle cx="44" cy="38" r="7" fill="#D63031" />
          <circle cx="56" cy="38" r="7" fill="#D63031" />
          <circle cx="45" cy="36" r="2" fill="#FFFFFF" />
          <circle cx="57" cy="36" r="2" fill="#FFFFFF" />
          {/* Legs */}
          <path d="M38 52 L26 50 M38 60 L24 64 M62 52 L74 50 M62 60 L76 64" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "squirrel":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF9E7" />
          {/* Fluffy Tail */}
          <path d="M30 65 C20 60 16 35 32 25 C42 18 48 30 42 42 C38 50 44 65 30 65 Z" fill="#E17055" stroke="#D35400" strokeWidth="2" />
          <path d="M26 48 C24 38 28 30 36 28" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
          {/* Body */}
          <ellipse cx="52" cy="62" rx="14" ry="18" fill="#E17055" />
          {/* White Belly */}
          <ellipse cx="56" cy="64" rx="8" ry="12" fill="#FFEAA7" />
          {/* Stripes */}
          <path d="M44 52 Q46 64 45 74 M48 50 Q50 62 49 72 M52 50 Q53 60 52 70" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          {/* Head & Ears */}
          <circle cx="58" cy="42" r="11" fill="#E17055" />
          <polygon points="56,33 60,25 64,33" fill="#D35400" />
          <polygon points="63,35 68,28 70,36" fill="#D35400" />
          {/* Eye & Snout */}
          <circle cx="63" cy="40" r="2" fill="#2D3436" />
          <circle cx="64" cy="39" r="0.6" fill="#FFFFFF" />
          <ellipse cx="68" cy="44" rx="2" ry="1.5" fill="#2D3436" />
          {/* Paws holding nut */}
          <ellipse cx="64" cy="56" rx="4" ry="3" fill="#FFEAA7" />
          <ellipse cx="68" cy="56" rx="3.5" ry="4.5" fill="#A0522D" />
        </svg>
      );

    case "swing":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F5EEFD" />
          {/* Tree Branch */}
          <path d="M15 25 Q50 20 85 24" stroke="#8D6E63" strokeWidth="7" strokeLinecap="round" />
          {/* Leaves */}
          <circle cx="28" cy="20" r="8" fill="#2ECC71" />
          <circle cx="75" cy="18" r="9" fill="#27AE60" />
          {/* Ropes */}
          <line x1="38" y1="24" x2="38" y2="70" stroke="#F1C40F" strokeWidth="2.5" />
          <line x1="62" y1="24" x2="62" y2="70" stroke="#F1C40F" strokeWidth="2.5" />
          {/* Wooden Plank */}
          <rect x="30" y="70" width="40" height="7" rx="3" fill="#D35400" stroke="#BA4A00" strokeWidth="1.5" />
          {/* Flowers on ropes */}
          <circle cx="38" cy="45" r="3" fill="#FF7675" />
          <circle cx="62" cy="50" r="3" fill="#FF7675" />
          <circle cx="38" cy="45" r="1" fill="#FEEAA7" />
          <circle cx="62" cy="50" r="1" fill="#FEEAA7" />
        </svg>
      );

    case "sage":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0E6" />
          {/* Robes */}
          <path d="M30 85 C30 65 38 55 50 55 C62 55 70 65 70 85 Z" fill="#E67E22" />
          {/* Head & Topknot */}
          <circle cx="50" cy="40" r="12" fill="#FED7B2" />
          <ellipse cx="50" cy="25" rx="6" ry="7" fill="#6D4C41" />
          <circle cx="50" cy="20" r="3" fill="#8D6E63" />
          {/* White Beard */}
          <path d="M42 45 C42 62 58 62 58 45 Z" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="1" />
          {/* Tilak on forehead */}
          <line x1="48" y1="34" x2="52" y2="34" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="50" cy="34" r="1" fill="#F1C40F" />
          {/* Eyes closed in meditation */}
          <path d="M44 38 Q46 40 48 38" stroke="#2D3436" strokeWidth="1.2" fill="none" />
          <path d="M52 38 Q54 40 56 38" stroke="#2D3436" strokeWidth="1.2" fill="none" />
          {/* Rudraksha Garland */}
          <path d="M42 58 Q50 68 58 58" stroke="#795548" strokeWidth="2.5" strokeDasharray="2,2" />
        </svg>
      );

    case "coin":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF3EB" />
          <circle cx="50" cy="50" r="32" fill="#F1C40F" stroke="#D68910" strokeWidth="3" />
          <circle cx="50" cy="50" r="26" fill="#F7DC6F" stroke="#B7950B" strokeWidth="1.5" strokeDasharray="3,2" />
          <circle cx="50" cy="50" r="10" fill="#F39C12" />
          <text x="50" y="55" fontSize="16" fontWeight="bold" fill="#7D6608" textAnchor="middle">₹</text>
        </svg>
      );

    case "mouse":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAFBF2" />
          {/* Tail */}
          <path d="M26 62 Q16 55 20 40" stroke="#BDC3C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Body */}
          <ellipse cx="48" cy="60" rx="20" ry="14" fill="#95A5A6" />
          {/* Big Ears */}
          <circle cx="44" cy="34" r="9" fill="#7F8C8D" />
          <circle cx="44" cy="34" r="5.5" fill="#F8A5C2" />
          <circle cx="58" cy="34" r="9" fill="#7F8C8D" />
          <circle cx="58" cy="34" r="5.5" fill="#F8A5C2" />
          {/* Head & Snout */}
          <ellipse cx="58" cy="48" rx="13" ry="10" fill="#95A5A6" />
          <circle cx="70" cy="48" r="2.5" fill="#E84393" />
          {/* Eyes & Whiskers */}
          <circle cx="58" cy="44" r="2" fill="#2C3A47" />
          <circle cx="59" cy="43.5" r="0.6" fill="#FFFFFF" />
          <line x1="64" y1="46" x2="76" y2="43" stroke="#2C3A47" strokeWidth="1" />
          <line x1="64" y1="50" x2="76" y2="53" stroke="#2C3A47" strokeWidth="1" />
          {/* Cheese */}
          <polygon points="66,66 78,60 76,72" fill="#F1C40F" stroke="#D4AC0D" strokeWidth="1" />
          <circle cx="72" cy="65" r="1" fill="#B7950B" />
        </svg>
      );

    case "elephant":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E9F8F0" />
          {/* Body */}
          <ellipse cx="46" cy="56" rx="26" ry="20" fill="#7F8C8D" />
          {/* Legs */}
          <rect x="28" y="68" width="8" height="18" rx="4" fill="#636E72" />
          <rect x="40" y="68" width="8" height="18" rx="4" fill="#7F8C8D" />
          <rect x="52" y="68" width="8" height="18" rx="4" fill="#7F8C8D" />
          <rect x="64" y="68" width="8" height="18" rx="4" fill="#636E72" />
          {/* Head */}
          <circle cx="68" cy="44" r="16" fill="#7F8C8D" />
          {/* Big Ear */}
          <ellipse cx="56" cy="44" rx="11" ry="14" fill="#95A5A6" stroke="#636E72" strokeWidth="1.5" />
          <ellipse cx="56" cy="44" rx="7" ry="10" fill="#F8A5C2" opacity="0.6" />
          {/* Eye */}
          <circle cx="70" cy="40" r="2" fill="#2C3A47" />
          {/* Trunk up in joy */}
          <path d="M78 48 C85 52 86 36 82 30" stroke="#7F8C8D" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Tusk */}
          <path d="M76 52 Q82 54 84 48" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Festive Headcloth (Ambari) */}
          <path d="M40 38 Q50 34 60 38 L58 46 L42 46 Z" fill="#E74C3C" />
          <circle cx="50" cy="42" r="2" fill="#F1C40F" />
        </svg>
      );

    case "five":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDECEF" />
          {/* Palm & 5 Fingers */}
          <rect x="40" y="52" width="22" height="26" rx="6" fill="#FED7B2" stroke="#E58E26" strokeWidth="2" />
          {/* Thumb */}
          <path d="M38 60 C30 58 32 50 38 52 Z" fill="#FED7B2" stroke="#E58E26" strokeWidth="1.5" />
          {/* 4 Fingers */}
          <rect x="40" y="32" width="4.5" height="22" rx="2.2" fill="#FED7B2" stroke="#E58E26" strokeWidth="1.5" />
          <rect x="46" y="26" width="4.5" height="28" rx="2.2" fill="#FED7B2" stroke="#E58E26" strokeWidth="1.5" />
          <rect x="52" y="28" width="4.5" height="26" rx="2.2" fill="#FED7B2" stroke="#E58E26" strokeWidth="1.5" />
          <rect x="58" y="36" width="4.5" height="18" rx="2.2" fill="#FED7B2" stroke="#E58E26" strokeWidth="1.5" />
          {/* Number 5 Badge */}
          <circle cx="72" cy="72" r="14" fill="#E74C3C" />
          <text x="72" y="78" fontSize="18" fontWeight="900" fill="#FFFFFF" textAnchor="middle">5</text>
        </svg>
      );

    case "camel":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF5E7" />
          {/* Body & Hump */}
          <path d="M30 65 L32 54 Q40 40 48 54 Q56 40 64 54 L68 65 Z" fill="#D35400" />
          {/* Long Neck & Head */}
          <path d="M64 58 Q72 50 72 32 L78 30 Q82 34 78 40 L70 60" fill="#E67E22" />
          <ellipse cx="77" cy="33" rx="5" ry="3" fill="#E67E22" />
          <circle cx="76" cy="32" r="1.2" fill="#2C3A47" />
          {/* Legs */}
          <line x1="36" y1="65" x2="36" y2="86" stroke="#BA4A00" strokeWidth="3" strokeLinecap="round" />
          <line x1="44" y1="65" x2="44" y2="86" stroke="#BA4A00" strokeWidth="3" strokeLinecap="round" />
          <line x1="56" y1="65" x2="56" y2="86" stroke="#BA4A00" strokeWidth="3" strokeLinecap="round" />
          <line x1="64" y1="65" x2="64" y2="86" stroke="#BA4A00" strokeWidth="3" strokeLinecap="round" />
          {/* Saddle */}
          <path d="M46 54 Q52 50 58 54" stroke="#F1C40F" strokeWidth="3" fill="none" />
        </svg>
      );

    case "ship":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EBF0FB" />
          {/* Water Waves */}
          <path d="M12 76 Q25 70 38 76 Q51 82 64 76 Q77 70 90 76" stroke="#3498DB" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M18 84 Q31 78 44 84 Q57 90 70 84 Q83 78 88 84" stroke="#2980B9" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Hull */}
          <polygon points="22,64 30,76 72,76 80,64" fill="#C0392B" stroke="#962D22" strokeWidth="2" />
          {/* Deck & Cabins */}
          <rect x="34" y="48" width="34" height="16" fill="#ECF0F1" stroke="#BDC3C7" strokeWidth="1.5" />
          <rect x="42" y="38" width="18" height="10" fill="#34495E" rx="1" />
          {/* Chimney & Smoke */}
          <rect x="52" y="28" width="6" height="10" fill="#E67E22" />
          <circle cx="55" cy="22" r="3" fill="#BDC3C7" opacity="0.8" />
          <circle cx="58" cy="16" r="4" fill="#BDC3C7" opacity="0.6" />
          {/* Windows */}
          <circle cx="42" cy="56" r="2.5" fill="#3498DB" />
          <circle cx="51" cy="56" r="2.5" fill="#3498DB" />
          <circle cx="60" cy="56" r="2.5" fill="#3498DB" />
        </svg>
      );

    case "medicine":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F3EEFA" />
          {/* Medicine Bottle */}
          <rect x="36" y="36" width="28" height="42" rx="4" fill="#E8F8F5" stroke="#1ABC9C" strokeWidth="2" />
          <rect x="42" y="28" width="16" height="8" rx="2" fill="#16A085" />
          {/* Red Cross */}
          <rect x="47" y="48" width="6" height="18" fill="#E74C3C" rx="1" />
          <rect x="41" y="54" width="18" height="6" fill="#E74C3C" rx="1" />
          {/* Capsule Pill */}
          <g transform="translate(62, 60) rotate(35)">
            <rect x="0" y="0" width="12" height="24" rx="6" fill="#F1C40F" />
            <rect x="0" y="12" width="12" height="12" rx="0" fill="#E74C3C" />
          </g>
        </svg>
      );

    case "sky":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E7F8F7" />
          {/* Rainbow */}
          <path d="M22 68 A28 28 0 0 1 78 68" stroke="#E74C3C" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M25 68 A25 25 0 0 1 75 68" stroke="#F1C40F" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M28 68 A22 22 0 0 1 72 68" stroke="#2ECC71" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M31 68 A19 19 0 0 1 69 68" stroke="#3498DB" strokeWidth="3" fill="none" opacity="0.7" />
          {/* Sun */}
          <circle cx="70" cy="30" r="10" fill="#F39C12" />
          {/* Fluffy Clouds */}
          <ellipse cx="40" cy="55" rx="16" ry="10" fill="#FFFFFF" />
          <circle cx="32" cy="50" r="9" fill="#FFFFFF" />
          <circle cx="48" cy="48" r="11" fill="#FFFFFF" />
          {/* Twinkling Stars */}
          <polygon points="26,26 28,30 32,31 29,34 30,38 26,35 22,38 23,34 20,31 24,30" fill="#F1C40F" />
        </svg>
      );

    case "palace":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAF5FB" />
          {/* Main Walls */}
          <rect x="25" y="48" width="50" height="34" fill="#FDEBD0" stroke="#F5B041" strokeWidth="2" />
          {/* Central Dome */}
          <path d="M40 48 C40 30 60 30 60 48 Z" fill="#F39C12" stroke="#D68910" strokeWidth="1.5" />
          <line x1="50" y1="28" x2="50" y2="20" stroke="#C0392B" strokeWidth="2" />
          <polygon points="50,20 58,23 50,26" fill="#E74C3C" />
          {/* Side Towers */}
          <rect x="18" y="40" width="12" height="42" fill="#FAD7A0" stroke="#F5B041" strokeWidth="1.5" />
          <path d="M18 40 C18 30 30 30 30 40 Z" fill="#F39C12" />
          <rect x="70" y="40" width="12" height="42" fill="#FAD7A0" stroke="#F5B041" strokeWidth="1.5" />
          <path d="M70 40 C70 30 82 30 82 40 Z" fill="#F39C12" />
          {/* Royal Gate Arch */}
          <path d="M44 82 L44 65 C44 58 56 58 56 65 L56 82 Z" fill="#7D3C98" />
        </svg>
      );

    // ----------------- CONSONANT WORDS -----------------
    case "lotus":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFEFF0" />
          {/* Water ripples & Lily pad */}
          <ellipse cx="50" cy="74" rx="36" ry="10" fill="#2ECC71" stroke="#27AE60" strokeWidth="2" />
          <line x1="50" y1="74" x2="68" y2="70" stroke="#27AE60" strokeWidth="1.5" />
          {/* Lotus Petals */}
          <path d="M50 30 C40 45 42 62 50 68 C58 62 60 45 50 30 Z" fill="#FF7675" />
          <path d="M34 42 C30 54 38 64 50 68 C42 60 40 48 34 42 Z" fill="#FD79A8" />
          <path d="M66 42 C70 54 62 64 50 68 C58 60 60 48 66 42 Z" fill="#FD79A8" />
          <path d="M22 52 C22 62 34 68 50 70 C36 66 30 58 22 52 Z" fill="#E84393" />
          <path d="M78 52 C78 62 66 68 50 70 C64 66 70 58 78 52 Z" fill="#E84393" />
          <circle cx="50" cy="56" r="4" fill="#F1C40F" />
        </svg>
      );

    case "sword":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDECEF" />
          {/* Blade tilted diagonally */}
          <g transform="translate(10, 10)">
            <path d="M65 15 L35 55 L28 50 L58 10 Z" fill="#BDC3C7" stroke="#7F8C8D" strokeWidth="1.5" />
            <polygon points="65,15 72,12 58,10" fill="#ECF0F1" />
            {/* Crossguard */}
            <rect x="22" y="52" width="20" height="6" rx="2" fill="#F1C40F" stroke="#D4AC0D" strokeWidth="1.5" transform="rotate(-40 28 54)" />
            {/* Hilt & Pommel */}
            <rect x="16" y="60" width="6" height="14" rx="2" fill="#8E44AD" transform="rotate(-40 18 64)" />
            <circle cx="10" cy="74" r="4" fill="#E74C3C" />
          </g>
        </svg>
      );

    case "clock":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0E6" />
          <circle cx="50" cy="50" r="34" fill="#FFFFFF" stroke="#E67E22" strokeWidth="4" />
          {/* Hour markers */}
          <circle cx="50" cy="24" r="2" fill="#2C3E50" />
          <circle cx="76" cy="50" r="2" fill="#2C3E50" />
          <circle cx="50" cy="76" r="2" fill="#2C3E50" />
          <circle cx="24" cy="50" r="2" fill="#2C3E50" />
          {/* Hands showing 10:10 (happy clock) */}
          <line x1="50" y1="50" x2="38" y2="34" stroke="#2C3E50" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="65" y2="38" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="50" r="3.5" fill="#E67E22" />
          {/* Bell knobs on top */}
          <circle cx="34" cy="18" r="6" fill="#F39C12" />
          <circle cx="66" cy="18" r="6" fill="#F39C12" />
        </svg>
      );

    case "pot":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF9E7" />
          {/* Clay Pot (Ghatam) */}
          <ellipse cx="50" cy="62" rx="26" ry="22" fill="#D35400" stroke="#BA4A00" strokeWidth="2" />
          {/* Neck & Rim */}
          <rect x="38" y="34" width="24" height="8" rx="2" fill="#E67E22" />
          <ellipse cx="50" cy="34" rx="14" ry="4" fill="#F39C12" stroke="#BA4A00" strokeWidth="1.5" />
          {/* Tribal Patterns */}
          <path d="M28 58 Q50 64 72 58" stroke="#F1C40F" strokeWidth="2.5" fill="none" />
          <circle cx="36" cy="66" r="2" fill="#FFFFFF" />
          <circle cx="45" cy="68" r="2" fill="#FFFFFF" />
          <circle cx="55" cy="68" r="2" fill="#FFFFFF" />
          <circle cx="64" cy="66" r="2" fill="#FFFFFF" />
        </svg>
      );

    case "literature":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFFCE6" />
          {/* Palm leaf manuscript (తాళపత్ర గ్రంథం) */}
          <rect x="20" y="38" width="60" height="12" rx="3" fill="#FAD7A0" stroke="#D4AC0D" strokeWidth="2" />
          <rect x="18" y="52" width="60" height="12" rx="3" fill="#F9E79F" stroke="#D4AC0D" strokeWidth="2" />
          {/* Binding cord */}
          <circle cx="32" cy="44" r="2.5" fill="#E74C3C" />
          <circle cx="32" cy="58" r="2.5" fill="#E74C3C" />
          <line x1="32" y1="36" x2="32" y2="68" stroke="#E74C3C" strokeWidth="2" />
          {/* Telugu Script strokes */}
          <line x1="42" y1="44" x2="70" y2="44" stroke="#7D6608" strokeWidth="1.5" strokeDasharray="3,2" />
          <line x1="42" y1="58" x2="70" y2="58" stroke="#7D6608" strokeWidth="1.5" strokeDasharray="3,2" />
        </svg>
      );

    case "parrot":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E9F8F0" />
          {/* Perch Branch */}
          <line x1="20" y1="78" x2="80" y2="78" stroke="#8D6E63" strokeWidth="5" strokeLinecap="round" />
          {/* Long Tail */}
          <path d="M42 66 L34 92 L46 90 L48 66 Z" fill="#27AE60" />
          {/* Body */}
          <ellipse cx="50" cy="56" rx="14" ry="18" fill="#2ECC71" />
          {/* Red Ring on neck */}
          <path d="M42 46 Q50 50 58 46" stroke="#E74C3C" strokeWidth="2.5" strokeLinecap="round" />
          {/* Head */}
          <circle cx="52" cy="38" r="12" fill="#2ECC71" />
          {/* Eye */}
          <circle cx="48" cy="36" r="2.5" fill="#FFFFFF" />
          <circle cx="48" cy="36" r="1.2" fill="#2C3E50" />
          {/* Curved Red Beak */}
          <path d="M58 35 Q68 36 65 44 Q60 41 58 41 Z" fill="#E74C3C" />
        </svg>
      );

    case "umbrella":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAFBF2" />
          {/* Canopy */}
          <path d="M20 54 C20 30 80 30 80 54 C70 50 60 56 50 52 C40 56 30 50 20 54 Z" fill="#3498DB" stroke="#2980B9" strokeWidth="2" />
          {/* Stripes on canopy */}
          <path d="M50 30 Q44 42 40 52" stroke="#F1C40F" strokeWidth="2" fill="none" />
          <path d="M50 30 Q56 42 60 52" stroke="#F1C40F" strokeWidth="2" fill="none" />
          {/* Top Pin */}
          <line x1="50" y1="30" x2="50" y2="24" stroke="#2C3E50" strokeWidth="3" strokeLinecap="round" />
          {/* Shaft & Hook Handle */}
          <line x1="50" y1="52" x2="50" y2="76" stroke="#2C3E50" strokeWidth="3" />
          <path d="M50 76 C50 82 42 82 42 76" stroke="#E67E22" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "guava":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E7F7F3" />
          {/* Whole Guava */}
          <circle cx="44" cy="56" r="22" fill="#2ECC71" stroke="#27AE60" strokeWidth="2" />
          {/* Stem & Leaves */}
          <path d="M44 34 Q48 24 54 28" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" fill="none" />
          <ellipse cx="56" cy="32" rx="7" ry="4" fill="#27AE60" transform="rotate(25 56 32)" />
          {/* Slice Cut Guava with Pink Core & Seeds */}
          <ellipse cx="64" cy="62" rx="16" ry="18" fill="#FF7675" stroke="#2ECC71" strokeWidth="3" />
          <circle cx="60" cy="58" r="1.5" fill="#FFEAA7" />
          <circle cx="68" cy="58" r="1.5" fill="#FFEAA7" />
          <circle cx="64" cy="66" r="1.5" fill="#FFEAA7" />
        </svg>
      );

    case "fish":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E5FAFA" />
          {/* Tail Fin */}
          <polygon points="26,50 14,36 14,64" fill="#E67E22" stroke="#D35400" strokeWidth="1.5" />
          {/* Body */}
          <ellipse cx="50" cy="50" rx="26" ry="18" fill="#F39C12" stroke="#D35400" strokeWidth="2" />
          {/* Stripes */}
          <path d="M46 34 Q52 50 46 66" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M56 36 Q62 50 56 64" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Big Eye */}
          <circle cx="66" cy="46" r="4" fill="#FFFFFF" />
          <circle cx="67" cy="46" r="2" fill="#2C3E50" />
          {/* Bubbles */}
          <circle cx="78" cy="38" r="2.5" fill="#74B9FF" opacity="0.8" />
          <circle cx="82" cy="30" r="3.5" fill="#74B9FF" opacity="0.8" />
        </svg>
      );

    case "command":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E5F6F6" />
          {/* Royal Scroll */}
          <rect x="28" y="24" width="44" height="52" rx="3" fill="#FFF9E6" stroke="#D4AC0D" strokeWidth="2" />
          {/* Top & bottom scroll rolls */}
          <rect x="22" y="20" width="56" height="8" rx="4" fill="#F39C12" />
          <rect x="22" y="72" width="56" height="8" rx="4" fill="#F39C12" />
          {/* Wax Seal */}
          <circle cx="50" cy="52" r="10" fill="#C0392B" stroke="#922B21" strokeWidth="1.5" />
          <text x="50" y="56" fontSize="11" fontWeight="bold" fill="#FADBD8" textAnchor="middle">★</text>
        </svg>
      );

    case "tomato":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0F0" />
          {/* Tomato Body */}
          <circle cx="50" cy="56" r="26" fill="#E74C3C" stroke="#C0392B" strokeWidth="2.5" />
          {/* Shiny highlight */}
          <path d="M38 42 Q48 38 52 42" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          {/* Green Calyx Leaves & Stem */}
          <path d="M50 30 L50 20 Q54 18 56 22" stroke="#27AE60" strokeWidth="3" strokeLinecap="round" fill="none" />
          <polygon points="50,30 42,26 44,32 38,34 44,36 46,42 50,36 54,42 56,36 62,34 56,32 58,26" fill="#2ECC71" />
        </svg>
      );

    case "throat":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDEEEE" />
          {/* Face Profile Neck */}
          <path d="M34 25 C34 40 40 50 40 75 L60 75 C60 50 66 40 66 25 Z" fill="#FED7B2" stroke="#E58E26" strokeWidth="2" />
          {/* Singing Sound Waves & Musical notes */}
          <path d="M68 45 Q76 50 68 55" stroke="#9B59B6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M74 40 Q86 50 74 60" stroke="#8E44AD" strokeWidth="3" fill="none" strokeLinecap="round" />
          <text x="74" y="36" fontSize="16" fill="#E74C3C">♪</text>
        </svg>
      );

    case "drum":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EC" />
          {/* Damaru hourglass shape */}
          <polygon points="26,30 74,30 50,52" fill="#D35400" stroke="#BA4A00" strokeWidth="2" />
          <polygon points="26,74 74,74 50,52" fill="#D35400" stroke="#BA4A00" strokeWidth="2" />
          {/* Drum heads */}
          <ellipse cx="50" cy="30" rx="24" ry="6" fill="#FAD7A0" stroke="#BA4A00" strokeWidth="1.5" />
          <ellipse cx="50" cy="74" rx="24" ry="6" fill="#FAD7A0" stroke="#BA4A00" strokeWidth="1.5" />
          {/* Center Cord & Beads */}
          <circle cx="50" cy="52" r="4" fill="#F1C40F" />
          <line x1="50" y1="52" x2="30" y2="44" stroke="#7F8C8D" strokeWidth="1.5" />
          <circle cx="30" cy="44" r="3" fill="#E74C3C" />
          <line x1="50" y1="52" x2="70" y2="60" stroke="#7F8C8D" strokeWidth="1.5" />
          <circle cx="70" cy="60" r="3" fill="#E74C3C" />
        </svg>
      );

    case "kettledrum":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF0FC" />
          {/* Grand Dhanka Bowl */}
          <path d="M22 45 C22 75 78 75 78 45 Z" fill="#F39C12" stroke="#D68910" strokeWidth="2.5" />
          <ellipse cx="50" cy="45" rx="28" ry="8" fill="#F9E79F" stroke="#D68910" strokeWidth="2" />
          {/* Stand Legs */}
          <line x1="34" y1="70" x2="26" y2="86" stroke="#7F8C8D" strokeWidth="3" strokeLinecap="round" />
          <line x1="66" y1="70" x2="74" y2="86" stroke="#7F8C8D" strokeWidth="3" strokeLinecap="round" />
          {/* Drumsticks */}
          <line x1="38" y1="26" x2="48" y2="44" stroke="#8E44AD" strokeWidth="3" strokeLinecap="round" />
          <line x1="62" y1="26" x2="52" y2="44" stroke="#8E44AD" strokeWidth="3" strokeLinecap="round" />
          <circle cx="48" cy="44" r="3" fill="#E74C3C" />
          <circle cx="52" cy="44" r="3" fill="#E74C3C" />
        </svg>
      );

    case "veena":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EEF5FF" />
          {/* Big Gourd Resonator */}
          <circle cx="70" cy="68" r="16" fill="#D35400" stroke="#BA4A00" strokeWidth="2" />
          {/* Neck / Dandi */}
          <line x1="70" y1="68" x2="26" y2="28" stroke="#E67E22" strokeWidth="6" strokeLinecap="round" />
          {/* Small Gourd */}
          <circle cx="34" cy="34" r="8" fill="#D35400" stroke="#BA4A00" strokeWidth="1.5" />
          {/* Dragon/Yali head carving */}
          <path d="M26 28 Q20 20 28 18 Q32 24 26 28" fill="#F1C40F" stroke="#D4AC0D" strokeWidth="1.5" />
          {/* Strings */}
          <line x1="66" y1="64" x2="28" y2="26" stroke="#F7DC6F" strokeWidth="1.5" />
        </svg>
      );

    case "head":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F0EBFA" />
          {/* Smiling Boy Head */}
          <circle cx="50" cy="52" r="22" fill="#FED7B2" stroke="#E58E26" strokeWidth="2" />
          {/* Hair */}
          <path d="M30 46 C30 30 70 30 70 46 C64 34 36 34 30 46 Z" fill="#2C3E50" />
          {/* Eyes & Smile */}
          <circle cx="43" cy="50" r="2.5" fill="#2C3E50" />
          <circle cx="57" cy="50" r="2.5" fill="#2C3E50" />
          <path d="M44 58 Q50 64 56 58" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Playful Party Crown */}
          <polygon points="38,32 44,20 50,28 56,20 62,32" fill="#F1C40F" stroke="#F39C12" strokeWidth="1.5" />
        </svg>
      );

    case "chariot":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAE8F5" />
          {/* Chariot Base */}
          <rect x="30" y="50" width="40" height="20" fill="#E67E22" stroke="#D35400" strokeWidth="2" rx="2" />
          {/* Canopy / Dome */}
          <polygon points="50,18 26,48 74,48" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
          <circle cx="50" cy="18" r="3" fill="#F1C40F" />
          {/* Huge Wheel */}
          <circle cx="50" cy="74" r="14" fill="#F9E79F" stroke="#795548" strokeWidth="3" />
          <circle cx="50" cy="74" r="3" fill="#795548" />
          <line x1="50" y1="60" x2="50" y2="88" stroke="#795548" strokeWidth="1.5" />
          <line x1="36" y1="74" x2="64" y2="74" stroke="#795548" strokeWidth="1.5" />
        </svg>
      );

    case "tooth":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E6F8FC" />
          {/* Sparkling Clean Tooth */}
          <path d="M34 32 C26 40 26 55 36 78 C40 86 44 86 46 72 C48 64 52 64 54 72 C56 86 60 86 64 78 C74 55 74 40 66 32 C60 26 40 26 34 32 Z" fill="#FFFFFF" stroke="#00CEC9" strokeWidth="2.5" />
          {/* Cute face on tooth */}
          <circle cx="44" cy="46" r="2" fill="#2D3436" />
          <circle cx="56" cy="46" r="2" fill="#2D3436" />
          <path d="M46 54 Q50 58 54 54" stroke="#FF7675" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Sparkles */}
          <polygon points="72,28 74,34 80,36 74,38 72,44 70,38 64,36 70,34" fill="#F1C40F" />
          <polygon points="26,48 27,52 31,53 27,54 26,58 25,54 21,53 25,52" fill="#00CEC9" />
        </svg>
      );

    case "bow":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E7F7F3" />
          {/* Curved Bow */}
          <path d="M35 20 C60 35 60 65 35 80" stroke="#D35400" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Bowstring */}
          <line x1="35" y1="20" x2="35" y2="80" stroke="#BDC3C7" strokeWidth="1.5" />
          {/* Golden Arrow */}
          <line x1="25" y1="50" x2="75" y2="50" stroke="#F1C40F" strokeWidth="3" strokeLinecap="round" />
          <polygon points="75,50 66,45 66,55" fill="#E74C3C" />
          <polygon points="25,50 20,46 22,50 20,54" fill="#3498DB" />
        </svg>
      );

    case "fox":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EC" />
          {/* Bushy Tail */}
          <path d="M25 66 C15 55 20 40 32 46 C30 55 35 65 25 66 Z" fill="#E67E22" />
          <circle cx="20" cy="48" r="4" fill="#FFFFFF" />
          {/* Body */}
          <ellipse cx="48" cy="62" rx="18" ry="14" fill="#E67E22" />
          {/* Pointy Ears */}
          <polygon points="50,35 56,18 64,30" fill="#D35400" />
          <polygon points="66,32 74,20 78,36" fill="#D35400" />
          {/* Head & Snout */}
          <polygon points="46,40 82,46 56,60" fill="#E67E22" />
          <polygon points="62,48 82,46 66,58" fill="#FFFFFF" />
          {/* Nose & Eyes */}
          <circle cx="82" cy="46" r="2" fill="#2C3E50" />
          <ellipse cx="62" cy="42" rx="2" ry="1.5" fill="#2C3E50" />
        </svg>
      );

    case "slate":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#ECFBFF" />
          {/* Wooden Slate Frame */}
          <rect x="22" y="24" width="56" height="52" rx="4" fill="#8D6E63" stroke="#5D4037" strokeWidth="2.5" />
          {/* Slate Chalkboard Area */}
          <rect x="28" y="30" width="44" height="40" fill="#263238" />
          {/* Telugu letter written in chalk */}
          <text x="50" y="58" fontSize="28" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="'Noto Sans Telugu', sans-serif">అ</text>
          {/* Slate Pencil (Balapam) */}
          <line x1="68" y1="62" x2="80" y2="76" stroke="#ECEFF1" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "fruit":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E8FAF5" />
          {/* Fruit Basket Bowl */}
          <path d="M24 55 C24 78 76 78 76 55 Z" fill="#D35400" stroke="#BA4A00" strokeWidth="2" />
          {/* Apple, Orange, Grapes */}
          <circle cx="40" cy="48" r="12" fill="#E74C3C" />
          <circle cx="60" cy="48" r="12" fill="#F39C12" />
          <circle cx="50" cy="42" r="10" fill="#9B59B6" />
          <circle cx="50" cy="32" r="2" fill="#27AE60" />
        </svg>
      );

    case "ball":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDEEEE" />
          {/* Colorful Bouncy Ball */}
          <circle cx="50" cy="50" r="28" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
          <path d="M50 22 C34 32 34 68 50 78 Z" fill="#F1C40F" />
          <path d="M50 22 C66 32 66 68 50 78 Z" fill="#3498DB" />
          <line x1="22" y1="50" x2="78" y2="50" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );

    case "bear":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F0EBFA" />
          {/* Ears */}
          <circle cx="34" cy="32" r="8" fill="#795548" />
          <circle cx="34" cy="32" r="4" fill="#D7CCC8" />
          <circle cx="66" cy="32" r="8" fill="#795548" />
          <circle cx="66" cy="32" r="4" fill="#D7CCC8" />
          {/* Head */}
          <circle cx="50" cy="48" r="22" fill="#8D6E63" />
          {/* Snout */}
          <ellipse cx="50" cy="54" rx="10" ry="7" fill="#D7CCC8" />
          <ellipse cx="50" cy="51" rx="4" ry="2.5" fill="#3E2723" />
          <path d="M50 54 L50 57" stroke="#3E2723" strokeWidth="1.5" />
          {/* Eyes */}
          <circle cx="43" cy="44" r="2" fill="#3E2723" />
          <circle cx="57" cy="44" r="2" fill="#3E2723" />
        </svg>
      );

    case "mango":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EC" />
          {/* Mango fruit with paisley shape */}
          <path d="M52 28 C32 30 28 54 44 72 C58 84 76 74 72 54 C68 38 60 26 52 28 Z" fill="#F39C12" stroke="#E67E22" strokeWidth="2.5" />
          {/* Red-gold blush */}
          <path d="M42 45 C38 55 42 66 52 72" stroke="#E74C3C" strokeWidth="4" strokeLinecap="round" opacity="0.6" fill="none" />
          {/* Stem & Leaf */}
          <path d="M52 28 Q50 18 46 16" stroke="#795548" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M52 24 Q66 18 64 30 Q54 30 52 24 Z" fill="#2ECC71" stroke="#27AE60" strokeWidth="1.5" />
        </svg>
      );

    case "machine":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAE8F5" />
          {/* Cog Gear 1 */}
          <circle cx="44" cy="46" r="16" fill="#95A5A6" stroke="#7F8C8D" strokeWidth="3" strokeDasharray="6,4" />
          <circle cx="44" cy="46" r="6" fill="#EAE8F5" stroke="#7F8C8D" strokeWidth="2" />
          {/* Cog Gear 2 */}
          <circle cx="64" cy="62" r="12" fill="#3498DB" stroke="#2980B9" strokeWidth="3" strokeDasharray="5,3" />
          <circle cx="64" cy="62" r="4" fill="#EAE8F5" stroke="#2980B9" strokeWidth="2" />
        </svg>
      );

    case "sun":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF0FC" />
          {/* Sun Rays */}
          <g stroke="#F39C12" strokeWidth="3" strokeLinecap="round">
            <line x1="50" y1="16" x2="50" y2="24" />
            <line x1="50" y1="76" x2="50" y2="84" />
            <line x1="16" y1="50" x2="24" y2="50" />
            <line x1="76" y1="50" x2="84" y2="50" />
            <line x1="26" y1="26" x2="32" y2="32" />
            <line x1="68" y1="68" x2="74" y2="74" />
            <line x1="26" y1="74" x2="32" y2="68" />
            <line x1="68" y1="32" x2="74" y2="26" />
          </g>
          {/* Sun Body & Happy Face */}
          <circle cx="50" cy="50" r="22" fill="#F1C40F" stroke="#F39C12" strokeWidth="2" />
          <circle cx="43" cy="46" r="2" fill="#D35400" />
          <circle cx="57" cy="46" r="2" fill="#D35400" />
          <path d="M43 54 Q50 60 57 54" stroke="#D35400" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case "laddu":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0F0" />
          {/* Banana Leaf Base */}
          <ellipse cx="50" cy="74" rx="34" ry="10" fill="#2ECC71" stroke="#27AE60" strokeWidth="2" />
          {/* Golden Motichoor Laddu */}
          <circle cx="50" cy="50" r="24" fill="#F39C12" stroke="#D68910" strokeWidth="2" />
          {/* Sugar pearls & Pistachio bits */}
          <circle cx="42" cy="42" r="2" fill="#F9E79F" />
          <circle cx="56" cy="40" r="1.5" fill="#27AE60" />
          <circle cx="50" cy="48" r="2" fill="#F9E79F" />
          <circle cx="40" cy="56" r="1.5" fill="#C0392B" />
          <circle cx="58" cy="56" r="2" fill="#F9E79F" />
          <circle cx="48" cy="62" r="1.5" fill="#27AE60" />
        </svg>
      );

    case "net":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#ECFBFF" />
          {/* Fishing Net Grid */}
          <path d="M26 30 Q50 40 74 30 L66 76 Q50 82 34 76 Z" fill="#E8F8F5" stroke="#16A085" strokeWidth="2" />
          <line x1="38" y1="32" x2="42" y2="78" stroke="#1ABC9C" strokeWidth="1.5" />
          <line x1="50" y1="35" x2="50" y2="80" stroke="#1ABC9C" strokeWidth="1.5" />
          <line x1="62" y1="32" x2="58" y2="78" stroke="#1ABC9C" strokeWidth="1.5" />
          <line x1="30" y1="46" x2="70" y2="46" stroke="#1ABC9C" strokeWidth="1.5" />
          <line x1="32" y1="62" x2="68" y2="62" stroke="#1ABC9C" strokeWidth="1.5" />
        </svg>
      );

    case "conch":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E6F8FC" />
          {/* Sacred Shankha */}
          <path d="M30 46 C24 35 36 24 50 24 C66 24 78 36 74 54 C70 70 54 80 44 80 C36 80 34 72 38 66 C42 62 46 64 50 62 C58 58 64 50 60 40 C56 32 42 34 38 42 Z" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="2" />
          <path d="M42 42 Q52 40 56 48" stroke="#F1C40F" strokeWidth="2" fill="none" />
        </svg>
      );

    case "hexagon":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E8FAF5" />
          {/* 6-sided Shatkonam */}
          <polygon points="50,22 76,36 76,64 50,78 24,64 24,36" fill="#1ABC9C" stroke="#16A085" strokeWidth="3" />
          <text x="50" y="56" fontSize="20" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">6</text>
        </svg>
      );

    case "bag":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E7F7F3" />
          {/* School Bag */}
          <rect x="28" y="38" width="44" height="42" rx="6" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
          {/* Flap */}
          <path d="M28 44 Q50 60 72 44 L72 38 L28 38 Z" fill="#F1C40F" stroke="#D4AC0D" strokeWidth="1.5" />
          <rect x="46" y="52" width="8" height="6" rx="1" fill="#34495E" />
          {/* Handle */}
          <path d="M40 38 V28 H60 V38" stroke="#C0392B" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "swan":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EEF5FF" />
          {/* Pond water waves */}
          <path d="M15 76 Q30 72 45 76 Q60 80 75 76 Q85 72 90 76" stroke="#3498DB" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Swan Body */}
          <ellipse cx="46" cy="62" rx="22" ry="14" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="1.5" />
          {/* Graceful S-Neck */}
          <path d="M58 64 C66 60 70 45 64 34 C60 28 66 22 72 24 C76 26 74 36 68 46 L60 64" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="1.5" />
          {/* Eye & Orange Beak */}
          <circle cx="71" cy="26" r="1.2" fill="#2C3E50" />
          <polygon points="74,25 84,28 75,31" fill="#E67E22" />
        </svg>
      );

    case "lock":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F0EBFA" />
          {/* Shackle */}
          <path d="M38 46 V32 C38 24 62 24 62 32 V46" stroke="#7F8C8D" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Body */}
          <rect x="30" y="46" width="40" height="34" rx="6" fill="#F1C40F" stroke="#D4AC0D" strokeWidth="2.5" />
          {/* Keyhole */}
          <circle cx="50" cy="60" r="4" fill="#2C3E50" />
          <polygon points="48,60 52,60 53,70 47,70" fill="#2C3E50" />
        </svg>
      );

    case "tree":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E9F8F0" />
          {/* Trunk */}
          <path d="M44 84 L46 54 L54 54 L56 84 Z" fill="#795548" />
          {/* Foliage Clouds */}
          <circle cx="50" cy="40" r="18" fill="#2ECC71" />
          <circle cx="36" cy="46" r="14" fill="#27AE60" />
          <circle cx="64" cy="46" r="14" fill="#27AE60" />
          <circle cx="50" cy="30" r="14" fill="#2ECC71" />
          {/* Fruits */}
          <circle cx="42" cy="38" r="2.5" fill="#E74C3C" />
          <circle cx="58" cy="36" r="2.5" fill="#E74C3C" />
          <circle cx="52" cy="48" r="2.5" fill="#E74C3C" />
        </svg>
      );

    case "horse":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0E6" />
          {/* Horse Body */}
          <ellipse cx="46" cy="58" rx="24" ry="16" fill="#D35400" />
          {/* Head & Neck */}
          <path d="M58 56 L72 34 L78 38 L68 64 Z" fill="#D35400" />
          <circle cx="74" cy="34" r="7" fill="#D35400" />
          <polygon points="68,28 72,20 75,28" fill="#BA4A00" />
          {/* Mane */}
          <path d="M60 40 Q56 50 58 54" stroke="#2C3E50" strokeWidth="4" strokeLinecap="round" />
          {/* Legs */}
          <line x1="32" y1="68" x2="28" y2="86" stroke="#BA4A00" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="42" y1="68" x2="42" y2="86" stroke="#BA4A00" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="54" y1="68" x2="56" y2="86" stroke="#BA4A00" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="64" y1="68" x2="68" y2="86" stroke="#BA4A00" strokeWidth="3.5" strokeLinecap="round" />
          {/* Flowing Tail */}
          <path d="M24 54 Q14 62 18 78" stroke="#2C3E50" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    // ----------------- ADDITIONAL VOCABULARY ASSETS -----------------
    case "lion":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF5E7" />
          {/* Mane */}
          <circle cx="50" cy="48" r="26" fill="#E67E22" />
          {/* Face */}
          <circle cx="50" cy="50" r="18" fill="#F1C40F" />
          {/* Ears */}
          <circle cx="36" cy="34" r="5" fill="#E67E22" />
          <circle cx="64" cy="34" r="5" fill="#E67E22" />
          {/* Eyes & Whiskers */}
          <circle cx="43" cy="46" r="2.5" fill="#2C3E50" />
          <circle cx="57" cy="46" r="2.5" fill="#2C3E50" />
          <polygon points="50,52 46,56 54,56" fill="#D35400" />
          <path d="M46 58 Q50 62 54 58" stroke="#2C3E50" strokeWidth="1.5" fill="none" />
        </svg>
      );

    case "dog":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDEEEE" />
          {/* Droopy Ears */}
          <ellipse cx="32" cy="46" rx="6" ry="12" fill="#795548" transform="rotate(-15 32 46)" />
          <ellipse cx="68" cy="46" rx="6" ry="12" fill="#795548" transform="rotate(15 68 46)" />
          {/* Face */}
          <circle cx="50" cy="48" r="18" fill="#F5EEFD" stroke="#795548" strokeWidth="2" />
          {/* Snout & Tongue */}
          <ellipse cx="50" cy="54" rx="8" ry="6" fill="#D7CCC8" />
          <ellipse cx="50" cy="52" rx="3.5" ry="2.5" fill="#3E2723" />
          <path d="M50 55 C50 62 56 62 56 58 Z" fill="#E74C3C" />
          {/* Eyes */}
          <circle cx="44" cy="44" r="2.5" fill="#3E2723" />
          <circle cx="56" cy="44" r="2.5" fill="#3E2723" />
        </svg>
      );

    case "cat":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0F0" />
          {/* Pointy Ears */}
          <polygon points="34,36 40,20 48,34" fill="#FFA07A" />
          <polygon points="37,34 40,24 45,34" fill="#FFC0CB" />
          <polygon points="66,36 60,20 52,34" fill="#FFA07A" />
          <polygon points="63,34 60,24 55,34" fill="#FFC0CB" />
          {/* Face */}
          <circle cx="50" cy="48" r="18" fill="#FFA07A" />
          {/* Eyes & Nose */}
          <ellipse cx="43" cy="45" rx="2.5" ry="3.5" fill="#2ECC71" />
          <ellipse cx="57" cy="45" rx="2.5" ry="3.5" fill="#2ECC71" />
          <polygon points="50,51 47,54 53,54" fill="#E84393" />
          {/* Whiskers */}
          <line x1="38" y1="52" x2="26" y2="50" stroke="#2C3E50" strokeWidth="1.2" />
          <line x1="38" y1="55" x2="26" y2="57" stroke="#2C3E50" strokeWidth="1.2" />
          <line x1="62" y1="52" x2="74" y2="50" stroke="#2C3E50" strokeWidth="1.2" />
          <line x1="62" y1="55" x2="74" y2="57" stroke="#2C3E50" strokeWidth="1.2" />
        </svg>
      );

    case "monkey":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EC" />
          {/* Round Ears */}
          <circle cx="28" cy="46" r="8" fill="#795548" />
          <circle cx="28" cy="46" r="5" fill="#FED7B2" />
          <circle cx="72" cy="46" r="8" fill="#795548" />
          <circle cx="72" cy="46" r="5" fill="#FED7B2" />
          {/* Head */}
          <circle cx="50" cy="46" r="18" fill="#795548" />
          <ellipse cx="50" cy="52" rx="12" ry="9" fill="#FED7B2" />
          {/* Eyes & Smile */}
          <circle cx="44" cy="42" r="2.5" fill="#2C3E50" />
          <circle cx="56" cy="42" r="2.5" fill="#2C3E50" />
          <ellipse cx="50" cy="49" rx="2" ry="1.5" fill="#3E2723" />
          <path d="M44 54 Q50 59 56 54" stroke="#3E2723" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "peacock":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E8FAF5" />
          {/* Feather Fan */}
          <path d="M50 60 C15 35 15 15 50 15 C85 15 85 35 50 60 Z" fill="#00CEC9" opacity="0.8" />
          <circle cx="35" cy="28" r="4" fill="#0984E3" />
          <circle cx="50" cy="22" r="4" fill="#0984E3" />
          <circle cx="65" cy="28" r="4" fill="#0984E3" />
          {/* Body */}
          <ellipse cx="50" cy="62" rx="10" ry="16" fill="#0984E3" />
          <circle cx="50" cy="46" r="7" fill="#0984E3" />
          <polygon points="50,47 56,50 50,52" fill="#F1C40F" />
        </svg>
      );

    case "crow":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F5F6FA" />
          <ellipse cx="50" cy="56" rx="16" ry="12" fill="#2F3640" />
          <circle cx="58" cy="44" r="9" fill="#2F3640" />
          <circle cx="60" cy="42" r="1.5" fill="#F5F6FA" />
          <polygon points="66,42 78,45 66,48" fill="#718093" />
        </svg>
      );

    case "pigeon":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAF0FB" />
          <ellipse cx="48" cy="56" rx="18" ry="14" fill="#7F8C8D" />
          <circle cx="62" cy="44" r="8" fill="#95A5A6" />
          <circle cx="64" cy="42" r="1.5" fill="#E74C3C" />
          <polygon points="68,42 76,44 68,46" fill="#F39C12" />
        </svg>
      );

    case "eagle":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0E6" />
          <path d="M20 40 Q50 30 80 40 L50 65 Z" fill="#795548" />
          <circle cx="50" cy="35" r="9" fill="#FFFFFF" />
          <polygon points="50,34 58,38 50,42" fill="#F1C40F" />
        </svg>
      );

    case "hen":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF5E7" />
          <ellipse cx="48" cy="58" rx="18" ry="14" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="2" />
          <circle cx="60" cy="44" r="8" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="2" />
          <path d="M58 36 C58 30 64 30 64 36 Z" fill="#E74C3C" />
          <polygon points="66,42 74,45 66,48" fill="#F39C12" />
        </svg>
      );

    case "banana":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFFCE6" />
          <path d="M30 65 C40 75 65 65 72 35 C64 45 45 55 30 65 Z" fill="#F1C40F" stroke="#F39C12" strokeWidth="2" />
          <circle cx="72" cy="35" r="2" fill="#795548" />
        </svg>
      );

    case "apple":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDECEF" />
          <ellipse cx="44" cy="56" rx="16" ry="18" fill="#E74C3C" />
          <ellipse cx="56" cy="56" rx="16" ry="18" fill="#E74C3C" />
          <path d="M50 38 Q52 26 56 24" stroke="#795548" strokeWidth="3" fill="none" strokeLinecap="round" />
          <ellipse cx="60" cy="28" rx="5" ry="3" fill="#2ECC71" transform="rotate(20 60 28)" />
        </svg>
      );

    case "grapes":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F5EEFD" />
          <circle cx="42" cy="42" r="7" fill="#8E44AD" />
          <circle cx="58" cy="42" r="7" fill="#8E44AD" />
          <circle cx="50" cy="50" r="7" fill="#9B59B6" />
          <circle cx="38" cy="56" r="6" fill="#8E44AD" />
          <circle cx="50" cy="62" r="6" fill="#9B59B6" />
          <circle cx="62" cy="56" r="6" fill="#8E44AD" />
          <circle cx="50" cy="72" r="5" fill="#8E44AD" />
        </svg>
      );

    case "pomegranate":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0F0" />
          <circle cx="50" cy="55" r="22" fill="#C0392B" />
          <polygon points="50,33 46,26 50,28 54,26" fill="#C0392B" />
        </svg>
      );

    case "watermelon":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E8FAF5" />
          <path d="M22 45 Q50 85 78 45 Z" fill="#E74C3C" stroke="#27AE60" strokeWidth="5" />
          <circle cx="40" cy="52" r="1.5" fill="#2C3E50" />
          <circle cx="50" cy="58" r="1.5" fill="#2C3E50" />
          <circle cx="60" cy="52" r="1.5" fill="#2C3E50" />
        </svg>
      );

    case "brinjal":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F5EEFD" />
          <ellipse cx="50" cy="58" rx="16" ry="22" fill="#8E44AD" />
          <path d="M50 36 L50 24" stroke="#27AE60" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="50,36 40,38 46,42 54,42 60,38" fill="#2ECC71" />
        </svg>
      );

    case "potato":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF9E7" />
          <ellipse cx="50" cy="52" rx="24" ry="18" fill="#D4AC0D" />
          <circle cx="40" cy="46" r="1.5" fill="#9A7D0A" />
          <circle cx="56" cy="54" r="1.5" fill="#9A7D0A" />
        </svg>
      );

    case "okra":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#E9F8F0" />
          <path d="M36 28 L64 74 L58 76 L32 30 Z" fill="#27AE60" />
          <circle cx="34" cy="28" r="3" fill="#1E8449" />
        </svg>
      );

    case "onion":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDECEF" />
          <circle cx="50" cy="54" r="20" fill="#E84393" />
          <polygon points="50,34 46,26 54,26" fill="#2ECC71" />
        </svg>
      );

    case "carrot":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EC" />
          <polygon points="40,36 60,36 50,78" fill="#E67E22" />
          <path d="M50 36 L50 20 M46 36 L40 24 M54 36 L60 24" stroke="#27AE60" strokeWidth="2.5" />
        </svg>
      );

    case "book":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EEF5FF" />
          <path d="M26 40 Q50 34 74 40 L74 68 Q50 62 26 68 Z" fill="#3498DB" stroke="#2980B9" strokeWidth="2" />
          <line x1="50" y1="36" x2="50" y2="65" stroke="#F1C40F" strokeWidth="2" />
        </svg>
      );

    case "chair":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF5E7" />
          <rect x="36" y="26" width="6" height="54" fill="#8D6E63" />
          <rect x="36" y="52" width="28" height="6" fill="#A1887F" />
          <rect x="58" y="52" width="6" height="28" fill="#8D6E63" />
          <rect x="36" y="26" width="28" height="6" fill="#8D6E63" />
        </svg>
      );

    case "lamp":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF5EC" />
          {/* Diya / Deepam */}
          <path d="M30 60 C30 74 70 74 70 60 Z" fill="#D35400" stroke="#BA4A00" strokeWidth="2" />
          {/* Golden Flame */}
          <path d="M50 32 C44 44 44 54 50 58 C56 54 56 44 50 32 Z" fill="#F1C40F" />
          <circle cx="50" cy="50" r="3" fill="#E74C3C" />
        </svg>
      );

    case "flower":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FDECEF" />
          <circle cx="50" cy="38" r="8" fill="#E84393" />
          <circle cx="50" cy="62" r="8" fill="#E84393" />
          <circle cx="38" cy="50" r="8" fill="#E84393" />
          <circle cx="62" cy="50" r="8" fill="#E84393" />
          <circle cx="50" cy="50" r="9" fill="#F1C40F" />
        </svg>
      );

    case "river":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAF0FB" />
          <path d="M30 20 Q50 50 30 80 L70 80 Q50 50 70 20 Z" fill="#3498DB" opacity="0.8" />
        </svg>
      );

    case "moon":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#F0EBFA" />
          <path d="M60 25 C45 25 35 38 35 52 C35 66 45 78 60 78 C48 72 44 58 48 46 C50 38 54 30 60 25 Z" fill="#F1C40F" stroke="#F39C12" strokeWidth="2" />
        </svg>
      );

    case "star":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FEF9E7" />
          <polygon points="50,22 58,38 76,40 62,54 66,72 50,62 34,72 38,54 24,40 42,38" fill="#F1C40F" stroke="#F39C12" strokeWidth="2" />
        </svg>
      );

    case "father":
    case "grandfather":
    case "grandmother":
    case "brother":
    case "sister":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFF0F0" />
          <circle cx="50" cy="42" r="16" fill="#FED7B2" />
          <path d="M32 78 C32 62 40 56 50 56 C60 56 68 62 68 78 Z" fill="#3498DB" />
          <circle cx="45" cy="40" r="2" fill="#2C3E50" />
          <circle cx="55" cy="40" r="2" fill="#2C3E50" />
          <path d="M46 48 Q50 52 54 48" stroke="#E74C3C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      );

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
      const numStr = name.replace("num", "");
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FFFCE6" />
          <circle cx="50" cy="50" r="34" fill="#FF7675" stroke="#D63031" strokeWidth="3" />
          <text x="50" y="60" fontSize="32" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="'Outfit', sans-serif">{numStr}</text>
        </svg>
      );

    default:
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#EAF5FB" />
          <circle cx="50" cy="50" r="28" fill="#3867D6" />
          <text x="50" y="58" fontSize="24" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">★</text>
        </svg>
      );
  }
};
export default Illustration;
