import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'tw-Animated',
  description: 'animated-tailwindcss is a package that brings Animate.css classes to Tailwind CSS',
  cleanUrls: 'without-subfolders',

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/brc-dd/animated-tailwindcss' }],

    outline: false,

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/docs/installation' },
          { text: 'Available Animations', link: '/animations' },
          { text: 'Miscellaneous Notes', link: '/docs/advanced' },
        ],
      },
      {
        text: 'Available Utilities',
        items: [
          { text: 'Animation Delay', link: '/docs/animation-delay' },
          { text: 'Animation Direction', link: '/docs/animation-direction' },
          { text: 'Animation Duration', link: '/docs/animation-duration' },
          { text: 'Animation Fill Mode', link: '/docs/animation-fill-mode' },
          { text: 'Animation Iteration Count', link: '/docs/animation-iteration-count' },
          { text: 'Animation Name', link: '/docs/animation-name' },
          { text: 'Animation Play State', link: '/docs/animation-play-state' },
          { text: 'Animation Timing Function', link: '/docs/animation-timing-function' },
          { text: 'Translation Distance', link: '/docs/translation-distance' },
        ],
      },
    ],

    editLink: { pattern: 'https://github.com/brc-dd/animated-tailwindcss/edit/main/site/:path' },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Divyansh Singh',
    },
  },
})
