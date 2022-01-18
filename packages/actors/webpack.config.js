const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

const isProduction = process.env.NODE_ENV == "production";

const port = 3001;
const publicPath = `http://localhost:${port}/`;

const config = {
  target: ["web", "es5"],
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    publicPath,
    clean: true,
  },
  devServer: {
    port,
    contentBase: "./dist",
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new ModuleFederationPlugin({
      name: "actors",
      filename: "remoteEntry.js",
      exposes: {
        "./Actors": "./src/App",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  optimization: {
    minimize: isProduction,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
