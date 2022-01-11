import type { DefaultTheme, UserConfig } from 'vitepress';
import type MarkdownIt from 'markdown-it';
import type Token from 'markdown-it/lib/token';

import markdownItContainer from 'markdown-it-container';
import markdownItDefList from 'markdown-it-deflist';

const getSidebar = (): Array<DefaultTheme.SideBarItem> => [
  { text: 'Getting Started', link: '/docs/installation' },
  {
    text: 'Customizing',
    children: [
      { text: 'Animation Name', link: '/docs/animation-name' },
      { text: 'Animation Duration', link: '/docs/animation-duration' },
    ],
  },
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
