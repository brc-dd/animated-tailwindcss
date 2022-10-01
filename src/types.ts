// https://github.com/tailwindlabs/play.tailwindcss.com/tree/master/src/monaco/ *.d.ts

import type * as CSS from 'csstype'
import type * as postcss from 'postcss'

export type KeyValuePair<TKey extends keyof never = string, TValue = string> = Record<TKey, TValue>

export type CSSProperties = CSS.Properties & Record<`--${string}`, string>

export type CSSBlock = Record<string, CSSProperties | undefined>

export type Keyframes = Record<string, CSSBlock | undefined>

export type ConfigUtils = {
  negative: <TInput, TOutput>(input: TInput) => TOutput
  breakpoints: <TInput, TOutput>(input: TInput) => TOutput
}

export type ConfigDotNotationPath = string

export type ResolvableTo<TResult> =
  | TResult
  | ((theme: (path: ConfigDotNotationPath) => TResult, utils: ConfigUtils) => TResult)

export type BaseConfig = {
  important: boolean | string
  target: 'ie11' | 'relaxed'
  prefix: string | ((className: string) => string)
  separator: string
}

export type PurgeConfig =
  | Array<string>
  | false
  | { enabled: boolean; mode: 'all' | 'conservative'; content: Array<string> }
  | { enabled: boolean; options: { content: Array<string>; whitelist: Array<string> } }

export type ContentConfig =
  | Array<string>
  | {
      files: Array<string>
      safelist?: Array<string | { pattern: RegExp; variants?: Array<string> }>
      transform?: Record<string, (content: string) => string>
      extract?: Record<string, (content: string) => Array<string>>
    }

export type FutureConfig = Record<never, never> | 'all' | []

export type ExperimentalConfig = Record<never, never> | 'all' | []

export type DarkModeConfig = 'class' | 'media' | false

