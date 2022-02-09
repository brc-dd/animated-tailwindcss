import { delay, distance, duration, ease, fill, repeat } from '@/defaults';
import { keyframes } from '@/keyframes';
import { animationUtils, keyframeUtils } from '@/utilities';

const withAnimations: EntryPoint = (config = {}) => {
  /* eslint-disable no-param-reassign */
  config.theme = config.theme ?? {};

  // animations
  const animations: KeyValuePair = Object.fromEntries(
    Object.keys(keyframes).map((k) => [
      k,
      `${keyframeUtils[k]?.animationDuration || '1s'}
      ${keyframeUtils[k]?.animationTimingFunction || ''}
      both ${k}`.replace(/\s+/g, ' '),
    ]),
  );

  const configAnimations = config.theme.extend?.animation || {};
  config.theme.animation = { ...animations, ...configAnimations };
  delete config.theme.extend?.animation;

  // patches
  Object.keys(animations).forEach((key) => {
    if (key.includes('In')) {
      if (!key.includes('slide'))
        ((keyframes[key] = keyframes[key] ?? {}).from = keyframes[key]?.from ?? {}).opacity = 0;
    }

    if (key.includes('Out')) {
      if (!key.includes('slide'))
        ((keyframes[key] = keyframes[key] ?? {}).to = keyframes[key]?.to ?? {}).opacity = 0;
      ((keyframes[key] = keyframes[key] ?? {}).to = keyframes[key]?.to ?? {}).visibility = 'hidden';
    }
  });

  // keyframes
  const configKeyframes = config.theme.extend?.keyframes ?? {};
  config.theme.keyframes = { ...keyframes, ...configKeyframes };
  delete config.theme.extend?.keyframes;

  // utilities
  const prefixed: CSSBlock = Object.fromEntries(
    Object.entries({ ...keyframeUtils, ...animationUtils }).flatMap(([util, block]) => {
      if (util in configAnimations || !block) return [];

      const filtered: CSSProperties =
        util in animationUtils
          ? block // skip filtering
          : Object.fromEntries(
              Object.entries(block).filter(([key]) => !key.startsWith('animation')),
            );

      return Object.keys(filtered).length > 0 ? [[`.animate-${util}`, filtered]] : [];
    }),
  );

  // plugins
  const plugins: PluginsConfig = [
    // static utilities
    ({ addUtilities }): void => {
      addUtilities(prefixed);
    },

    // dynamic utilities
    ({ matchUtilities }): void => {
      matchUtilities(
        { 'animate-duration': (value) => ({ animationDuration: value }) },
        { values: duration },
      );

      matchUtilities(
        { 'animate-ease': (value) => ({ animationTimingFunction: `cubic-bezier(${value})` }) },
        { values: ease },
      );

      matchUtilities(
        {
          'animate-steps-start': (value) => ({
            animationTimingFunction: `steps(${value},jump-start)`,
          }),
        },
        { values: repeat },
      );

      matchUtilities(
        {
          'animate-steps-end': (value) => ({ animationTimingFunction: `steps(${value},jump-end)` }),
        },
        { values: repeat },
      );

      matchUtilities(
        {
          'animate-steps-both': (value) => ({
            animationTimingFunction: `steps(${value},jump-both)`,
          }),
        },
        { values: repeat },
      );

      matchUtilities(
        {
          'animate-steps-none': (value) => ({
            animationTimingFunction: `steps(${value},jump-none)`,
          }),
        },
        { values: repeat },
      );

      matchUtilities(
        { 'animate-delay': (value) => ({ animationDelay: value }) },
        { values: delay },
      );

      matchUtilities(
        { 'animate-repeat': (value) => ({ animationIterationCount: value }) },
        { values: repeat },
      );

      matchUtilities(
        { 'animate-fill': (value) => ({ animationFillMode: value }) },
        { values: fill },
      );

      matchUtilities(
        { 'animate-distance': (value) => ({ '--animate-distance': value }) },
        { values: distance },
      );
    },
  ];

  const configPlugins = config.plugins ?? [];
  config.plugins = [...plugins, ...configPlugins];
  /* eslint-enable no-param-reassign */

  return config;
};

export = withAnimations;
