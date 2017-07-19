module.exports = {
  entry: __dirname + "/client/src/app.js",
  output: {
    path: __dirname + "/client/build/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
  rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
          plugins: [
            "transform-object-rest-spread"
          ]
        }
      }
    ]
  }
};
