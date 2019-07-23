const WebpackModules = require('webpack-modules');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    };
    config.plugins.push(new WebpackModules());
    return config;
  }
};