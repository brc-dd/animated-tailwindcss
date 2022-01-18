const withAnimations = require('./dist');

module.exports = withAnimations({
  content: ['./docs/.vitepress/**/*.{html,js,vue,ts,md}', './docs/components/*.vue'],
  safelist: [{ pattern: /animate-.*/ }],
});
