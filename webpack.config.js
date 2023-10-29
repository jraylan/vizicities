const path = require('path');

module.exports = {
  entry: {
    'vizicities': './src/vizicities.js',
    'vizicities-worker': './src/vizicities-worker.js',
    'vizicities.css': './src/vizicities.css'

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "css-loader"
      },
    ],
  },
  optimization: {
    minimize: false
  },
};