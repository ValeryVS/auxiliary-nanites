module.exports = {
  entry: {
    main: [ './src/index.ts' ],
    polyfills: './src/polyfills.ts'
  },
  output: {
    path: 'dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}
