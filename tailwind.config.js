const daisyUI = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./pages/**/*.ts{,x}', './components/**/*.ts{,x}'],
  safelist: [{ pattern: /animate-.*/ }],
  theme: { extend: { fontFamily: { sans: ['Quicksand', ...defaultTheme.fontFamily.sans] } } },
  plugins: [daisyUI],
});
