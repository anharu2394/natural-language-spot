const path = require('path');

module.exports = { 
  mode: 'development',
  devtool: "inline-source-map",
  entry: [path.resolve(__dirname, './src/app.ts')],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/')
  },  
  module: {
    rules: [
      {   
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          failOnHint: true
        }   
      },  
      {   
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ]   
  },  
  resolve: {
    extensions: ['.ts', '.tsx','.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
  },
}
