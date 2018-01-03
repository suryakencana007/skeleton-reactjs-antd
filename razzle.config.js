const path = require('path');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, './');

module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    const config = defaultConfig; // stay immutable here

    // alias for architecture import
    config.resolve.alias = Object.assign(
      {},
      config.resolve.alias, {
        kao: path.resolve(rootPath, 'src'),
        'kao-config': path.resolve(rootPath, 'config'),
        'kao-server': path.resolve(rootPath, 'src/server'),
        'kao-store': path.resolve(rootPath, 'src/store'),
        'kao-redux': path.resolve(rootPath, 'src/redux'),
        'kao-util': path.resolve(rootPath, 'src/utils'),
        'kao-components': path.resolve(rootPath, 'src/client/components'),
        'kao-client': path.resolve(rootPath, 'src/client'),
        'kao-containers': path.resolve(rootPath, 'src/client/containers'),
        'kao-assets': path.resolve(rootPath, 'src/client/assets'),
        'kao-styles': path.resolve(rootPath, 'src/client/styles'),
      },
    );

    if (target === 'node' && !dev) {
      config.plugins.push(new HtmlWebpackPlugin({
        title: 'Summer',
        filetype: 'pug',
        filename: 'pug.path',
        template: 'src/server/templates/index.prod.pug',
      }));
      config.plugins.push(new HtmlWebpackPugPlugin());
    }

    return config;
  },
};
