// https://github.com/tailwindlabs/play.tailwindcss.com/tree/master/src/monaco/ *.d.ts

type KeyValuePair<TKey extends keyof never = string, TValue = string> = Record<TKey, TValue>;

type ConfigUtils = {
  negative: <TInput, TOutput>(input: TInput) => TOutput;
  breakpoints: <TInput, TOutput>(input: TInput) => TOutput;
};

type ConfigDotNotationPath = string;

type ResolvableTo<TResult> =
  | TResult
  | ((theme: (path: ConfigDotNotationPath) => TResult, utils: ConfigUtils) => TResult);

type BaseConfig = {
  important: boolean | string;
  target: 'ie11' | 'relaxed';
  prefix: string | ((className: string) => string);
  separator: string;
};

type PurgeConfig =
  | Array<string>
  | false
  | { enabled: boolean; mode: 'all' | 'conservative'; content: Array<string> }
  | { enabled: boolean; options: { content: Array<string>; whitelist: Array<string> } };

type ContentConfig =
  | Array<string>
  | {
      files: Array<string>;
      safelist?: Array<string | { pattern: RegExp; variants?: Array<string> }>;
      transform?: Record<string, (content: string) => string>;
      extract?: Record<string, (content: string) => Array<string>>;
    };

type FutureConfig = Record<never, never> | 'all' | [];

type ExperimentalConfig = Record<never, never> | 'all' | [];

type DarkModeConfig = 'class' | 'media' | false;

