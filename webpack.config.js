const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-main.js',
    path: path.resolve(__dirname, 'dist'),
  
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },

      {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
plugins: [new HtmlWebpackPlugin({template: 'public/index.html'}),
],


devServer: {
  historyApiFallback: true,
  open: true,
  compress: true,
  hot: true,
  port: 8888,
}, 
};