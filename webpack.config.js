const path = require('path');

const config = {
  entry: { bundle: './app.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: 'public/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.mp3$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'music/',
          },
        }],
      },
    ],
  },
  mode: 'development',
  devtool: 'source-map',
};
module.exports = config;
