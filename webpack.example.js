var path = require('path');

var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var JS_PATH = path.join(__dirname, 'assets', 'javascripts');

module.exports = {
  context: JS_PATH,

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      'node_modules',
      JS_PATH,
    ],
  },

  entry: {
    one: ['one'],
  },

  output: {
    chunkFilename: '[name]-[hash]-[chunkhash:16].js',

    // Add 16-char hash to the output file.
    filename: 'package-[name]-[hash].js',

    path: path.join(__dirname, 'public', 'javascripts'),

    // Ensures that webpack knows where to look for chunks, since `path` is
    // different in the prod config.
    publicPath: '/javascripts/',

    sourceMapFilename: '[file].map',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [JS_PATH],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.worker\.js$/,
        include: [/javascripts/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'worker-loader',
          options: {
            // Why doesn't this use output.publicPath? I don't know.
            publicPath: '/javascripts/'
          },
        },
      }
    ],
  },

  plugins: [
    new ManifestPlugin({
      fileName: 'webpack-manifest.json',
    }),

    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'chunkManifest',
    }),
  ]
};
