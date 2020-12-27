const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/js/app.js'
    ]
  },

  mode: 'production',

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: './styles/[name].css',
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false,
      filename: 'index.html'
    }),
  ],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
    ],
  },
}