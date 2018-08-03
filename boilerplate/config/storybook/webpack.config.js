const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = defaultConfig.module.rules.concat([
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('ts-loader')
    },

    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      exclude: /node_modules/
    }
  ]);
  defaultConfig.plugins.push(new TSDocgenPlugin());
  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.scss');
  return defaultConfig;
};
