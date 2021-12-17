<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <a href="https://github.com/ikcb/animated-tailwindcss"><img src="logo.svg" width="400" /></a>
  <br />
  A configuration to use <a href="https://github.com/animate-css/animate.css">Animate.css</a> with
  <a href="https://github.com/tailwindlabs/tailwindcss">Tailwind CSS</a>.
  <br />
  <br />
  <a href="https://github.com/animate-css/animate.css/releases/tag/v4.1.1">
    <img src="https://img.shields.io/badge/animate.css-v4.1.1-007EC6?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/animated-tailwindcss">
    <img src="https://img.shields.io/npm/v/animated-tailwindcss?style=flat-square" />
    <img src="https://img.shields.io/npm/dm/animated-tailwindcss?logo=npm&style=flat-square" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/animated-tailwindcss?style=flat-square" />
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg?style=flat-square" />
  </a>
</p>

---

> This documentation is for the upcoming `animated-tailwindcss` v3. Refer [this](https://www.npmjs.com/package/animated-tailwindcss/v/2.6.1) for v2. [**Breaking Changes** in v3.](#upgrade-guide)

## Installation

In a project where you're using Tailwind CSS v3, run the following command:

```sh
npm i -D animated-tailwindcss@latest

# or if using yarn
yarn add -D animated-tailwindcss@latest
```

Now configure your `tailwind.config.js` to use the animations:

```js
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  // your (existing) Tailwind CSS config here
});
```

<details>
  <summary><b>Example</b></summary>
  <br />

```js
// tailwind.config.js
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [],
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
});
```

</details>

## Getting Started

After proper config, you can use the animations of Animate.css [the same way as you use those of Tailwind CSS](https://tailwindcss.com/docs/animation).

If you are coming from classical Animate.css, please note that you need to reference the classes as `.animate-...` instead of `.animate__...`.

Also, for compatibility reasons, the built-in animations (`spin`, `ping`, `pulse`, `bounce`) will be removed (or replaced by their Animate.css counterparts).

### Example (Basic Usage)

```html
<h1 class="animate-bounce animate-repeat-[infinite]">Bouncing Heading</h1>
```

Please refer to [our demo page](https://ikcb.org/animated-tailwindcss) to see the available classes in action.

### Arbitrary Value Support

You can customize `animation-delay`, `animation-duration`, `animation-iteration-count`:

```html
<div class="... animate-delay-[300ms] animate-duration-[5s] animate-repeat-[5] ...">...</div>
```

Also, refer [the official Tailwind CSS documentation on using animations with arbitrary values](https://tailwindcss.com/docs/animation#arbitrary-values).

## Notes

### Using with [Tailwind CSS IntelliSense](vscode:extension/bradlc.vscode-tailwindcss)

You don't need any additional configuration. IntelliSense will automatically detect the animation classes. However, it cannot _autocomplete_ the arbitrary valued classes. But it should show the rules set by a class if you hover on it.

If you see an `--animate-distance` variable while hovering over a class, you can also modify its translating distance using a class like this `animate-distance-[100px]`. Just to inform, following are the classes:

```txt
animate-backXY
animate-bounceXY
animate-fadeXYBig
animate-hinge
animate-zoomXY
```

where `X` is one of `{In, Out}` and `Y` is one of `{Down, Left, Right, Up}`.

### Custom Animations

Refer to the [Tailwind CSS docs](https://tailwindcss.com/docs/animation#customizing). If configured, any animation/keyframe customization will be applied properly.

### Accessibility

Use [`motion-safe` and `motion-reduce`](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion) variants [provided by Tailwind CSS](https://tailwindcss.com/docs/animation#prefers-reduced-motion). You can also use [`print:hidden`](https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles) on exit animations so that elements with such classes are not shown if someone is printing your website.

To get similar accessibility as the classical Animate.css do this:

```html
<div
  class="
    motion-reduce:animate-duration-[1ms] motion-reduce:animate-repeat-[1]
    print:animate-duration-[1ms] print:animate-repeat-[1]
    ...
  "
>
  ...
</div>

<!-- on exit animations also add these -->
<div class="motion-reduce:hidden print:hidden ...">...</div>
```

### Removing Unused Keyframes

Tailwind CSS v3 has JIT mode enabled by default. So, it will only generate the CSS you are _actually using_ in your project. Please refer [the docs](https://tailwindcss.com/docs/optimizing-for-production) to learn more.

### Disclaimer

The animation classes this package provides are similar but not the same as the Animate.css utilities. We have done some cleaning up and provided you with more consistent animations.

### Upgrade Guide

#### From v2 to v3

- We now requires at least Node.js v12 and Tailwind CSS v3. So first migrate to their newer versions. Refer: [Tailwind CSS Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide). Then run the command given in [the installation section](#installation).

- `animate-animated` class is no longer required. You can remove it.

- Accessibility measures are no longer enforced by us. Refer [accessibility section](#accessibility).

- Change

  |               this | to                          |
  | -----------------: | :-------------------------- |
  | `animate-infinite` | `animate-repeat-[infinite]` |
  | `animate-repeat-x` | `animate-repeat-[x]`        |
  | `animate-delay-xs` | `animate-delay-[xs]`        |
  |   `animate-faster` | `animate-duration-[0.5s]`   |
  |     `animate-fast` | `animate-duration-[0.8s]`   |
  |     `animate-slow` | `animate-duration-[2s]`     |
  |   `animate-slower` | `animate-duration-[3s]`     |

- Also remove experimental options that you might be earlier passing to `withAnimations` wrapper. Those features are now covered by semantic versioning and can be considered stable.

---

## License

This configuration is licensed under [the MIT license](LICENSE).

## Code of Conduct

This project and everyone participating in it are governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@ikcb.org](mailto:contact@ikcb.org).

## Contributing

All sorts of contributions are welcome here! But please follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) while creating PRs.

When you submit code changes, your submissions are understood to be under the same MIT license that covers the project. Feel free to contact the maintainers if that's a concern.

## Credits

- [Animate.css](https://github.com/animate-css/animate.css) &ndash; for animation utilities & keyframes &ndash; used under [Hippocratic License 2.1](https://github.com/animate-css/animate.css/blob/main/LICENSE).
- [Transform.tools](https://github.com/ritz078/transform) &ndash; for converting Animate.css to CSS-in-JS &ndash; used under [the MIT license](https://github.com/ritz078/transform/blob/master/LICENSE).
- [daisyUI](https://github.com/saadeghi/daisyui) &ndash; used to quickly prototype the docs/demo page &ndash; used under [the MIT license](https://github.com/saadeghi/daisyui/blob/master/LICENSE).

## Contributors

| ![Divyansh Singh](https://avatars1.githubusercontent.com/u/40380293?v=4&s=100) | ![Akash Tureha](https://avatars1.githubusercontent.com/u/72198360?v=4&s=100) |
| :----------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|           [Divyansh Singh](https://github.com/brc-dd) <br /> Author            |     [Akash Tureha](https://github.com/MrMischievousX) <br /> Contributor     |
