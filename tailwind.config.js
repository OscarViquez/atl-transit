/** @type {import('tailwindcss').Config} */
import * as tokens from './tailwind/tokens';

module.exports = {
  content: ['./src/**/*.{html,css,ts}'],
  theme: {
    colors: tokens.colors,
    extend: {
      animation: tokens.animations,
      keyframes: tokens.keyframes,
      transitionTimingFunction: tokens.transitionTimingFunction,
      backgroundImage: tokens.backgroundImage,
      backgroundSize: tokens.backgroundSize,
      boxShadow: tokens.boxShadow,
      content: tokens.icons,
      backdropBlur: tokens.backdropBlur,
    },
    fontSize: tokens.fontSize,
  },
  plugins: [],
};
