---
sidebarDepth: 2
---

<!-- markdownlint-disable MD046 -->

# Animation Name

Utilities for controlling which animation is applied.

Class
~ Properties

`animate-none`

: Properties

    ```css
    animation: none;
    ```

`animate-[name]`

: Properties

    ```css
    animation: some-defaults animation-name;
    ```

## Examples

```html
<div class="animate-bounce">Foo</div>
<div class="animate-[bounce_1s_ease-in-out_infinite]">Bar</div>
```

Refer [our playground](https://ikcb.org/animated-tailwindcss) to see the available animations in action. Also, refer [the official Tailwind CSS documentation on using animations with arbitrary values](https://tailwindcss.com/docs/animation#arbitrary-values).
