const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    sourceMapFilename: 'srcMap.js.map',
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, '/../client/dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [SRC_DIR],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
