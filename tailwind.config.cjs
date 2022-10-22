/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkcyan: '#3c8067',
      darkercyan: '#285746',
      cream: '#f2ebe3',
      darkblue: '#1c232b',
      blue: '#3e52a3',
      greyblue: '#6c7289',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
  },
  plugins: [],
};
