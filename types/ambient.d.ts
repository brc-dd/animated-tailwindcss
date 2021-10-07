type CSSBlock = import('./base').CSSBlock;
type EntryPoint = import('./base').EntryPoint;
type Keyframes = Record<string, Record<string, import('./base').CSSProperties>>;
type KeyValuePair = import('./base').KeyValuePair;
type PluginsConfig = import('./base').PluginsConfig;

declare module 'tailwindcss/lib/util/createUtilityPlugin' {
  const createUtilityPlugin: (
    themeKey: string,
    utilityVariations?: Array<unknown>,
  ) => import('./base').PluginCreator;

  export = createUtilityPlugin;
}
