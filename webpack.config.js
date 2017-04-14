var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.tsx",
    vendor: ["react", "react-dom", "jsoneditor"],
  },

  output: {
    publicPath: "/dist/",
    filename: "bundle.js",
    path: "/dist/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      'jseditor$': 'jsoneditor/dist/jsoneditor.min.js'
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },

      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};