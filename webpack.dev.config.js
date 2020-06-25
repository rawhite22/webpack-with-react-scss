const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    index: 'index.html',
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react'],
            plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Hello World',
      meta: {
        description: 'testing description',
      },
    }),
  ],
};
