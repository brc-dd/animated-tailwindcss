---
title: Advanced
outline: [2, 3]
---

# Miscellaneous

## Editor Setup

You do not need any additional configuration. IntelliSense will automatically
detect the animations and utilities. Refer the
[official docs](https://tailwindcss.com/docs/editor-setup) on setting up your
editor.

## Customizing

Refer to the
[Tailwind CSS docs](https://tailwindcss.com/docs/animation#using-custom-values).
If present, any animation or keyframe customization should be applied properly.
Create an issue on our GitHub if something is not working.

## Accessibility

Use `motion-safe` and `motion-reduce` variants provided by Tailwind CSS.
`print:hidden` can also be used (for example, on elements having exit
animations) to hide them while printing.

Refer:

- [Prefers reduced motion | Handling Hover, Focus, and Other States - Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion)
- [Prefers reduced motion | Animation - Tailwind CSS](https://tailwindcss.com/docs/animation#prefers-reduced-motion)
- [Print styles | Handling Hover, Focus, and Other States - Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles)

## Optimizing

Tailwind CSS v3 has JIT mode enabled by default. So, it will only generate the
CSS you are actually using in your project. Please refer
[the docs](https://tailwindcss.com/docs/optimizing-for-production) to learn
more.

## Upgrade Guide

### From v3 to v4

Default export is removed. Use named export instead:

```ts
const withAnimations = require('animated-tailwindcss') // [!code --]
const { withAnimations } = require('animated-tailwindcss') // [!code ++]
```

### From v2 to v3

- We now require Tailwind CSS v3. So first upgrade it. You can refer their
  [upgrade guide](https://tailwindcss.com/docs/upgrade-guide).
- `animate-animated` class is no longer required. You can remove it.
- Accessibility measures are no longer enforced by us. Refer the
  [accessibility section](#accessibility).
- Remove any experimental options that you might earlier be passing to
  `withAnimations` wrapper. Those features are now covered by semantic
  versioning and are stable.
