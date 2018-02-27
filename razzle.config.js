const path = require('path');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, './');

const babelOptions = ({ options, plugins }) => {
  // Get the correct `include` option, since that hasn't changed.
  // This tells Razzle which directories to transform.
  const razzleOptions = Object.assign({}, options, {
    plugins,
  });

  return razzleOptions;
};

module.exports = {
  modify(defaultConfig, { target, dev }) {
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
      }
    );

    // Safely locate Babel-Loader in Razzle's webpack internals
    const babelLoader = config.module.rules.findIndex(rule => rule.options && rule.options.babelrc);
    const { options } = config.module.rules[babelLoader];

    let razzleOptions = null;

    if (target === 'node' && !dev) {
      config.entry = Object.assign({}, {
        'server': config.entry,
        'argnode': path.resolve(rootPath, 'src/server/arguments.js')
      });
      config.output.filename = '[name].js';
      config.plugins.push(new HtmlWebpackPlugin({
        title: 'Summer',
        filetype: 'pug',
        filename: 'pug.path',
        template: 'src/server/templates/index.prod.pug',
      }));
      config.plugins.push(new HtmlWebpackPugPlugin());
    }
    if (target === 'web') {
      config.module.rules.push({
        test: /\.less$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'less-loader',
            options: {
              // theme vars, also can use theme.js instead of this.
              modifyVars: {
                '@primary-color': '#28B43C',
                // '@info-color': '#1DA57A',
                '@layout-header-background': '#fff',
                '@success-color': '',
                '@font-family-no-number': 'Source Sans Pro, sans-serif',
                '@border-radius-base': 0,
                '@border-radius-sm': 0
              },
            },
          },
        ],
      });
      razzleOptions = babelOptions({
        options,
        plugins: [
          ['import', { libraryName: 'antd', style: true }],
        ],
      });
    }
    if (razzleOptions) {
      config.module.rules[babelLoader].options = razzleOptions;
    }

    return config;
  },
};
