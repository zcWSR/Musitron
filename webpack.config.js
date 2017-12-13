const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_PATH = path.join(__dirname, 'app');
const SRC_PATH = path.join(__dirname, 'src');
const MUSITRON_PATH = path.join(SRC_PATH, 'musitron');
const PLAYER_PATH = path.join(SRC_PATH, 'player');
const LYRIC_PATH = path.join(SRC_PATH, 'lyric');

module.exports = {
  cache: true,
  target: 'electron',
  devtool: 'source-map',
  entry: {
    musitron: path.join(MUSITRON_PATH, 'musitron.js'),
    player: path.join(PLAYER_PATH, 'player.js'),
    lyric: path.join(LYRIC_PATH, 'lyric.js')
  },
  output: {
    path: APP_PATH,
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [MUSITRON_PATH, PLAYER_PATH, LYRIC_PATH],
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['env', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    // }),
    new CopyWebpackPlugin([
      {
        from: path.join(SRC_PATH, 'main.js'),
        to: path.join(APP_PATH, 'main.js')
      },
      {
        from: path.join(SRC_PATH, 'main'),
        to: path.join(APP_PATH, 'main')
      },
      {
        from: path.join(MUSITRON_PATH, 'musitron.html'),
        to: path.join(APP_PATH, 'musitron.html')
      },
      {
        from: path.join(PLAYER_PATH, 'player.html'),
        to: path.join(APP_PATH, 'player.html')
      },
      {
        from: path.join(LYRIC_PATH, 'lyric.html'),
        to: path.join(APP_PATH, 'lyric.html')
      },
      {
        from: path.resolve(SRC_PATH, 'package.prod.json'),
        to: path.join(APP_PATH, 'package.json')
      }
    ])
  ]
};
