<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <a href="https://github.com/ikcb/animated-tailwindcss"><img src="logo.svg" width="400" /></a>
  <br />
  A configuration to use <a href="https://github.com/animate-css/animate.css">Animate.css</a> with
  <a href="https://github.com/tailwindlabs/tailwindcss">Tailwind CSS</a>.
  <br />
  <br />
  <a href="https://github.com/animate-css/animate.css/releases/tag/v4.1.1">
    <img src="https://img.shields.io/badge/animate.css-v4.1.1-blue?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEyMiA4MyAxOTYgMTk2Ij48cGF0aCBkPSJtMTIyIDE4MSA5OC05OCA5OCA5OC05OCA5OC05OC05OHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjI4IDIwNWMtMyAxNC0yMCAxOC0zMiAxMi05LTUtMTEtMTgtOC0yOCA1LTEzIDIyLTE0IDM0LTE0aDVsLTEtMTBjLTEtNC01LTYtMTAtNi02LTEtMTEgMy0xNSA5bC0xMi0xMWMxMC0xOCA0NC0yMCA1NC0yIDIgNCAzIDkgMyAxNHYzM2MyIDAgNy0yIDcgMXYxM2wtMiAyLTEyLTFjLTYgMC05LTYtMTAtMTJoLTF6bS0xLTE4Yy03IDEtMTctMy0yMCA1LTEgMy0xIDcgMSAxMSA1IDQgMTUgMiAxOC0zbDEtMTN6Ii8+PC9zdmc+&style=flat-square" />
  </a>
  <a href="https://npm.im/animated-tailwindcss">
    <img src="https://img.shields.io/npm/dm/animated-tailwindcss?logo=npm&style=flat-square" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/animated-tailwindcss?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjczIDIxMSA1ODMgNTYxIj48cGF0aCBmaWxsPSIjM2VhNjM5IiBzdHJva2U9IiMxZTU0MWUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxOS4yIiBkPSJNMzk4IDU5NWM0MS0xNSA2Mi00NCA2Mi05M2E5NSA5NSAwIDAgMC0xOTAgMGMwIDUwIDI0IDgzIDYyIDk1bC02NyAxNjVDMTc1IDczOSA4MyA2MzMgODMgNTAyYTI4MiAyODIgMCAwIDEgNTY0IDBjMCAxMzMtOTEgMjM4LTE4MyAyNjF6Ii8+PHBhdGggZD0ibTYyNiA3NDUgMiAzYzIgMCAyIDIgNCA0bDQgOWgtNWwtNC04LTMtNS00LTFoLTV2MTRoLTV2LTMzaDEwbDkgMmMxIDIgMyA1IDMgOGwtMiA1LTQgMm0tMTEtMTN2MTFoNWw1LTFjMi0xIDItMiAyLTRzMC00LTItNWwtNS0xaC01Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNy41IiBkPSJNLTE3NCAzOTlhNDMgNDUgMCAxIDEtODYgMCA0MyA0NSAwIDEgMSA4NiAweiIgdHJhbnNmb3JtPSJtYXRyaXgoLjUzOTkgMCAwIC41MTY0MiA3MzkgNTM5KSIvPjwvc3ZnPg==&style=flat-square" />
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/commits-conventional-blue?logo=data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMTMzIDEzNCAxODMzIDE4MzMiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjQwMS43IiB4Mj0iMTY5Ny44IiB5MT0iMTY5OC4zIiB5Mj0iNDAyLjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmMzcwNjMiLz48c3RvcCBvZmZzZXQ9Ii4xIiBzdG9wLWNvbG9yPSIjZjI2OTcyIi8+PHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iI2YxNjI3ZiIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNmMDViODkiLz48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZWY1NzhmIi8+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2VmNTQ5MyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2VmNTM5NCIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTA0OS44IiBjeT0iMTA1MC4zIiByPSI3MTYuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMjAwIi8+PC9zdmc+&style=flat-square" />
  </a>
  <a href="https://ikcb.org/animated-tailwindcss">
    <img src="https://img.shields.io/netlify/f63b8a42-3984-4b43-96ff-7419625005e8?label=docs&logo=netlify&style=flat-square" />
  </a>
  <a href="https://deps.dev/npm/animated-tailwindcss">
    <img src="https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Funtitled-ir741raqc767.runkit.sh" />
  </a>
</p>

---

## Credits

- [Animate.css](https://github.com/animate-css/animate.css) &ndash; for animation utilities & keyframes &ndash; used under [the MIT license](https://cdn.jsdelivr.net/npm/animate.css@4.1.1/LICENSE).
- [Transform.tools](https://github.com/ritz078/transform) &ndash; for converting Animate.css to JS &ndash; used under [the MIT license](https://github.com/ritz078/transform/blob/master/LICENSE).
