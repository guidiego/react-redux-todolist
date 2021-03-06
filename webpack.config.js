const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let cssPluginPrefix = 'dist/';
let htmlPluginPrefix = './';
const bundleOutput = {
  path: path.resolve('docs'),
  filename: 'bundled.js',
  publicPath: '/',
};

if (process.env.NODE_ENV === 'production') {
  cssPluginPrefix = '';
  htmlPluginPrefix = '../';
  bundleOutput.publicPath = '/react-redux-todolist';
}


const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: `${htmlPluginPrefix}index.html`,
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: `${cssPluginPrefix}[name].bundle.css`,
});

module.exports = {
  entry: './src/index.jsx',
  output: bundleOutput,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 300,
            name: 'images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [htmlPlugin, cssPlugin],
};
