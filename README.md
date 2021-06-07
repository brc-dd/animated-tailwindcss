<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <img alt="Animated Tailwind CSS" src="./logo.svg" width="400">
  <br>
  A configuration to use <a href="https://github.com/animate-css/animate.css">
  Animate.css</a> with <a href="https://github.com/tailwindlabs/tailwindcss">
  Tailwind CSS</a>.
  <br>
  <br>
  <a href="https://github.com/animate-css/animate.css/releases/tag/v4.1.1">
    <img alt="animate-css" src=
    "https://img.shields.io/badge/animate.css-v4.1.1-007EC6?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/animated-tailwindcss">
    <img alt="version" src=
    "https://img.shields.io/npm/v/animated-tailwindcss?style=flat-square">
  </a>
  <a href="LICENSE">
    <img alt="license" src=
    "https://img.shields.io/npm/l/animated-tailwindcss?style=flat-square">
  </a>
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

### Using with [Tailwind Intellisense](vscode:extension/bradlc.vscode-tailwindcss)

You don't need to do any additional configuration, Intellisense will automatically detect the animation classes.

### Custom Animations/Keyframes

Refer to the [Tailwind docs](https://tailwindcss.com/docs/animation#customizing). If configured, any animation/keyframe extension/override will be applied properly.

### Accessibility

The configuration handles the accessibility in a similar way to Animate.css. Although, if you want more control over motion safety, you can use [`motion-safe`](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-safe) and [`motion-reduce`](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-reduce) variants provided by Tailwind CSS. The configuration also adds [`print`](https://tailwindcss.com/docs/breakpoints#styling-for-print) breakpoint for you.

### Removing Unused Keyframes

Please refer: [Optimizing for Production - Tailwind CSS](https://tailwindcss.com/docs/optimizing-for-production#removing-unused-keyframes). (Won't be necessary in JIT mode.)

---

## License

This configuration is licensed under [the MIT license](LICENSE).

## Credits

- [Animate.css](https://github.com/animate-css/animate.css) &ndash; for animation utilities and keyframes &ndash; used under [the MIT license](https://github.com/animate-css/animate.css/blob/main/LICENSE).
- [Transform.tools](https://github.com/ritz078/transform) &ndash; for converting Animate.css to JSS &ndash; used under [the MIT license](https://github.com/ritz078/transform/blob/master/LICENSE).

## Contributors

| ![Divyansh Singh](https://avatars1.githubusercontent.com/u/40380293?v=4&s=100) |
| :----------------------------------------------------------------------------: |
|      <sub> [Divyansh Singh](https://github.com/brc-dd) <br> Author </sub>      |