export type BaseThemeConfig = {
  extend: Partial<Omit<BaseThemeConfig, 'extend'>>

  /** Responsiveness */
  screens: ResolvableTo<KeyValuePair>

  /** Reusable base configs */
  colors: ResolvableTo<KeyValuePair | Record<string, Record<number | string, string>>>
  spacing: ResolvableTo<KeyValuePair>

  /** Background */
  backgroundColor: BaseThemeConfig['colors']
  backgroundImage: ResolvableTo<KeyValuePair>
  gradientColorStops: BaseThemeConfig['colors']
  backgroundOpacity: BaseThemeConfig['opacity']
  backgroundPosition: ResolvableTo<KeyValuePair>
  backgroundSize: ResolvableTo<KeyValuePair>
  backgroundOrigin: ResolvableTo<KeyValuePair>

  /** Border */
  borderColor: BaseThemeConfig['colors']
  borderOpacity: BaseThemeConfig['opacity']
  borderRadius: ResolvableTo<KeyValuePair>
  borderWidth: ResolvableTo<KeyValuePair>

  /** Shadow */
  boxShadow: ResolvableTo<KeyValuePair>

  /** Outline */
  outline: ResolvableTo<KeyValuePair>

  /** Cursor */
  cursor: ResolvableTo<KeyValuePair>

  /** Content */
  content: ResolvableTo<KeyValuePair>

  /** Divider */
  divideColor: BaseThemeConfig['borderColor']
  divideOpacity: BaseThemeConfig['borderOpacity']
  devideWidth: BaseThemeConfig['borderWidth']

  /** SVG */
  fill: ResolvableTo<KeyValuePair>
  stroke: ResolvableTo<KeyValuePair>
  strokeWidth: ResolvableTo<KeyValuePair>

  /** Flexbox */
  flex: ResolvableTo<KeyValuePair>
  flexGrow: ResolvableTo<KeyValuePair>
  flexShrink: ResolvableTo<KeyValuePair>

  /** Fonts */
  fontFamily: ResolvableTo<Record<string, Array<string>>>
  fontSize: ResolvableTo<KeyValuePair>
  fontWeight: ResolvableTo<KeyValuePair>

  /** Sizes */
  height: BaseThemeConfig['spacing']
  minHeight: ResolvableTo<KeyValuePair>
  maxHeight: ResolvableTo<KeyValuePair>
  width: BaseThemeConfig['spacing']
  minWidth: ResolvableTo<KeyValuePair>
  maxWidth: ResolvableTo<KeyValuePair>
  aspectRatio: ResolvableTo<KeyValuePair>

  /** Positioning */
  inset: ResolvableTo<KeyValuePair>
  zIndex: ResolvableTo<KeyValuePair>

  /** Text */
  letterSpacing: ResolvableTo<KeyValuePair>
  lineHeight: ResolvableTo<KeyValuePair>
  textColor: BaseThemeConfig['colors']
  textOpacity: BaseThemeConfig['opacity']
  textIndent: BaseThemeConfig['spacing']

  /** Input */
  placeholderColor: BaseThemeConfig['colors']
  placeholderOpacity: BaseThemeConfig['opacity']
  caretColor: BaseThemeConfig['colors']

  /** Lists */
  listStyleType: ResolvableTo<KeyValuePair>

  /** Layout */
  margin: BaseThemeConfig['spacing']
  padding: BaseThemeConfig['spacing']
  space: BaseThemeConfig['spacing']
  opacity: ResolvableTo<KeyValuePair>
  order: ResolvableTo<KeyValuePair>
  columns: ResolvableTo<KeyValuePair>

  /** Images */
  objectPosition: ResolvableTo<KeyValuePair>

  /** Grid */
  gap: BaseThemeConfig['spacing']
  gridTemplateColumns: ResolvableTo<KeyValuePair>
  gridColumn: ResolvableTo<KeyValuePair>
  gridColumnStart: ResolvableTo<KeyValuePair>
  gridColumnEnd: ResolvableTo<KeyValuePair>
  gridTemplateRows: ResolvableTo<KeyValuePair>
  gridRow: ResolvableTo<KeyValuePair>
  gridRowStart: ResolvableTo<KeyValuePair>
  gridRowEnd: ResolvableTo<KeyValuePair>

  /** Transformations */
  transformOrigin: ResolvableTo<KeyValuePair>
  scale: ResolvableTo<KeyValuePair>
  rotate: ResolvableTo<KeyValuePair>
  translate: BaseThemeConfig['spacing']
  skew: ResolvableTo<KeyValuePair>

  /** Transitions */
  transitionProperty: ResolvableTo<KeyValuePair>
  transitionTimingFunction: ResolvableTo<KeyValuePair>
  transitionDuration: ResolvableTo<KeyValuePair>
  transitionDelay: ResolvableTo<KeyValuePair>
  willChange: ResolvableTo<KeyValuePair>

  /** Animations */
  animation: ResolvableTo<KeyValuePair>
  keyframes: ResolvableTo<Keyframes>

  /** Filters */
  blur: ResolvableTo<Record<string, Array<string> | string>>
  brightness: ResolvableTo<Record<string, Array<string> | string>>
  contrast: ResolvableTo<Record<string, Array<string> | string>>
  dropShadow: ResolvableTo<Record<string, Array<string> | string>>
  grayscale: ResolvableTo<Record<string, Array<string> | string>>
  hueRotate: ResolvableTo<Record<string, Array<string> | string>>
  invert: ResolvableTo<Record<string, Array<string> | string>>
  saturate: ResolvableTo<Record<string, Array<string> | string>>
  sepia: ResolvableTo<Record<string, Array<string> | string>>
  backdropFilter: ResolvableTo<Record<string, Array<string> | string>>
  backdropBlur: ResolvableTo<Record<string, Array<string> | string>>
  backdropBrightness: ResolvableTo<Record<string, Array<string> | string>>
  backdropContrast: ResolvableTo<Record<string, Array<string> | string>>
  backdropGrayscale: ResolvableTo<Record<string, Array<string> | string>>
  backdropHueRotate: ResolvableTo<Record<string, Array<string> | string>>
  backdropInvert: ResolvableTo<Record<string, Array<string> | string>>
  backdropOpacity: ResolvableTo<Record<string, Array<string> | string>>
  backdropSaturate: ResolvableTo<Record<string, Array<string> | string>>
  backdropSepia: ResolvableTo<Record<string, Array<string> | string>>

  /** Components */
  container: Partial<{
    screens: Array<string> | Record<string, { min: string; max: string }> | Record<string, string>
    center: boolean
    padding: KeyValuePair | string
  }>
}

