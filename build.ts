import type { BuildOptions } from 'esbuild';
import { build as esBuild } from 'esbuild';
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';

import {
  closeSync,
  copyFileSync,
  openSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeSync,
} from 'fs';
import { join } from 'path';

const copyFiles = (src: string, dest = src): void => {
  const destList = dest.split(' ');
  src.split(' ').forEach((file, i) => copyFileSync(file, join(__dirname, 'dist', destList[i])));
};

const opts: BuildOptions = {
  bundle: true,
  charset: 'utf8',
  minify: true,
  plugins: [pnpPlugin()],
  target: 'es2019',
};

esBuild({
  ...opts,
  external: ['tailwindcss'],
  platform: 'node',

  entryPoints: ['dist/index.js'],
  outfile: 'dist/index-cjs.js',
})
  .then(() => {
    readdirSync(join(__dirname, 'dist')).forEach((file) => {
      if (!/^index(-cjs\.js|\.d\.ts)$/.test(file)) unlinkSync(join(__dirname, 'dist', file));
    });

    copyFiles('.npmignore LICENSE README.md');
    copyFiles('package-dist.json', 'package.json');

    // merge type declarations
    const data = readFileSync(join(__dirname, 'dist', 'index.d.ts'));
    const fd = openSync(join(__dirname, 'dist', 'index.d.ts'), 'w+');
    writeSync(fd, `${readFileSync(join(__dirname, 'types', 'base.d.ts'))}\n${data}`);
    closeSync(fd);

    // build for browser
    return esBuild({
      ...opts,
      format: 'esm',

      entryPoints: ['dist/index-cjs.js'],
      outfile: 'dist/index-esm.js',
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