type ThemeConfig = Partial<
  Record<string, unknown> & {
    extend: Partial<Omit<ThemeConfig, 'extend'>>;

    /** Responsiveness */
    screens: ResolvableTo<KeyValuePair>;

    /** Reusable base configs */
    colors: ResolvableTo<KeyValuePair | Record<string, Record<number | string, string>>>;
    spacing: ResolvableTo<KeyValuePair>;

    /** Background */
    backgroundColor: ThemeConfig['colors'];
    backgroundImage: ResolvableTo<KeyValuePair>;
    gradientColorStops: ThemeConfig['colors'];
    backgroundOpacity: ThemeConfig['opacity'];
    backgroundPosition: ResolvableTo<KeyValuePair>;
    backgroundSize: ResolvableTo<KeyValuePair>;
    backgroundOrigin: ResolvableTo<KeyValuePair>;

    /** Border */
    borderColor: ThemeConfig['colors'];
    borderOpacity: ThemeConfig['opacity'];
    borderRadius: ResolvableTo<KeyValuePair>;
    borderWidth: ResolvableTo<KeyValuePair>;

    /** Shadow */
    boxShadow: ResolvableTo<KeyValuePair>;

    /** Outline */
    outline: ResolvableTo<KeyValuePair>;

    /** Cursor */
    cursor: ResolvableTo<KeyValuePair>;

    /** Content */
    content: ResolvableTo<KeyValuePair>;

    /** Divider */
    divideColor: ThemeConfig['borderColor'];
    divideOpacity: ThemeConfig['borderOpacity'];
    devideWidth: ThemeConfig['borderWidth'];

    /** SVG */
    fill: ResolvableTo<KeyValuePair>;
    stroke: ResolvableTo<KeyValuePair>;
    strokeWidth: ResolvableTo<KeyValuePair>;

    /** Flexbox */
    flex: ResolvableTo<KeyValuePair>;
    flexGrow: ResolvableTo<KeyValuePair>;
    flexShrink: ResolvableTo<KeyValuePair>;

    /** Fonts */
    fontFamily: ResolvableTo<Record<string, Array<string>>>;
    fontSize: ResolvableTo<KeyValuePair>;
    fontWeight: ResolvableTo<KeyValuePair>;

    /** Sizes */
    height: ThemeConfig['spacing'];
    minHeight: ResolvableTo<KeyValuePair>;
    maxHeight: ResolvableTo<KeyValuePair>;
    width: ThemeConfig['spacing'];
    minWidth: ResolvableTo<KeyValuePair>;
    maxWidth: ResolvableTo<KeyValuePair>;
    aspectRatio: ResolvableTo<KeyValuePair>;

    /** Positioning */
    inset: ResolvableTo<KeyValuePair>;
    zIndex: ResolvableTo<KeyValuePair>;

    /** Text */
    letterSpacing: ResolvableTo<KeyValuePair>;
    lineHeight: ResolvableTo<KeyValuePair>;
    textColor: ThemeConfig['colors'];
    textOpacity: ThemeConfig['opacity'];
    textIndent: ThemeConfig['spacing'];

    /** Input */
    placeholderColor: ThemeConfig['colors'];
    placeholderOpacity: ThemeConfig['opacity'];
    caretColor: ThemeConfig['colors'];

    /** Lists */
    listStyleType: ResolvableTo<KeyValuePair>;

    /** Layout */
    margin: ThemeConfig['spacing'];
    padding: ThemeConfig['spacing'];
    space: ThemeConfig['spacing'];
    opacity: ResolvableTo<KeyValuePair>;
    order: ResolvableTo<KeyValuePair>;
    columns: ResolvableTo<KeyValuePair>;

    /** Images */
    objectPosition: ResolvableTo<KeyValuePair>;

    /** Grid */
    gap: ThemeConfig['spacing'];
    gridTemplateColumns: ResolvableTo<KeyValuePair>;
    gridColumn: ResolvableTo<KeyValuePair>;
    gridColumnStart: ResolvableTo<KeyValuePair>;
    gridColumnEnd: ResolvableTo<KeyValuePair>;
    gridTemplateRows: ResolvableTo<KeyValuePair>;
    gridRow: ResolvableTo<KeyValuePair>;
    gridRowStart: ResolvableTo<KeyValuePair>;
    gridRowEnd: ResolvableTo<KeyValuePair>;

    /** Transformations */
    transformOrigin: ResolvableTo<KeyValuePair>;
    scale: ResolvableTo<KeyValuePair>;
    rotate: ResolvableTo<KeyValuePair>;
    translate: ThemeConfig['spacing'];
    skew: ResolvableTo<KeyValuePair>;

    /** Transitions */
    transitionProperty: ResolvableTo<KeyValuePair>;
    transitionTimingFunction: ResolvableTo<KeyValuePair>;
    transitionDuration: ResolvableTo<KeyValuePair>;
    transitionDelay: ResolvableTo<KeyValuePair>;
    willChange: ResolvableTo<KeyValuePair>;

    /** Animations */
    animation: ResolvableTo<KeyValuePair>;
    keyframes: ResolvableTo<Record<string, Record<string, KeyValuePair | string>>>;

    /** Filters */
    blur: ResolvableTo<Record<string, Array<string> | string>>;
    brightness: ResolvableTo<Record<string, Array<string> | string>>;
    contrast: ResolvableTo<Record<string, Array<string> | string>>;
    dropShadow: ResolvableTo<Record<string, Array<string> | string>>;
    grayscale: ResolvableTo<Record<string, Array<string> | string>>;
    hueRotate: ResolvableTo<Record<string, Array<string> | string>>;
    invert: ResolvableTo<Record<string, Array<string> | string>>;
    saturate: ResolvableTo<Record<string, Array<string> | string>>;
    sepia: ResolvableTo<Record<string, Array<string> | string>>;
    backdropFilter: ResolvableTo<Record<string, Array<string> | string>>;
    backdropBlur: ResolvableTo<Record<string, Array<string> | string>>;
    backdropBrightness: ResolvableTo<Record<string, Array<string> | string>>;
    backdropContrast: ResolvableTo<Record<string, Array<string> | string>>;
    backdropGrayscale: ResolvableTo<Record<string, Array<string> | string>>;
    backdropHueRotate: ResolvableTo<Record<string, Array<string> | string>>;
    backdropInvert: ResolvableTo<Record<string, Array<string> | string>>;
    backdropOpacity: ResolvableTo<Record<string, Array<string> | string>>;
    backdropSaturate: ResolvableTo<Record<string, Array<string> | string>>;
    backdropSepia: ResolvableTo<Record<string, Array<string> | string>>;

    /** Components */
    container: Partial<{
      screens:
        | Array<string>
        | Record<string, { min: string; max: string }>
        | Record<string, string>;
      center: boolean;
      padding: KeyValuePair | string;
    }>;
  }
