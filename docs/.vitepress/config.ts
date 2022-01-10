import type { DefaultTheme, UserConfig } from 'vitepress';

const getSidebar = (): Array<DefaultTheme.SideBarItem> => [
  { text: 'Getting Started', link: '/docs/installation' },
  { text: 'Customizing', children: [{ text: 'Animation Name', link: '/docs/animation-name' }] },
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
};

export default config;
