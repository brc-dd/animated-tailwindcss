const { withAnimations } = require('.')

module.exports = withAnimations({
  // prefix: 'tw-',
  content: ['./docs/.vitepress/theme/*.vue'],
  safelist: [{ pattern: /animate-.*/ }],
})
