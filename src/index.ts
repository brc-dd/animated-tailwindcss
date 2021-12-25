import get from 'lodash.get';
import set from 'lodash.set';

import { delay, distance, duration, ease, fill, repeat } from '@/defaults';
import { keyframes } from '@/keyframes';
import { animationUtils, keyframeUtils } from '@/utilities';

const withAnimations: EntryPoint = (config = {}) => {
  // animations
  const animations: KeyValuePair = Object.fromEntries(
    Object.keys(keyframes).map((k) => [
      k,
      `${(keyframeUtils[k] as CSSProperties | undefined)?.animationDuration || '1s'}
      ${(keyframeUtils[k] as CSSProperties | undefined)?.animationTimingFunction || ''}
      both ${k}`.replace(/\s+/g, ' '),
    ]),
  );

  const configAnimations = get(config, ['theme', 'extend', 'animation'], {}) as KeyValuePair;
  set(config, ['theme', 'animation'], { ...animations, ...configAnimations });

  // patches
  Object.keys(animations).forEach((key) => {
    if (key.includes('In')) {
      if (!key.includes('slide')) set(keyframes, [key, 'from', 'opacity'], '0');
      set(keyframes, [key, 'from', 'visibility'], 'visible');
    }

    if (key.includes('Out')) {
      if (!key.includes('slide')) set(keyframes, [key, 'to', 'opacity'], '0');
      set(keyframes, [key, 'to', 'visibility'], 'hidden');
    }
  });

  // keyframes
  const configKeyframes = get(config, ['theme', 'extend', 'keyframes'], {}) as Keyframes;
  set(config, 'theme.keyframes', { ...keyframes, ...configKeyframes });

  // utilities
  const prefixed: CSSBlock = Object.fromEntries(
    Object.entries({ ...keyframeUtils, ...animationUtils }).flatMap(([util, block]) => {
      if (util in configAnimations) return [];

      const filtered: CSSBlock[string] =
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
      matchUtilities<string>(
        { 'animate-duration': (value) => ({ animationDuration: value }) },
        { values: duration },
      );

      matchUtilities<string>(
        { 'animate-ease': (value) => ({ animationTimingFunction: `cubic-bezier(${value})` }) },
        { values: ease },
      );

      matchUtilities<string>(
        { 'animate-delay': (value) => ({ animationDelay: value }) },
        { values: delay },
      );

      matchUtilities<string>(
        { 'animate-repeat': (value) => ({ animationIterationCount: value }) },
        { values: repeat },
      );

      matchUtilities<string>(
        { 'animate-fill': (value) => ({ animationFillMode: value }) },
        { values: fill },
      );

      matchUtilities<string>(
        { 'animate-distance': (value) => ({ '--animate-distance': value }) },
        { values: distance },
      );
    },
  ];

  const configPlugins: PluginsConfig = get(config, ['plugins'], []);
  set(config, 'plugins', [...plugins, ...configPlugins]);

  return config;
};

export = withAnimations;
