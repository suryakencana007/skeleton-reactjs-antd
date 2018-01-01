const path = require('path');

const rootPath = path.resolve(__dirname, './');

module.exports = {
  resolve: {
    alias: {
      kao: path.resolve(rootPath, 'src'),
      'kao-server': path.resolve(rootPath, 'src/server'),
      'kao-store': path.resolve(rootPath, 'src/store'),
      'kao-redux': path.resolve(rootPath, 'src/redux'),
      'kao-components': path.resolve(rootPath, 'src/client/components'),
      'kao-client': path.resolve(rootPath, 'src/client'),
      'kao-containers': path.resolve(rootPath, 'src/client/containers'),
      'kao-assets': path.resolve(rootPath, 'src/client/assets'),
      'kao-styles': path.resolve(rootPath, 'src/client/styles'),
    },
  },
};
