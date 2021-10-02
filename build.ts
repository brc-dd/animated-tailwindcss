import { build as esBuild } from 'esbuild';
import { copyFileSync, readdirSync, unlinkSync } from 'fs';
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
    const files = readdirSync(join(__dirname, 'dist'));
    files.forEach((file) => {
      if (file !== 'index.min.js') unlinkSync(join(__dirname, 'dist', file));
    });

    copyFiles('.npmignore LICENSE README.md');
    copyFiles('package-dist.json', 'package.json');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
