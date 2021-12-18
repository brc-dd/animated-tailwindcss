import get from 'lodash.get';
import set from 'lodash.set';

import { keyframes } from '@/keyframes';
import { utilities, legacyUtils } from '@/utilities';

const withAnimations: EntryPoint = (config = {}) => {
  // animations
  const animations: KeyValuePair = Object.fromEntries(
    Object.keys(keyframes).map((k) => [
      k,
      `${(utilities[k] as CSSProperties | undefined)?.animationDuration || '1s'}
      ${(utilities[k] as CSSProperties | undefined)?.animationTimingFunction || ''}
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
    Object.entries(utilities).flatMap(([animation, block]) => {
      if (animation in configAnimations) return [];

      const filtered: CSSBlock[string] = Object.fromEntries(
        Object.entries(block).filter(([key]) => !key.startsWith('animation')),
      );

      return Object.keys(filtered).length > 0 ? [[`.animate-${animation}`, filtered]] : [];
    }),
  );

  // plugins
  const plugins: PluginsConfig = [
    // static utilities
    ({ addUtilities }): void => {
      addUtilities({ ...prefixed, ...legacyUtils });
    },

    // dynamic utilities
    ({ matchUtilities }): void => {
      matchUtilities<string>({
        'animate-delay': (value) => ({ animationDelay: value }),
        'animate-distance': (value) => ({ '--animate-distance': value }),
        'animate-duration': (value) => ({ animationDuration: value }),
        'animate-repeat': (value) => ({ animationIterationCount: value }),
      });
    },
  ];

  const configPlugins: PluginsConfig = get(config, ['plugins'], []);
  set(config, 'plugins', [...plugins, ...configPlugins]);

  return config;
};

export = withAnimations;
