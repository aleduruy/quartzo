const path = require('path');

module.exports = {
  entry: {
    bundle: './src/components/index.js',
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'web'),
    library: 'quartzo',
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
  devServer: {
    contentBase: path.join(__dirname, 'web'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /(.web)?.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  fileName: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
