<!-- markdownlint-disable MD046 MD033 -->

# Animation Timing Function

Class
~ Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) <external-link-icon />)

`animate-ease`

: Properties

    ```css
    animation-timing-function: ease;
    ```

`animate-ease-linear`

: Properties

    ```css
    animation-timing-function: linear;
    ```

`animate-ease-in`

: Properties

    ```css
    animation-timing-function: ease-in;
    ```

`animate-ease-out`

: Properties

    ```css
    animation-timing-function: ease-out;
    ```

`animate-ease-in-out`

: Properties

    ```css
    animation-timing-function: ease-in-out;
    ```

`animate-[easing]`

: Properties

    ```css
    animation-timing-function: easing;
    ```

`animate-ease-[p0,p1,p2,p3]`

: Properties

    ```css
    animation-timing-function: cubic-bezier(p0, p1, p2, p4);
    ```

`animate-steps-start-[n]`

: Properties

    ```css
    animation-timing-function: steps(n, jump-start);
    ```

`animate-steps-end-[n]`

: Properties

    ```css
    animation-timing-function: steps(n, jump-end);
    ```

`animate-steps-both-[n]`

: Properties

    ```css
    animation-timing-function: steps(n, jump-both);
    ```

`animate-steps-none-[n]`

: Properties

    ```css
    animation-timing-function: steps(n, jump-none);
    ```

Here `[easing]` is one of those listed at [easings.net](https://easings.net/) in kebab-case. Note that some of the easing functions listed there cannot be written in CSS. If you are planning on using custom cubic-bezier function, we would recommend using [cubic-bezier.com](https://cubic-bezier.com/) to find out what looks best. Also, `[n]` is one of `0..12`. You can also use arbitrary values instead.

## Examples

```html
<div class="animate-ease-in-out-sine">Foo</div>
<div class="animate-ease-[.25,.1,.25,1]">Bar</div>
<div class="animate-steps-start-5">Baz</div>
<div class="animate-steps-end-[14]">Qux</div>
```
