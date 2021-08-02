const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
module.exports = {
  mode: 'development',
  entry: './lib.js', // input file of the JS bundle
  output: {
    filename: 'bundle.js', // output filename
    path: path.resolve(__dirname, 'dist'), // directory of where the bundle will be created at
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'hello-wasm.html'
    }),
    new WasmPackPlugin({
      crateDirectory: __dirname, // Define where the root of the rust code is located (where the cargo.toml file is located)
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  }
}