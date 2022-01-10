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
npm i -D animated-tailwindcss@rc

# or if using yarn
yarn add -D animated-tailwindcss@rc
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

### Basic Usage

```html
<h1 class="animate-bounce animate-infinite">Always Bouncing Heading</h1>
```

### Available Classes

- To customize `animation-name`:

  ```scss
  .animate-none {
    animation: none;
  }

  .animate-[name] {
    animation: default-duration default-timing-function both animation-name;
  }

  /* examples: */
  // class="animate-bounce"
  // class="animate-[bounce_1s_ease-in-out_infinite]"
  ```

  Refer [our demo page](https://ikcb.org/animated-tailwindcss) to see the available animations in action. Also, refer [the official Tailwind CSS documentation on using animations with arbitrary values](https://tailwindcss.com/docs/animation#arbitrary-values).

- To customize `animation-duration`:

  ```scss
  .animate-faster {
    animation-duration: 0.5s;
  }

  .animate-fast {
    animation-duration: 0.8s;
  }

  .animate-slow {
    animation-duration: 2s;
  }

  .animate-slower {
    animation-duration: 3s;
  }

  .animate-duration-[time] {
    animate-duration: time;
  }

  // here `time` is one of {75, 100, 150, 200, 300, 500, 700, 1000}
  // and is interpreted like 75ms, 100ms, ...; or use arbitrary values

  /* examples: */
  // class="animate-duration-300"
  // class="animate-duration-[2s]"
  ```

- To customize `animation-timing-function`:

  ```scss
  .animate-ease {
    animation-timing-function: ease;
  }

  .animate-ease-linear {
    animation-timing-function: linear;
  }

  .animate-ease-in {
    animation-timing-function: ease-in;
  }

  .animate-ease-out {
    animation-timing-function: ease-out;
  }

  .animate-ease-in-out {
    animation-timing-function: ease-in-out;
  }

  .animate-[easing] {
    animation-timing-function: easing;
  }

  // here `easing` is one of those listed at https://easings.net/ in kebab-case
  // NOTE some of the easing functions present there CAN'T be written in CSS

  .animate-ease-[p0,p1,p2,p3] {
    animation-timing-function: cubic-bezier(p0, p1, p2, p4);
  }

  // use https://cubic-bezier.com/ to find out what looks best

  .animate-steps-start-[n] {
    animation-timing-function: steps(n, start);
  }

  .animate-steps-end-[n] {
    animation-timing-function: steps(n, end);
  }

  .animate-steps-both-[n] {
    animation-timing-function: steps(n, jump-both);
  }

  .animate-steps-none-[n] {
    animation-timing-function: steps(n, jump-none);
  }

  // here `n` is one of 0-12 (both inclusive); or use arbitrary values

  /* examples: */
  // class="animate-ease-in-out-sine"
  // class="animate-ease-[.25,.1,.25,1]"
  // class="animate-steps-start-5"
  // class="animate-steps-end-[14]"
  ```

- To customize `animation-delay`:

  ```scss
  .animate-delay-[time] {
    animate-delay: time;
  }

  // here `time` is one of {75, 100, 150, 200, 300, 500, 700, 1000}
  // and is interpreted like 75ms, 100ms, ...; or use arbitrary values
  // classic animate-delay-[1|2|3|4|5]s are also supported

  /* examples: */
  // class="animate-delay-300"
  // class="animate-delay-2s"
  // class="animate-delay-[1200ms]"
  ```

- To customize `animation-iteration-count`:

  ```scss
  .animate-infinite {
    animation-iteration-count: infinite;
  }

  .animate-repeat-[n] {
    animation-iteration-count: n;
  }

  // here `n` is one of 0-12 (both inclusive); or use arbitrary values

  /* examples: */
  // class="animate-repeat-5"
  // class="animate-repeat-[14]"
  ```

- To customize `animation-direction`:

  ```scss
  .animate-normal {
    animation-direction: normal;
  }

  .animate-reverse {
    animation-direction: reverse;
  }

  .animate-alternate {
    animation-direction: alternate;
  }

  .animate-alternate-reverse {
    animation-direction: alternate-reverse;
  }
  ```

- To customize `animation-fill-mode`:

  ```scss
  .animate-fill-[mode] {
    animation-fill-mode: mode;
  }

  // here `mode` is a valid single-animation-fill-mode
  // use arbitrary values to set for multiple animations or use globals

  /* examples: */
  // class="animate-fill-forwards"
  // class="animate-fill-[both,forwards,none]"
  // class="animate-fill-[unset]"
  ```

- To customize `animation-play-state`:

  ```scss
  .animate-paused {
    animation-play-state: paused;
  }

  .animate-running {
    animation-play-state: running;
  }
  ```

## Notes

### Using with [Tailwind CSS IntelliSense](vscode:extension/bradlc.vscode-tailwindcss)

You don't need any additional configuration. IntelliSense will automatically detect the animation classes.

If you see an `--animate-distance` variable while hovering over a class, you can also modify its translating distance using a class like `animate-distance-[100px]`. Just to inform, following animation classes can be customized this way:

```txt
animate-backXY
animate-bounceXY
animate-fadeXYBig
animate-hinge
animate-zoomXY
```

where `X` is one of `{In, Out}` and `Y` is one of `{Down, Left, Right, Up}`. Tailwind CSS style widths are also available for `animate-distance` (e.g. `animate-distance-full`, `animate-distance-48`).

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

- We now require at least Tailwind CSS v3. So first upgrade it. Refer: [Tailwind CSS Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide). Then run the command given in [our installation section](#installation).

- `animate-animated` class is no longer required. You can remove it.

- Accessibility measures are no longer enforced by us. Refer [the accessibility section](#accessibility).

- Also, remove any experimental options that you might earlier be passing to `withAnimations` wrapper. Those features are now covered by semantic versioning and can be considered stable.

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
