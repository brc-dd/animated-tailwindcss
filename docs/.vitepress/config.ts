import type { DefaultTheme, UserConfig } from 'vitepress';
import type MarkdownIt from 'markdown-it';
import type Token from 'markdown-it/lib/token';

import markdownItContainer from 'markdown-it-container';
import markdownItDefList from 'markdown-it-deflist';

const getSidebar = (): Array<DefaultTheme.SideBarItem> => [
  { text: 'Getting Started', link: '/docs/installation' },
  {
    text: 'Available Utilities',
    children: [
      { text: 'Animation Name', link: '/docs/animation-name' },
      { text: 'Animation Duration', link: '/docs/animation-duration' },
      { text: 'Animation Timing Function', link: '/docs/animation-timing-function' },
      { text: 'Animation Delay', link: '/docs/animation-delay' },
      { text: 'Animation Iteration Count', link: '/docs/animation-iteration-count' },
      { text: 'Animation Direction', link: '/docs/animation-direction' },
      { text: 'Animation Fill Mode', link: '/docs/animation-fill-mode' },
      { text: 'Animation Play State', link: '/docs/animation-play-state' },
      { text: 'Translation Distance', link: '/docs/translation-distance' },
    ],
  },
  { text: 'Notes', link: '/docs/advanced' },
];

const config: UserConfig<DefaultTheme.Config> = {
  title: 'tw-Animated',
  description: 'animated-tailwindcss is a package that brings Animate.css classes to Tailwind CSS',
  themeConfig: {
    repo: 'ikcb/animated-tailwindcss',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: { '/': getSidebar() },
    sidebarDepth: 2,
  },

  markdown: {
    config: (md: MarkdownIt) => {
      md.use(markdownItContainer, 'snippet', {
        render: (tokens: Array<Token>, idx: number): string =>
          `<${tokens[idx].nesting !== 1 ? '/' : ''}snippet>\n`,
      });

      md.use(markdownItContainer, 'snippet-item', {
        render: (tokens: Array<Token>, idx: number): string => {
          const m = /^snippet-item\s+(.*)$/.exec(tokens[idx].info.trim());
          if (tokens[idx].nesting !== 1) return '</div>\n';
          return `<div title=${md.utils.escapeHtml(m?.[1] || '')}>\n`;
        },
      });

      md.use(markdownItDefList);
    },
  },
};

export default config;