>;

type VariantsAPI = {
  variants: (path: string) => Array<string>;

  before: (
    toInsert: Array<string>,
    variant?: string,
    existingPluginVariants?: Array<string>,
  ) => Array<string>;

  after: (
    toInsert: Array<string>,
    variant?: string,
    existingPluginVariants?: Array<string>,
  ) => Array<string>;

  without: (toRemove: Array<string>, existingPluginVariants?: Array<string>) => Array<string>;
};

type VariantsConfig =
  | Array<string>
  | Record<string, Array<string> | ((api: VariantsAPI) => Array<string>)>
  | { extend: Record<string, Array<string>> };

type CorePluginsConfig = Array<string> | Record<string, boolean>;

type VariantConfig =
  | Array<string>
  | Partial<{ variants: Array<string>; respectPrefix: false; respectImportant: false }>;

type ValueType =
  | 'absolute-size'
  | 'any'
  | 'color'
  | 'family-name'
  | 'generic-name'
  | 'image'
  | 'length'
  | 'line-width'
  | 'lookup'
  | 'number'
  | 'percentage'
  | 'position'
  | 'relative-size'
  | 'url';

type PluginAPI = {
  /** Get access to the whole config */
  config: <TDefaultValue = TailwindConfig>(
    path?: ConfigDotNotationPath,
    defaultValue?: TDefaultValue,
  ) => TDefaultValue;

  /** Escape classNames */
  e: (className: string) => string;

  /** Shortcut for the theme section of the config */
  theme: <TDefaultValue>(path: ConfigDotNotationPath, defaultValue: TDefaultValue) => TDefaultValue;

  variants: <TDefaultValue>(
    path: ConfigDotNotationPath,
    defaultValue: TDefaultValue,
  ) => TDefaultValue;

  target: (path: ConfigDotNotationPath) => string;

  prefix: (selector: string) => string;

  /** Ability to add utilities. E.g.: .p-4 */
  addUtilities: (utilities: CSSBlock, variantConfig?: VariantConfig) => void;

  /** Ability to add components. E.g.: .btn */
  addComponents: (components: CSSBlock, variantConfig?: VariantConfig) => void;

  addBase: (base: CSSBlock) => void;

  addVariant: (
    name: string,
    generator: (api: {
      container: import('postcss').Container;
      separator: string;
      modifySelectors: (
        modifierFunction: (api: { className: string; selector: string }) => void,
      ) => void;
    }) => void,
  ) => void;

  matchUtilities: <T>(
    utilities: Record<string, (value: T) => unknown>,
    options?: Partial<{
      values: Record<string, T>;
      type: Array<ValueType> | ValueType;
      respectPrefix: boolean;
      respectImportant: boolean;
      respectVariants: boolean;
    }>,
  ) => void;

  corePlugins: (path: string) => boolean;

  postcss: typeof import('postcss');
};

type PluginCreator = (api: PluginAPI) => void;

type PluginsConfig = Array<PluginCreator | { handler: PluginCreator; config?: TailwindConfig }>;

/** The holy grail Tailwind config definition */
type TailwindConfig = Partial<
  BaseConfig &
    Record<string, unknown> & {
      presets: Array<TailwindConfig>;
      future: FutureConfig;
      experimental: ExperimentalConfig;
      purge: PurgeConfig;
      content: ContentConfig;
      darkMode: DarkModeConfig;
      theme: ThemeConfig;
      variants: VariantsConfig;
      corePlugins: CorePluginsConfig;
      plugins: PluginsConfig;
      mode: 'aot' | 'jit';
    }
>;

// ====================================== additional types ====================================== //

type CSSProperties = Record<`--${string}`, string> & import('csstype').Properties;
type CSSBlock = Record<string, CSSProperties | Record<string, CSSProperties>>;
type Keyframes = Record<string, Record<string, CSSProperties>>;
type EntryPoint = (config: TailwindConfig, _: { experimental?: boolean }) => TailwindConfig;

declare module 'tailwindcss/lib/util/createUtilityPlugin' {
  const createUtilityPlugin: (
    themeKey: string,
    utilityVariations?: Array<unknown>,
  ) => PluginCreator;

  export = createUtilityPlugin;
}
