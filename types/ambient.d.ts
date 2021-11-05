type CSSBlock = import('./base').CSSBlock;
type EntryPoint = import('./base').EntryPoint;
type Keyframes = Record<string, Record<string, import('./base').CSSProperties>>;
type KeyValuePair = import('./base').KeyValuePair;
type PluginsConfig = import('./base').PluginsConfig;

declare module 'tailwindcss/lib/util/createUtilityPlugin' {
  const createUtilityPlugin: (
    themeKey: string,
    utilityVariations?: Array<unknown>,
    options?: Partial<{
      filterDefault: boolean;
      respectPrefix: boolean;
      respectImportant: boolean;
      supportsNegativeValues: boolean;
      values: Record<string, unknown>;
    }>,
  ) => import('./base').PluginCreator;

  export = createUtilityPlugin;
}
