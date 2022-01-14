<!-- markdownlint-disable MD046 -->

# Animation Fill Mode

Utilities for controlling how a CSS animation applies styles to its target.

Class
~ Properties

`animate-fill-none`

: Properties

    ```css
    animation-fill-mode: none;
    ```

`animate-fill-forwards`

: Properties

    ```css
    animation-fill-mode: forwards;
    ```

`animate-fill-backwards`

: Properties

    ```css
    animation-fill-mode: backwards;
    ```

`animate-fill-both`

: Properties

    ```css
    animation-fill-mode: both;
    ```

By default `animation-fill-mode` is set to `both` for all animations in Animate.css.

You can use arbitrary values if you need to reference some globals or write the fill mode for multiple animations:

```html
<div class="animate-fill-[both,forwards,none]">Foo</div>
<div class="animate-fill-[unset]">Bar</div>
```
