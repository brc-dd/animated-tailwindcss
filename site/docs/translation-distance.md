# Translation Distance

Certain animations support modifying their translation distance using
`--animate-distance` CSS variable. You can set it using the following utilities:

| Class                       | Properties                    |
| --------------------------- | ----------------------------- |
| `animate-distance-[length]` | `--animate-distance: length;` |

Here `[length]` is one of Tailwind CSS-style
[widths](https://tailwindcss.com/docs/width). You can also use arbitrary values
instead.

::: details

The following classes can be customized by these utilities:

```txt
animate-backXY
animate-bounceXY
animate-fadeXYBig
animate-hinge
animate-zoomXY
```

where `X` is one of `{In, Out}` and `Y` is one of `{Down, Left, Right, Up}`.

`animate-distance-{min, max, fit}` are not supported.

:::

## Examples

```html
<div class="animate-distance-48">Foo</div>
<div class="animate-distance-full">Bar</div>
<div class="animate-distance-[100px]">Baz</div>
```
