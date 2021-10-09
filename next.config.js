const path = require('path');
const loaderUtils = require('loader-utils');

const basePath = process.env.NODE_ENV === 'production' ? '/animated-tailwindcss' : '';

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'base64',
      6,
    )
    .replace(/^(-?\d|--)/, '_$1');

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: `${basePath}/`,
  basePath,
  env: { BASE_PATH: basePath },
  experimental: { esmExternals: 'loose' },
  optimizeFonts: false,
  poweredByHeader: false,
  reactStrictMode: true,

  webpack(config, { isServer }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader?.includes('css-loader') &&
          !moduleLoader.loader?.includes('postcss-loader')
        )
          moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;

        if (moduleLoader.loader?.includes('resolve-url-loader'))
          moduleLoader.options.sourceMap = false;
      });
    });

    if (!isServer) {
      const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

      config.optimization.minimizer = config.optimization.minimizer.filter(
        ({ constructor: { name } }) => name !== 'CssMinimizerPlugin',
      );

      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: [{ preset: ['advanced', { discardUnused: false }] }, {}],
          minify: [CssMinimizerPlugin.cssnanoMinify, CssMinimizerPlugin.cssoMinify],
        }),
      );
    }

    return config;
  },
};
