---
title: Installation
---

<!-- markdownlint-disable MD025 MD033 -->

# Getting Started

In a project where you are using Tailwind CSS **v3**, run the following command:

:::: snippet
::: snippet-item NPM

```bash
npm install -D animated-tailwindcss
```

:::
::: snippet-item YARN

```bash
yarn add -D animated-tailwindcss
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

::: info NOTES

- If you are coming from classical Animate.css, please note that you need to reference the classes as `.animate-...` instead of `.animate__...`.

- Also, for compatibility reasons, the built-in animations (`spin`, `ping`, `pulse`, `bounce`) will be removed (or replaced by their Animate.css counterparts).

- The animations this package provides are not _exactly_ same as that of Animate.css. We have done some cleaning up to provide you with more consistent animations.

:::

## With Play CDN

It is as simple as this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome</title>

    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
      import withAnimations from 'https://unpkg.com/animated-tailwindcss';
      tailwind.config = withAnimations();
    </script>
  </head>

  <body>
    <div class="flex justify-center items-center h-screen">
      <div class="animate-tada animate-infinite animate-slow text-2xl">Hi!</div>
    </div>
  </body>
</html>
```

<iframe
  height="320"
  style="width: 100%"
  scrolling="no"
  title="animated-tailwindcss"
  src="https://codepen.io/divyansh_singh/embed/preview/podorWx?default-tab=result&editable=true&theme-id=dark"
  frameborder="0"
  loading="lazy"
  allowtransparency="true"
  allowfullscreen="true"
>
  See the Pen <a href="https://codepen.io/divyansh_singh/pen/podorWx"> animated-tailwindcss</a> by
  Divyansh Singh (<a href="https://codepen.io/divyansh_singh">@divyansh_singh</a>) on
  <a href="https://codepen.io">CodePen</a>.
</iframe>

::: warning

The Play CDN is not suitable for production builds, and the above example will not work if your browser does not support JS modules (_[Can I use?](https://caniuse.com/es6-module)_).

:::
