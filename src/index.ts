import get from 'lodash.get';
import set from 'lodash.set';

import createUtilityPlugin from 'tailwindcss/lib/util/createUtilityPlugin';
import createPlugin from 'tailwindcss/plugin';

import keyframes from '@/keyframes';
import utilities from '@/utilities';

const withAnimations: Main = (config = {}, { experimental = false } = {}) => {
  // keyframes
  const configKeyframes: typeof keyframes = get(config, 'theme.extend.keyframes', {});
  set(config, 'theme.extend.keyframes', { ...keyframes, ...configKeyframes });

  // animation
  const animation = Object.fromEntries(Object.keys(keyframes).map((k) => [k, k]));
  const configAnimations: typeof animation = get(config, 'theme.extend.animation', {});

  set(config, 'theme.extend.animation', { ...animation, ...configAnimations });

  // utilities
  const prefixed = Object.fromEntries(
    Object.entries(utilities).flatMap(([k, v]) =>
      configAnimations[k] ? [] : [[`.animate-${k}`, v]],
    ),
  );

  // plugins
  const plugins: Array<unknown> = [];
  const configPlugins: typeof plugins = get(config, 'plugins', []);

  plugins.push(
    createPlugin(({ addUtilities }) => {
      addUtilities(prefixed);
    }),
  );

  // jit mode
  if (config.mode === 'jit' && experimental)
    plugins.push(
      createUtilityPlugin('animationDelay', [['animate-delay', ['--animate-delay']]]),
      createUtilityPlugin('animationDuration', [['animate-duration', ['--animate-duration']]]),
      createUtilityPlugin('animationIterationCount', [['animate-repeat', ['--animate-repeat']]]),
    );

  set(config, 'plugins', [...plugins, ...configPlugins]);
  return config;
};

export = withAnimations;
