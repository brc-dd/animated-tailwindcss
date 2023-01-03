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
          { text: 'Getting Started', link: '/installation' },
          { text: 'Available Animations', link: '/animations' },
          { text: 'Miscellaneous Notes', link: '/advanced' },
        ],
      },
      {
        text: 'Available Utilities',
        items: [
          { text: 'Animation Delay', link: '/animation-delay' },
          { text: 'Animation Direction', link: '/animation-direction' },
          { text: 'Animation Duration', link: '/animation-duration' },
          { text: 'Animation Fill Mode', link: '/animation-fill-mode' },
          { text: 'Animation Iteration Count', link: '/animation-iteration-count' },
          { text: 'Animation Name', link: '/animation-name' },
          { text: 'Animation Play State', link: '/animation-play-state' },
          { text: 'Animation Timing Function', link: '/animation-timing-function' },
          { text: 'Translation Distance', link: '/translation-distance' },
        ],
      },
    ],

    editLink: { pattern: 'https://github.com/brc-dd/animated-tailwindcss/edit/main/docs/:path' },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Divyansh Singh',
    },
  },
})
