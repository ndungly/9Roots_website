const path = require('path');

// Define entry and output file

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: './bundle.js'
  },
  module: {
    rules: [{ // Array of rules that will convert JSX to ES5 Javascript.
      loader: 'babel-loader',
      test: /\.js$/, // Makes sure the babel-loader targets all js files.
      exclude: /node_modules/ // ...except for js files in the node_modules folder.
    }]
  }
};