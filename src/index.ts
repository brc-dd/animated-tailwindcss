import get from 'lodash.get';
import set from 'lodash.set';

import createUtilityPlugin from 'tailwindcss/lib/util/createUtilityPlugin';

import keyframes from '@/keyframes';
import utilities from '@/utilities';

const withAnimations: EntryPoint = (config = {}, { experimental = false } = {}) => {
  // animation
  const animation: KeyValuePair = Object.fromEntries(Object.keys(keyframes).map((k) => [k, k]));
  const configAnimations: KeyValuePair = get(config, ['theme', 'extend', 'animation'], {});

  set(config, ['theme', 'animation'], { ...animation, ...configAnimations });

  // patches
  Object.keys(animation).forEach((key) => {
    if (key.includes('In')) {
      if (!key.includes('slide')) set(keyframes, [key, 'from', 'opacity'], '0');
      set(keyframes, [key, 'from', 'visibility'], 'visible');
    }

    if (key.includes('Out')) {
      if (!key.includes('slide')) set(keyframes, [key, 'to', 'opacity'], '0');
      set(keyframes, [key, 'to', 'visibility'], 'hidden');
      set(utilities, [key, '--animate-opacity'], '0');
    }
  });

  // keyframes
  const configKeyframes: Keyframes = get(config, ['theme', 'extend', 'keyframes'], {});
  set(config, 'theme.keyframes', { ...keyframes, ...configKeyframes });

  // utilities
  const prefixed: CSSBlock = Object.fromEntries(
    Object.entries(utilities).flatMap(([k, v]) =>
      configAnimations[k] ? [] : [[`.animate-${k}`, v]],
    ),
  );

  // plugins
  const plugins: PluginsConfig = [];
  const configPlugins: PluginsConfig = get(config, ['plugins'], []);

  plugins.push(({ addUtilities }) => {
    addUtilities(prefixed);
  });

  // jit mode
  if (experimental)
    plugins.push(
      createUtilityPlugin('animationDelay', [['animate-delay', ['--animate-delay']]]),
      createUtilityPlugin('animationDuration', [['animate-duration', ['--animate-duration']]]),
      createUtilityPlugin('animationIterationCount', [['animate-repeat', ['--animate-repeat']]]),
    );

  set(config, 'plugins', [...plugins, ...configPlugins]);
  return config;
};

export = withAnimations;
