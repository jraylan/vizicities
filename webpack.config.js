const path = require('path');

module.exports = {
  entry: {
    'vizicities': './src/vizicities.js',
    'vizicities-worker': './src/vizicities-worker.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  }
};