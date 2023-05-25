const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (!isDev) {
    configObj.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }

  return configObj;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './main.tsx',
  output: {
    filename: `./${fileName('js')}`,
    path: path.resolve(__dirname, 'app'),
    clean: true,
    publicPath: '',
    assetModuleFilename: `./img/[name].[ext]`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'app'),
    },
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: !isDev,
      }
    }),
    new MiniCssExtractPlugin({
      filename: `./style/${fileName('css')}`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, 'src'),
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'app/assets'),
          noErrorOnMissing: true,
        }
      ]
    }),
  ],
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath) => resPath.includes('.m.'),
                localIdentName: isDev
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64:8]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/i,
        exclude: /\.m.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: './img/[name].[ext]'
        }
      },
      {
        test: /\.(?:|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name].[ext]'
        }
      },
    ],
  }
};