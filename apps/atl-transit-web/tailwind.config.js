const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

// tailwind
const colorsTokens = require('./src/tailwind/colors');
const animationTokens = require('./src/tailwind/animations');
const keyframesTokens = require('./src/tailwind/keyframes');
const iconTokens = require('./src/tailwind/icons');
const boxShadowTokens = require('./src/tailwind/box-shadow');
const filterTokens = require('./src/tailwind/filter-colors');
const fontSizeTokens = require('./src/tailwind/font-size');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
      ...createGlobPatternsForDependencies(__dirname)
   ],
   theme: {
      colors: {
         ...colorsTokens
      },
      extend: {
         animation: {
            ...animationTokens
         },
         keyframes: {
            ...keyframesTokens
         },
         boxShadow: {
            ...boxShadowTokens
         },
         content: {
            ...iconTokens
         },
         filter: {
            ...filterTokens
         },
         backdropBlur: {
            base: '10px'
         }
      },
      fontSize: {
         ...fontSizeTokens
      }
   },
   plugins: []
};
