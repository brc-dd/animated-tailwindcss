# Animation Fill Mode

| Class                    | Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)) |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| `animate-fill-none`      | `animation-fill-mode: none;`                                                             |
| `animate-fill-forwards`  | `animation-fill-mode: forwards;`                                                         |
| `animate-fill-backwards` | `animation-fill-mode: backwards;`                                                        |
| `animate-fill-both`      | `animation-fill-mode: both;`                                                             |

By default `animation-fill-mode` is set to `both` for all animations in
Animate.css.

You can use arbitrary values if you need to reference some globals or write the
fill mode for multiple animations:

```html
<div class="animate-fill-[both,forwards,none]">Foo</div>
<div class="animate-fill-[unset]">Bar</div>
```
