const path = require('path');

const rootPath = path.resolve(__dirname, './');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here

    // alias for architecture import
    appConfig.resolve.alias = {
    	kao: path.resolve(rootPath, 'src'),
    	'kao-components': path.resolve(rootPath, 'src/components'),
    };

    return appConfig;
  },
};
