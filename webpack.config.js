module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /(\.js|\.jsx)$/,
      loader: 'cssx-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
