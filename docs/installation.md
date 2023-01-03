---
title: Installation
---

# Getting Started

In a project where you're using Tailwind CSS **v3**, run this to install this
package:

```sh
npm add -D animated-tailwindcss
```

Then configure your `tailwind.config.js` to use the animations:

```js
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  // your (existing) Tailwind CSS config here
})
```

:::details Example

```js
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['./src/**/*.{html,js}'],
  theme: { extend: {} },
  plugins: [],
})
```

:::

After proper config, you can use the animations of Animate.css the same way as
you use those of Tailwind CSS:

```html
<h1 class="animate-bounce animate-infinite">Bouncing Heading</h1>
```

:::info Notes

- If you're coming from classical Animate.css, please note that you need to
  reference the classes using hyphen instead of underscores (e.g.,
  `animate-bounce` instead of `animate__bounce`).

- The built-in animations (`spin`, `ping`, `pulse`, `bounce`) are prefixed by
  `tw`. So, if you want Tailwind CSS' bounce you need to write
  `animate-twBounce` instead of `animate-bounce`.

- The animations this package provides are not exactly same as that of
  Animate.css. We have done some modifications to provide you with more
  consistent and customizable animations.

:::

## With Play CDN

It is as simple as this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Welcome</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    // [!code focus:6]
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
      import { withAnimations } from 'https://cdn.skypack.dev/animated-tailwindcss'
      tailwind.config = withAnimations()
    </script>
  </head>
  <body>
    <div class="flex h-screen items-center justify-center">
      <div class="animate-tada text-2xl animate-slow animate-infinite">Hi!</div>
    </div>
  </body>
</html>
```

<iframe
  height="300"
  style="width: 100%;"
  scrolling="no"
  title="animated-tailwindcss"
  src="https://codepen.io/divyansh_singh/embed/preview/podorWx?default-tab=html%2Cresult&editable=true&theme-id=dark"
  frameborder="no"
  loading="lazy"
  allowtransparency="true"
  allowfullscreen="true"
>
  See the Pen <a href="https://codepen.io/divyansh_singh/pen/podorWx">
  animated-tailwindcss</a> by Divyansh Singh (<a href="https://codepen.io/divyansh_singh">@divyansh_singh</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::warning

The Play CDN is not suitable for production builds, and the above example will
not work if your browser does not support ES6 modules
(_[Can I use?](https://caniuse.com/es6-module)&nbsp;_).

:::
