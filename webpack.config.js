const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
      ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}