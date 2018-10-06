const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require("webpack");

const client = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'target/webpack'),
    publicPath: '', // target/webpack
  },
  optimization: {
    //minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  },         
  entry: {
    loader: './src/ts/loader.tsx'
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["target/webpack"]), 
    new HtmlWebpackPlugin({ title: "Pipe stream" }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.DefinePlugin({
      ENV: {server: false}
    })
  ],
  devtool: /*'eval' ,*/ 'source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx$/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      } 
    ]
  }  
}

const server = {
  target: "node",
  output: {
    library: 'listener',
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'target/nodejs'),
    publicPath: '', // target/nodejs
  },
  entry: {
    listener: "./src/ts/listener.ts"
  },
  mode: "production",
  plugins: [
    //new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    new CleanWebpackPlugin(['target/nodejs']),
    new webpack.DefinePlugin({
      ENV: {server: true}
    })
  ],
  externals: {
    'xmlhttprequest': 'commonjs xmlhttprequest'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  //devtool: 'source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx$/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'ignore-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'ignore-loader'
        ]
      },
      {
        test: /jquery/,
        use: [
          'ignore-loader'
        ]
      },      
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      } 
    ]
  }
}

module.exports = [ client, server ];