declare module 'tailwindcss/lib/util/createUtilityPlugin' {
  const createUtilityPlugin: (
    themeKey: string,
    utilityVariations?: Array<unknown>,
    _?: { filterDefault?: boolean; type?: string },
  ) => unknown;
  export = createUtilityPlugin;
}
