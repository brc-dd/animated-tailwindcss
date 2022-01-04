import type { DefaultTheme, SiteData } from 'vitepress';

const getSidebar = (): DefaultTheme.SideBarConfig => {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        { text: 'Differences from Vuepress', link: '/guide/differences-from-vuepress' },
      ],
    },
  ];
};

const config: Partial<SiteData<DefaultTheme.Config>> = {
  title: 'tw-Animated',
  description: 'animated-tailwindcss is a package that brings Animate.css classes to Tailwind CSS',
  themeConfig: { repo: 'ikcb/animated-tailwindcss', sidebar: { '/': getSidebar() } },
};

export default config;
