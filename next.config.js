/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require('path');
const runtimeCaching = require('./runtimeCaching');
const { seed } = require('./config');

module.exports = withPWA({
  productionBrowserSourceMaps: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader',
        },
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: isServer,
              publicPath: `/_next/static/`,
              outputPath: `${isServer ? '../' : ''}static/`,
              name: '[path][name].[ext]',
            },
          },
        ],
      });
    config.plugins = [
      ...config.plugins,
      new WebpackManifestPlugin({
        fileName: path.resolve(__dirname, './public/static/manifest.json'),
        // basePath: '',
        seed,
        generate: seed => seed,
      }),
    ];

    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    exclude: [ '/api/*', 'build-manifest.json', 'react-loadable-manifest.json' ],
    runtimeCaching,
    //...
  },
});
