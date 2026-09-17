// Robust bundler using local vendor/babel.min.js with ['env', 'react']
// Automatically transpiles JSX and ES modules to CommonJS bundle with flawless React interop

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Babel compiler
const babelCode = fs.readFileSync(path.join(__dirname, 'vendor', 'babel.min.js'), 'utf8');
const babelModule = { exports: {} };
const fn = new Function('module', 'exports', babelCode);
fn(babelModule, babelModule.exports);
const Babel = babelModule.exports;

console.log('⚡ Compiling Telugu Learning App with Babel (env + react)...');

const filesToBundle = [
  'src/data/teluguData.js',
  'src/utils/audioUtils.js',
  'src/utils/wordDataHelper.js',
  'src/components/Icons.jsx',
  'src/components/illustrations/Illustration.jsx',
  'src/components/HowToWriteModal.jsx',
  'src/components/WordDetailPage.jsx',
  'src/components/LetterCanvas.jsx',
  'src/components/LetterCard.jsx',
  'src/components/LetterDetail.jsx',
  'src/components/AlphabetGrid.jsx',
  'src/components/GuninthaluPage.jsx',
  'src/components/VocabularyPage.jsx',
  'src/components/QuizCard.jsx',
  'src/components/QuizResult.jsx',
  'src/components/QuizPage.jsx',
  'src/components/Navbar.jsx',
  'src/App.jsx',
  'src/main.jsx'
];

if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
}

const moduleRegistry = {};

for (const relPath of filesToBundle) {
  const fullPath = path.join(__dirname, relPath);
  const code = fs.readFileSync(fullPath, 'utf8');

  // Full Babel compilation (JSX + ES Modules to CommonJS)
  const transformed = Babel.transform(code, {
    presets: ['env', 'react'],
    filename: relPath
  }).code;

  moduleRegistry[relPath] = transformed;
}

// Client-side loader
const bundleOutput = `
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
    return pathStr.replace(/\\\\/g, '/').replace(/^\\.\\//, '').replace(/\\.(js|jsx)$/, '');
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
${filesToBundle.map(file => {
  return `
  define("${file}", function(module, exports, require) {
${moduleRegistry[file]}
  });`;
}).join('\n')}

  // Start app
  console.log('✨ Launching Telugu Learning App...');
  createRequire('root')('src/main.jsx');
})();
`;

fs.writeFileSync(path.join(__dirname, 'dist', 'app.bundle.js'), bundleOutput, 'utf8');
console.log('✅ Bundle successfully created at dist/app.bundle.js (' + (bundleOutput.length / 1024).toFixed(1) + ' KB)!');
