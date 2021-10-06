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
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/animated-tailwindcss?style=flat-square" />
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg?style=flat-square" />
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

Now configure your `tailwind.config.js` (create one by following the instructions [given here](https://tailwindcss.com/docs/configuration#creating-your-configuration-file)) to use the animations:

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
  purge: [],
  darkMode: false,
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
});

/* ------------------------------------------------- */

// BTW the smallest possible one is:
module.exports = require('animated-tailwindcss')();
```

</details>

## Getting Started

After proper config, you can use the classes of Animate.css just like you use that of Tailwind CSS.

Note that you will need to reference the classes as `.animate-...` instead of `.animate__...`

Also, for compatibility reasons, the built-in animations (`spin`, `ping`, `pulse`, `bounce`) will be removed (or replaced by their Animate.css counterparts).

### Example (Basic Usage)

```html
<h1 class="animate-bounce animate-animated animate-infinite">Bouncing Heading</h1>
```

Please refer [this page](https://ikcb.org/animated-tailwindcss) to learn about the available classes.

### Experimental Arbitrary Value Support

#### Configuration

Follow the [official guide](https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode) to enable JIT mode (enabled in Tailwind CSS v3 by default), and then modify your config file:

```js
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations(
  {
    mode: 'jit',
    purge: [
      // ...
    ],
    theme: {
      // ...
    },
    // ...
  },
  { experimental: true },
);
```

After configuration, you'll be able to customize `animation-delay`, `animation-duration`, `animation-iteration-count`:

```html
<div class="... animate-delay-[300ms] animate-duration-[5s] animate-repeat-[5] ...">...</div>
```

- This feature is currently in preview. Preview features are not covered by semantic versioning, and some details may change as we continue to refine them.

- Please [create an issue](https://github.com/ikcb/animated-tailwindcss/issues/new/choose) in case you encounter any bug or face version incompatibility. We would also like to hear your feedback on what more can be done.

- Switching to experimental mode does not remove the classic Animate.css utility classes like `animate-infinite`, `animate-repeat-1`, `animate-delay-1s`, `animate-faster`. You are free to use them if you wish.

- Also, note that just enabling the JIT mode does not enable the experimental arbitrary value support provided by this package. You need to explicitly opt-in by passing `{experimental: true}` as second param.

## Notes

### Using with [Tailwind IntelliSense](vscode:extension/bradlc.vscode-tailwindcss)

You don't need to do any additional configuration. IntelliSense will automatically detect the animation classes.

### Custom Animations/Keyframes

Refer to the [Tailwind docs](https://tailwindcss.com/docs/animation#customizing). If configured, any animation/keyframe extension/override will be applied properly.

### Accessibility

The configuration handles the accessibility in a similar way to Animate.css. Although, if you want more control over motion safety, you can use [`motion-safe`](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-safe) and [`motion-reduce`](https://tailwindcss.com/docs/hover-focus-and-other-states#motion-reduce) variants provided by Tailwind CSS.

#### Details

If a user prefers reduced motion (or if in print preview mode) -

- All elements having _exit_ animations will be transparent. They will also be hidden from the accessibility tree.
- All animations will complete instantly and will not repeat, unless you mark duration/iteration as important.

### Removing Unused Keyframes

Please refer: [Optimizing for Production - Tailwind CSS](https://tailwindcss.com/docs/optimizing-for-production#removing-unused-keyframes). (Won't be necessary in JIT mode.)

### Disclaimer

The animation classes this package provides are similar but not the same as the Animate.css utilities. We have done some cleaning up and provided you with better accessibility and more consistent animations.

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