export type ThemeConfig = Partial<BaseThemeConfig & Record<string, unknown>>

export type VariantsAPI = {
  variants: (path: string) => Array<string>

  before: (
    toInsert: Array<string>,
    variant?: string,
    existingPluginVariants?: Array<string>,
  ) => Array<string>

  after: (
    toInsert: Array<string>,
    variant?: string,
    existingPluginVariants?: Array<string>,
  ) => Array<string>

  without: (toRemove: Array<string>, existingPluginVariants?: Array<string>) => Array<string>
}

export type VariantsConfig =
  | Array<string>
  | Record<string, Array<string> | ((api: VariantsAPI) => Array<string>)>
  | { extend: Record<string, Array<string>> }

export type CorePluginsConfig = Array<string> | Record<string, boolean>

export type VariantConfig =
  | Array<string>
  | Partial<{ variants: Array<string>; respectPrefix: false; respectImportant: false }>

export type ValueType =
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
  | 'url'

export type PluginAPI = {
  /** Get access to the whole config */
  config: <TDefaultValue = TailwindConfig>(
    path?: ConfigDotNotationPath,
    defaultValue?: TDefaultValue,
  ) => TDefaultValue

  /** Escape classNames */
  e: (className: string) => string

  /** Shortcut for the theme section of the config */
  theme: <TDefaultValue>(path: ConfigDotNotationPath, defaultValue?: TDefaultValue) => TDefaultValue

  variants: <TDefaultValue>(
    path: ConfigDotNotationPath,
    defaultValue: TDefaultValue,
  ) => TDefaultValue

  target: (path: ConfigDotNotationPath) => string

  prefix: (selector: string) => string

  /** Ability to add utilities. E.g.: .p-4 */
  addUtilities: (utilities: CSSBlock, variantConfig?: VariantConfig) => void

  /** Ability to add components. E.g.: .btn */
  addComponents: (components: CSSBlock, variantConfig?: VariantConfig) => void

  addBase: (base: CSSBlock) => void

  addVariant: (
    name: string,
    generator: (api: {
      container: postcss.Container
      separator: string
      modifySelectors: (
        modifierFunction: (api: { className: string; selector: string }) => void,
      ) => void
    }) => void,
  ) => void

  matchUtilities: <T = string>(
    utilities: Record<string, (value: T) => CSSProperties>,
    options?: Partial<{
      values: Record<string, T>
      type: Array<ValueType> | ValueType
      respectPrefix: boolean
      respectImportant: boolean
      respectVariants: boolean
    }>,
  ) => void

  corePlugins: (path: string) => boolean

  postcss: typeof postcss
}

export type PluginCreator = (api: PluginAPI) => void

export type PluginsConfig = Array<
  PluginCreator | { handler: PluginCreator; config?: TailwindConfig }
>

/** The holy grail Tailwind config definition */
export type TailwindConfig = Partial<
  BaseConfig &
    Record<string, unknown> & {
      presets: Array<TailwindConfig>
      future: FutureConfig
      experimental: ExperimentalConfig
      purge: PurgeConfig
      content: ContentConfig
      darkMode: DarkModeConfig
      theme: ThemeConfig
      variants: VariantsConfig
      corePlugins: CorePluginsConfig
      plugins: PluginsConfig
      mode: 'aot' | 'jit'
    }
>

export type EntryPoint = (config: TailwindConfig) => TailwindConfig
