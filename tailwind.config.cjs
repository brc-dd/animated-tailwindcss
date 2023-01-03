const { withAnimations } = require('.')

module.exports = withAnimations({
  // prefix: 'tw-',
  content: ['./site/.vitepress/theme/*.vue'],
  safelist: [{ pattern: /animate-.*/ }],
})
