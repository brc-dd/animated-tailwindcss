import type { Theme } from 'vitepress';

import 'tailwindcss/tailwind.css';
import DefaultTheme from 'vitepress/theme';
import OutboundLink from 'vitepress/dist/client/theme-default/components/icons/OutboundLink.vue';
import './index.scss';

import { h, defineComponent } from 'vue';
import Snippet from './components/Snippet.vue';

const WrapNode = defineComponent({
  props: { value: { type: Object, required: true } },
  render() {
    return h(this.value);
  },
});

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp: ({ app }): void => {
    app.component('Snippet', Snippet);
    app.component('WrapNode', WrapNode);
    app.component('ExternalLinkIcon', OutboundLink);
  },
};
export default theme;
