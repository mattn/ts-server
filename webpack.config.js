const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    mode: 'development',
    entry: './client/app.ts',
    output: {
      path: path.join(__dirname, "public/js"),
      filename: "app.js"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      modules: [
        "node_modules",
      ],
      extensions: [
        '.ts',
        '.js'
      ]
    }
  },
  {
    mode: 'development',
    entry: './server/server.ts',
    target: 'node',
    externals: [nodeExternals()], 
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          loader: 'tslint-loader',
          test: /\.ts$/,
          exclude: [
              /node_modules/
          ],
          options: {
              emitErrors: true
          }
        },
        {
          loader: 'ts-loader',
          test: /\.ts$/,
          exclude: [
              /node_modules/
          ],
          options: {
              configFile: 'tsconfig.json'
          }
        }
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ]
    },
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
];
