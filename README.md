<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <img alt="Animated Tailwind CSS" src="./logo.svg" width="400">
  <br>
  A configuration to use <a href="https://github.com/animate-css/animate.css"
  rel="noopener noreferrer" target="_blank">Animate.css</a> with <a href=
  "https://github.com/tailwindlabs/tailwindcss" rel="noopener noreferrer"
  target="_blank">Tailwind CSS</a>.
  <br>
  <br>
  <img alt="animate-css" src=
  "https://img.shields.io/badge/animate.css-v4.1.1-007EC6?style=flat-square">
  <img alt="version" src=
  "https://img.shields.io/npm/v/animated-tailwindcss?style=flat-square">
  <img alt="license" src=
  "https://img.shields.io/npm/l/animated-tailwindcss?style=flat-square">
</p>

---

## Installation

In a project using Tailwind CSS, run the following command:

```sh
npm install -D animated-tailwindcss
# or if using yarn
yarn add -D animated-tailwindcss
```

Now configure `tailwind.config.js` to use the animations:

```js
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  // ... your config here ...
});
```

## Getting Started

After proper configuration, you can use the classes of Animate.css just like you use that of Tailwind CSS.

**Note that you'll need to reference the classes as `.animate-...` instead of `.animate__...`**.

### Example (Basic Usage)

```html
<h1 class="animate-animated animate-infinite animate-bounce">Bouncing Element</h1>
```

Please refer to the [Animate.css docs](https://animate.style/) to learn about the available classes.

## Notes

### Using with [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

You don't need to do any additional configuration, Intellisense will automatically detect the animation classes.

### Custom Animations/Keyframes

Refer to the [Tailwind docs](https://tailwindcss.com/docs/animation#customizing). If configured, any animation/keyframe extension/override will be applied properly.

### Accessibility

`motion-safe` and `motion-reduce` variants will be available for use soon. For now, you can use following CSS:

```css
@media print, (prefers-reduced-motion: reduce) {
  .animated {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }

  .animated[class*='Out'] {
    opacity: 0;
  }
}
```
