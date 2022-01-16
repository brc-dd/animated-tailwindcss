---
title: Installation
---

<!-- markdownlint-disable MD025 -->

# Getting Started

In a project where you're using Tailwind CSS **v3**, run the following command:

:::: snippet
::: snippet-item NPM

```bash
npm install -D animated-tailwindcss@rc
```

:::
::: snippet-item YARN

```bash
yarn add -D animated-tailwindcss@rc
```

:::
::::

Then configure your `tailwind.config.js` to use the animations:

```js
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  // your (existing) Tailwind CSS config here
});
```

::: details Example

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

:::

After proper config, you can use the animations of Animate.css the same way as you use those of [Tailwind CSS](https://tailwindcss.com/docs/animation):

```html
<h1 class="animate-bounce animate-infinite">Forever Bouncing Heading</h1>
```

::: warning WARNINGS

- If you are coming from classical Animate.css, please note that you need to reference the classes as `.animate-...` instead of `.animate__...`.

- Also, for compatibility reasons, the built-in animations (`spin`, `ping`, `pulse`, `bounce`) will be removed (or replaced by their Animate.css counterparts).

- The animations this package provides are not _exactly_ same as that of Animate.css. We have done some cleaning up to provide you with more consistent animations.

:::
