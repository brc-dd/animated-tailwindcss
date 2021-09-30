declare module 'tailwindcss/lib/util/createUtilityPlugin' {
  const createUtilityPlugin: (themeKey: string, utilityVariations?: Array<unknown>) => unknown;
  export = createUtilityPlugin;
}

declare module 'tailwindcss/plugin' {
  type PluginFunction = { addUtilities: (u: CSSBlock) => void };
  const createPlugin: (plugin: (pluginFunction: PluginFunction) => void) => unknown;
  export = createPlugin;
}

type TailwindConfig =
  | Partial<import('tailwindcss/tailwind-config').TailwindConfig> & { mode?: 'jit' };

type CSSBlock = Record<string, CSSProperties>;

type CSSExtensions =
  | Record<`--${string}`, number | string>
  | Record<`@apply ${string}`, Record<string, never>>;

type CSSProperties = CSSExtensions & import('csstype').Properties;

type Keyframes = Record<string, CSSBlock>;

type Main = (config: TailwindConfig, _: { experimental?: boolean }) => TailwindConfig;
