<!-- markdownlint-disable MD046 -->

# Animation Iteration Count

Utilities for controlling the repetition of CSS animations.

Class
~ Properties

`animate-infinite`

: Properties

    ```css
    animation-iteration-count: infinite;
    ```

`animate-repeat-[n]`

: Properties

    ```css
    animation-iteration-count: n;
    ```

Here `[n]` is one of `0..12`. You can also use arbitrary values instead.

## Examples

```html
<div class="animate-repeat-5">Foo</div>
<div class="animate-repeat-[14]">Bar</div>
```
