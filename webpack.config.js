const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {


  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
   devServer: {
      contentBase: './dist',
      historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
  rules: [
    {

        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }

    }
  ]
}



};
