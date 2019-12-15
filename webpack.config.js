module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
      filename: 'webpack.bundle.js',
      library: 'demo',
      libraryTarget: 'umd'
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    }
  };