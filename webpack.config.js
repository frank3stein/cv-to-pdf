const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.resolve(__dirname, 'dist')
}

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: require("svelte-preprocess")({
              transformers: {
                postcss: true,
                postcss: {
                  plugins: [
                    require("postcss-import")({}), // need it to import css files into svelte documents
                    require("postcss-preset-env")({
                      // stage: 0,
                      features: { 
                        "nesting-rules": true,
                        "custom-properties":true
                      },
                      browsers: "last 2 versions"
                    }),
                    require("cssnano")()
                  ]
                }
              }
            })
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: [{ loader: "style-loader", options: { sourceMap: true } }],
          use: [
            { loader: "css-loader", options: { sourceMap: true } }
            // {
            //   loader: "postcss-loader",
            //   options: {
            //     sourceMap: true,
            //     ident: "postcss",
            //     plugins: loader => [
            //   require("postcss-import")({}),
            //   require("postcss-preset-env")({
            //     // stage: 0,
            //     features: { "nesting-rules": true },
            //     browsers: "last 10 versions"
            //   }),
            //   require("cssnano")()
            //     ]
            //   }
            // }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(), 
    new ExtractTextPlugin("styles.css"), 
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/*`)
    }),
  ]
};
