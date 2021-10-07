import { build as esBuild } from 'esbuild';
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

void esBuild({
  bundle: true,
  charset: 'utf8',
  entryPoints: ['dist/index.js'],
  external: ['lodash*', 'tailwindcss'],
  minify: true,
  outfile: 'dist/index.min.js',
  platform: 'node',
  target: 'es5',
})
  .then(() => {
    readdirSync(join(__dirname, 'dist')).forEach((file) => {
      if (!/^index(\.min\.js|\.d\.ts)$/.test(file)) unlinkSync(join(__dirname, 'dist', file));
    });

    copyFiles('.npmignore LICENSE README.md');
    copyFiles('package-dist.json', 'package.json');

    // merge type declarations
    const data = readFileSync(join(__dirname, 'dist', 'index.d.ts'));
    const fd = openSync(join(__dirname, 'dist', 'index.d.ts'), 'w+');
    writeSync(fd, `${readFileSync(join(__dirname, 'types', 'base.d.ts'))}\n${data}`);
    closeSync(fd);

    //
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
