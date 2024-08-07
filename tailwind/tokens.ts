export const animations = {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'bottom-sheet-up': 'bottom-sheet-up 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
  modal:
    'modal-scale-up 400ms cubic-bezier(0.55, 0, 0.15, 1) 0ms 1 normal both running, modal-fade-in 400ms cubic-bezier(0.55, 0, 0.15, 1) 0ms 1 normal both running',
  'modal-close':
    'modal-scale-down 400ms cubic-bezier(0.55, 0, 0.15, 1) 0ms 1 reverse both running, modal-fade-out 400ms cubic-bezier(0.55, 0, 0.15, 1) 0ms 1 normal both running',
  'fade-up': 'fade-up 0.3s ease-out',
  'fade-down': 'fade-down 0.3s ease-out',
  'overlay-enter':
    'overlay-enter-view 1200ms linear(0,0.00506 1.18%,0.02044 2.46%,0.08322 5.391%,0.46561 17.652%,0.63901 24.342%,0.76663 31.093%,0.85981 38.454%,0.89862 42.934%,0.92965 47.845%,0.95366 53.305%,0.97154 59.516%,0.99189 74.867%,0.9991) both 1',
};

export const keyframes = {
  'modal-scale-up': {
    '0%': { transform: 'scale(0.9)' },
    '100%': { transform: 'scale(1)' },
  },
  'modal-scale-down': {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.9)' },
  },
  'modal-fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'modal-fade-out': {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  'bottom-sheet-up': {
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(0)' },
  },
  'overlay-enter-view': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'fade-up': {
    '0%': { opacity: '0', transform: 'translateY(8px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-down': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(100%)' },
  },
};

export const transitionTimingFunction = {
  'standard-easing':
    'linear(0,0.00506 1.18%,0.02044 2.46%,0.08322 5.391%,0.46561 17.652%,0.63901 24.342%,0.76663 31.093%,0.85981 38.454%,0.89862 42.934%,0.92965 47.845%,0.95366 53.305%,0.97154 59.516%,0.99189 74.867%,0.9991)',
};

export const backdropBlur = {
  base: '10px',
};

export const boxShadow = {
  'focused-state': '0 0 0 2px #fff, 0 0 0 4px #111',
  'focused-state-secondary': '0 0 0 2px #fff, 0 0 0 4px #878787',
  bottomBar: '0px -1px 32px 0px rgba(72, 72, 72, 0.12)',
  card: '2px 6px 16px 0px rgba(0, 45, 89, 0.12)',
  modal: 'box-shadow: 0px -5px 24px 0px rgba(0, 45, 89, 0.24);',
};

export const backgroundImage = {
  'custom-dotted':
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23DDDDDDFF' stroke-width='6' stroke-dasharray='6%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
  'map-placeholder': 'url("/assets/images/map.png")',
};

export const backgroundSize = {
  'test-size': '10px 10px', // Adjust the size to make the dots longer
};

export const fontSize = {
  1: '0.75rem', // 12px
  2: '0.8125rem', // 13px
  3: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.125rem', // 18px
  6: '1.25rem', // 20px
  7: '1.5rem;', // 24px
  8: '2rem', // 32px
  9: '2.5rem', // 40px
};

export const colors = {
  primary: 'hsl(220, 73%, 37%)', // #1948A3
  white: 'hsl(0, 0%, 100%)', // #FFFFFF
  black: 'hsl(0, 0%, 7%)', // #111111
  neutral: {
    100: 'hsl(0, 0%, 96%)', // #F5F5F5
    200: 'hsl(0, 0%, 91%)', // #E8E8E8
    300: 'hsl(0, 0%, 89%)', // #E3E3E3
    400: 'hsl(0, 0%, 87%)', // #DDDDDD
    500: 'hsl(0, 0%, 80%)', // #CCCCCC
    600: 'hsl(0, 0%, 53%)', // #878787
    700: 'hsl(0, 0%, 37%)', // #5E5E5E
    800: 'hsl(0, 0%, 28%)', // #474747
    900: 'hsl(0, 0%, 12%)', // ##1F1F1F
  },
  success: 'hsl(117, 71%, 31%)',
  link: 'hsl(210, 100%, 40%)',
  red: 'hsl(351, 82%, 32%)',
  lightRed: 'hsl(15, 80%, 98%)',
  orange: 'hsl(7, 92%, 44%)',
  gold: 'hsl(43, 87%, 56%)',
  green: 'hsl(117, 71%, 31%)',
  lightBlue: 'hsl(210, 100%, 40%)',
  pastelBlue: 'hsl(220, 73%, 37%)',
  blue: 'hsl(213, 64%, 35%)',
  purple: 'hsl(256, 82%, 34%)',
  pink: 'hsl(0, 97%, 72%)',
  loading: {
    light: {
      from: 'hsl(0, 0%, 94%) 25%',
      via: 'hsl(0, 0%, 88%) 50%',
      to: 'hsl(0, 0%, 94%) ',
    },
  },
  gradient: {
    orange: {
      0: '#E6431F',
      100: '#D92209',
    },
  },
};

export const fontFamily = {
  satoshi: ['Satoshi', 'sans-serif'],
};

export const icons = {
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
  'location-filled': 'url("/assets/icons/filled/location.svg")',
};
