const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  //context: path.resolve(__dirname, 'src'),
  

  entry: {
    app: [
      './src/js/app.js'
    ]
  },

  mode: 'development',

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false,
      filename: 'index.html'
      //alwaysWriteToDisk: true
    }),
    //new HtmlWebpackHarddiskPlugin(),
  ],

  module: {
    rules: [
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

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    //publicPath: '/dist/',
    watchContentBase: true,
    open: true
  },
}