---
title: Advanced
---

<!-- markdownlint-disable MD025 -->

# Notes

## Editor Setup

You do not need any additional configuration. IntelliSense will automatically detect the animations and utilities. Refer the [official docs](https://tailwindcss.com/docs/editor-setup) on setting up your editor.

## Customizing

Refer to the [Tailwind CSS docs](https://tailwindcss.com/docs/animation#using-custom-values). If present, any animation or keyframe customization should be applied properly. Create an issue on our GitHub if something is not working.

## Accessibility

Use `motion-safe` and `motion-reduce` variants provided by Tailwind CSS. `print:hidden` can also be used (on elements having exit animations) to hide them while printing.

Refer:

- [Prefers Reduced Motion | Handling Hover, Focus, and Other States - Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion)
- [Prefers Reduced Motion | Animation - Tailwind CSS](https://tailwindcss.com/docs/animation#prefers-reduced-motion)
- [Print Styles | Handling Hover, Focus, and Other States - Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles)

## Optimizing

Tailwind CSS v3 has JIT mode enabled by default. So, it will only generate the CSS you are actually using in your project. Please refer [the docs](https://tailwindcss.com/docs/optimizing-for-production) to learn more.

## Upgrade Guide

### From v2 to v3

- We now require at least Tailwind CSS v3. So first upgrade it. You can refer the Tailwind CSS [upgrade guide](https://tailwindcss.com/docs/upgrade-guide). Then run the command given in our [installation section](./installation).
- `animate-animated` class is no longer required. You can remove it.
- Accessibility measures are no longer enforced by us. Refer the [accessibility section](./advanced#accessibility).
- Remove any experimental options that you might earlier be passing to `withAnimations` wrapper. Those features are now covered by semantic versioning and are stable.
