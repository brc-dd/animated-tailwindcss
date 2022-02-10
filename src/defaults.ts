const range = (a: number, b?: number, c?: number): Array<number> =>
  [...Array(Math.abs(b != null ? Math.ceil((b - a) / (c ?? 1)) : a)).keys()].map(
    (k) => (k * (c ?? (a < 0 ? -1 : 1)) || 0) + (b != null ? a : 0),
  );

const expandArray = <T extends number | string>(
  arr: Array<T>,
  append = '',
  inKey = false,
  transform = (v: T): T => v,
): Record<string, string> =>
  arr.reduce((a, v) => ({ ...a, [`${v}${inKey ? append : ''}`]: `${transform(v)}${append}` }), {});

export const duration = expandArray([75, 100, 150, 200, 300, 500, 700, 1000], 'ms');

export const ease = {
  linear: '0,0,1,1',
  in: '.42,0,1,1',
  out: '0,0,.58,1',
  'in-out': '.42,0,.58,1',
  'in-sine': '.12,0,.39,0',
  'out-sine': '.61,1,.88,1',
  'in-out-sine': '.37,0,.63,1',
  'in-quad': '.11,0,.5,0',
  'out-quad': '.5,1,.89,1',
  'in-out-quad': '.45,0,.55,1',
  'in-cubic': '.32,0,.67,0',
  'out-cubic': '.33,1,.68,1',
  'in-out-cubic': '.65,0,.35,1',
  'in-quart': '.5,0,.75,0',
  'out-quart': '.25,1,.5,1',
  'in-out-quart': '.76,0,.24,1',
  'in-quint': '.64,0,.78,0',
  'out-quint': '.22,1,.36,1',
  'in-out-quint': '.83,0,.17,1',
  'in-expo': '.7,0,.84,0',
  'out-expo': '.16,1,.3,1',
  'in-out-expo': '.87,0,.13,1',
  'in-circ': '.55,0,1,.45',
  'out-circ': '0,.55,.45,1',
  'in-out-circ': '.85,0,.15,1',
  'in-back': '.36,0,.66,-.56',
  'out-back': '.34,1.56,.64,1',
  'in-out-back': '.68,-.6,.32,1.6',
};

export const delay = { ...duration, ...expandArray(range(6), 's', true) };

export const repeat = expandArray(range(13));

export const fill = expandArray(['none', 'forwards', 'backwards', 'both']);

export const distance: Record<string, string> = {
  px: '1px',
  ...expandArray(
    [
      ...range(0, 4, 0.5),
      ...range(4, 12, 1),
      ...range(12, 16, 2),
      ...range(16, 64, 4),
      ...range(64, 80, 8),
      ...range(80, 100, 16),
    ],
    'rem',
    false,
    (v) => v * 0.25,
  ),
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
  screen: '100vh',
};
