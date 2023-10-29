const path = require('path');

module.exports = {
  entry: {
    'vizicities': './src/vizicities.js',
    'vizicities-worker': './src/vizicities-worker.js',

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      THREE: require.resolve('three')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "css-loader"
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
            'babel-loader'
        ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
            'babel-loader'
        ]
      },
    ],
  },
  optimization: {
    minimize: false
  },
};