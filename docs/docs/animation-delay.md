<!-- markdownlint-disable MD046 MD033 -->

# Animation Delay

Class
~ Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) <external-link-icon />)

`animate-delay-[time]`

: Properties

    ```css
    animation-delay: time;
    ```

Here `[time]` is one of `{75, 100, 150, 200, 300, 500, 700, 1000}` and is interpreted like 75ms, 100ms, ... You can also use arbitrary values instead. Classic `animate-delay-{1..5}s` classes are also available.

## Examples

```html
<div class="animate-delay-300">Foo</div>
<div class="animate-delay-2s">Bar</div>
<div class="animate-delay-[1200ms]">Baz</div>
```
