/* eslint-disable global-require */
const webpack = require('webpack');
const { BUILD_DIR, SRC_DIR, HTML_DIR } = require('./constants');

const config = {
  name: 'production',
  entry: [
    `${SRC_DIR}index.js`
  ],
  output: {
    path: HTML_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        include: SRC_DIR,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  postcss: webpackArg => [
    require('postcss-import')({ addDependencyTo: webpackArg }),
    require('postcss-url'),
    require('postcss-assets'),
    require('precss'),
    require('postcss-cssnext')
  ],
  devtool: 'source-map'
};

module.exports = config;
