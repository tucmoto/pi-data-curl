const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './app.js',
  // Output configuration
  output: {
    // Output directory
    path: path.resolve(__dirname, 'dist'),
    // Output filename
    filename: 'bundle.js'
  },
  // Add loaders and plugins here if needed
  module: {
    rules: [
      // Example rule for processing JavaScript files with Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // Add any additional plugins here if needed
  // For example, HtmlWebpackPlugin for generating HTML files
  // plugins: [new HtmlWebpackPlugin()]
};
