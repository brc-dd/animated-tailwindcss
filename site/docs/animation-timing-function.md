# Animation Timing Function

| Class                        | Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)) |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `animate-ease`               | `animation-timing-function: ease;`                                                             |
| `animate-ease-linear`        | `animation-timing-function: linear;`                                                           |
| `animate-ease-in`            | `animation-timing-function: ease-in;`                                                          |
| `animate-ease-out`           | `animation-timing-function: ease-out;`                                                         |
| `animate-ease-in-out`        | `animation-timing-function: ease-in-out;`                                                      |
| `animate-[easing]`           | `animation-timing-function: easing;`                                                           |
| `animate-ease-[p0,p1,p2,p3]` | `animation-timing-function: cubic-bezier(p0, p1, p2, p4);`                                     |
| `animate-steps-start-[n]`    | `animation-timing-function: steps(n, jump-start);`                                             |
| `animate-steps-end-[n]`      | `animation-timing-function: steps(n, jump-end);`                                               |
| `animate-steps-both-[n]`     | `animation-timing-function: steps(n, jump-both);`                                              |
| `animate-steps-none-[n]`     | `animation-timing-function: steps(n, jump-none);`                                              |

Here `[easing]` is one of those listed at [easings.net](https://easings.net/) in
kebab-case. Note that some of the easing functions listed there cannot be
written in CSS.

If you are planning on using custom cubic-bezier function, we would recommend
using [cubic-bezier.com](https://cubic-bezier.com/) to find out what looks best.

Here `[n]` is one of `0..12`. You can also use arbitrary values instead.

## Examples

```html
<div class="animate-ease-in-out-sine">Foo</div>
<div class="animate-ease-[.25,.1,.25,1]">Bar</div>
<div class="animate-steps-start-5">Baz</div>
<div class="animate-steps-end-[14]">Qux</div>
```
