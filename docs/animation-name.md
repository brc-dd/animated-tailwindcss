# Animation Name

| Class            | Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)) |
| ---------------- | ----------------------------------------------------------------------------------- |
| `animate-none`   | `animation-name: none;`                                                             |
| `animate-[name]` | `animation-name: name;`                                                             |

## Examples

```html
<div class="animate-bounce">Foo</div>
<div class="animate-[bounce_1s_ease-in-out_infinite]">Bar</div>
```

Refer [the demo](./animations) to see the available animations in action. You
can play with them [here](https://play.tailwindcss.com/TsNC9Yw9Nc).

Also refer the official Tailwind CSS documentation on
[using animations with arbitrary values](https://tailwindcss.com/docs/animation#arbitrary-values).
Note that these classes add some default properties and keyframe definitions
too.
