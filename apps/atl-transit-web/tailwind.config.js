const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'selector',
   content: [
      join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
      ...createGlobPatternsForDependencies(__dirname)
   ],
   theme: {
      colors: {
         primary: 'hsl(7, 92%, 44%)',
         white: 'hsl(0, 0%, 100%)',
         black: 'hsl(0, 0%, 7%)',
         neutral01: 'hsl(0, 0%, 87%)',
         neutral02: 'hsl(0, 0%, 28%)',
         neutral03: 'hsl(0, 0%, 12%)',
         neutral: {
            100: 'hsl(0, 0%, 87%)',
            200: '',
            300: '',
            400: '',
            600: '',
            700: '',
            800: '',
            900: ''
         },
         success: 'hsl(117, 71%, 31%)',
         link: 'hsl(210, 100%, 40%)',
         red: 'hsl(351, 82%, 32%)',
         lightRed: 'hsl(15, 80%, 98%)',
         orange: 'hsl(7, 92%, 44%)',
         gold: 'hsl(43, 87%, 56%)',
         green: 'hsl(117, 71%, 31%)',
         lightBlue: 'hsl(210, 100%, 40%)',
         blue: 'hsl(213, 64%, 35%)',
         purple: 'hsl(256, 82%, 34%)',
         pink: 'hsl(0, 97%, 72%)',
         loading: {
            light: {
               from: 'hsl(0, 0%, 94%) 25%',
               via: 'hsl(0, 0%, 88%) 50%',
               to: 'hsl(0, 0%, 94%) '
            }
         },
         gradient: {
            orange: {
               0: '#E6431F',
               100: '#D92209'
            }
         }
      },
      extend: {
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'bottom-sheet-up': 'bottom-sheet-up 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
            modal: 'modal-scale-up 400ms cubic-bezier(0.55, 0, 0.15, 1) 0ms 1 normal both running, modal-fade-in 400ms cubic-bezier(0.55, 0, 0.15, 1) 0ms 1 normal both running'
         },
         keyframes: {
            'modal-scale-up': {
               '0%': { transform: 'scale(0.9)' },
               '100%': { transform: 'scale(1)' }
            },
            'modal-fade-in': {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' }
            },
            'bottom-sheet-up': {
               '0%': { transform: 'translateY(100%)' },
               '100%': { transform: 'translateY(0)' }
            }
         },
         boxShadow: {
            bottomBar: '0px -1px 32px 0px rgba(72, 72, 72, 0.12)'
         },
         content: {
            'checkmark-circle-filled': 'url("/assets/icons/filled/checkmark-circle.svg")',
            'checkmark-circle-regular': 'url("/assets/icons/regular/checkmark-circle.svg")',
            'dismiss-circle-filled': 'url("/assets/icons/filled/dismiss-circle.svg")',
            'error-circle-filled': 'url("/assets/icons/filled/error-circle.svg")',
            'info-filled': 'url("/assets/icons/filled/info.svg")',
            'question-circle-filled': 'url("/assets/icons/filled/dismiss-circle.svg")',
            'warning-filled': 'url("/assets/icons/filled/warning.svg")',
            'search-filled': 'url("/assets/icons/filled/search.svg")',
            'dismiss-filled': 'url("/assets/icons/filled/dismiss.svg")',
            'bookmark-filled': 'url("/assets/icons/filled/bookmark.svg")',
            'bookmark-add-filled': 'url("/assets/icons/filled/bookmark-add.svg")',
            'chevron-filled': 'url("/assets/icons/filled/chevron.svg")',
            'vehicle-subway-filled': 'url("/assets/icons/filled/vehicle-subway.svg")',
            'vehicle-bus-filled': 'url("/assets/icons/filled/vehicle-bus.svg")',
            'wallet-filled': 'url("/assets/icons/filled/wallet.svg")',
            'map-filled': 'url("/assets/icons/filled/map.svg")',
            'location-filled': 'url("/assets/icons/filled/location.svg")'
         },
         filter: {
            success:
               'invert(36%) sepia(98%) saturate(459%) hue-rotate(70deg) brightness(92%) contrast(96%)'
         }
      },
      fontSize: {
         1: '0.75rem',
         2: '0.8125rem',
         3: '0.875rem',
         4: '1rem',
         5: '1.125rem',
         6: '1.25rem',
         7: '1.5rem;',
         8: '2rem',
         9: '2.5rem'
      }
   },
   plugins: []
};
