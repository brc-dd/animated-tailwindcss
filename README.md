<p align="center">
    <img alt="Animated Tailwind CSS" src="./logo.svg" width="400">
    <br>
    A configuration to use <a href="https://github.com/animate-css/animate.css"
    rel="noopener noreferrer" target="_blank">Animate.css</a> with <a href=
    "https://github.com/tailwindlabs/tailwindcss" rel="noopener noreferrer"
    target="_blank">Tailwind CSS</a>.
    <br>
    <br>
</p>

![animate-css](https://img.shields.io/badge/Animate.css-v4.1.1-007EC6?style=flat-square) ![version](https://img.shields.io/npm/v/animated-tailwindcss?style=flat-square) ![license](https://img.shields.io/npm/l/animated-tailwindcss?style=flat-square)

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
const plugin = require('tailwindcss/plugin');
const { animation, keyframes, utilities } = require('animated-tailwindcss');

module.exports = {
  // ...
  theme: {
    extend: {
      // ...
      keyframes,
      animation,
    },
  },
  plugins: [
    // ...
    plugin(({ addUtilities }) => addUtilities(utilities)),
  ],
};
```

## Getting Started

After proper configuration, you can use the classes of Animate.css just like you use that of Tailwind CSS.

**Note that you'll need to reference the classes as `.animate-...` instead of `.animate__-...`**.

#### Example (Basic Usage):

```html
<h1 class="animate-animated animate-infinite animate-bounce">Bouncing Element</h1>
```

Please refer to the [Animate.css docs](https://animate.style/) to learn about the available classes.

## Notes

#### Using with [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

You do not need to do any additional configuration, the intellisense will automatically detect the animation classes.

#### Adding/modifying animations/keyframes

We currently do not provide any direct method to modify the existing (or add new) animations. But you can refer to the [Tailwind docs](https://tailwindcss.com/docs/animation#customizing), and [merge the object(s)](https://stackoverflow.com/q/27936772/11613622) exported by our configuration with your overrides/extensions.

#### Accessibility

`motion-safe` and `motion-reduce` variants will be available for use soon. For now, you can use the following CSS:

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
