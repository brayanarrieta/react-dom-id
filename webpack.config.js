const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    library: 'ReactDomId',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': 'ReactDOM',
  },

  module: {
    rules: [
      {
        test: /\.ts?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
