# Animation Delay

| Class                  | Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)) |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `animate-delay-[time]` | `animation-delay: time;`                                                             |

Here `[time]` is one of `{75, 100, 150, 200, 300, 500, 700, 1000}` and is
interpreted like 75ms, 100ms... You can also use `animate-delay-{1..5}s` classes
or arbitrary values.

## Examples

```html
<div class="animate-delay-300">Foo</div>
<div class="animate-delay-2s">Bar</div>
<div class="animate-delay-[1200ms]">Baz</div>
```
