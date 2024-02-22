const path = require('path');

module.exports = {
    entry : {
      contact : './src/webpack-render/contact.js',
      home : './src/webpack-render/home.js',
      onerepmax : './src/webpack-render/oneRepMax.js',
      smolovjr: './src/webpack-render/smolovjr.js',
  
      
    },
    output: {
      filename:'[name].js',
      path: path.resolve(__dirname,'dist')
    },
    devServer: {
      port: 3010,
      watchContentBase: true,
    },
    module: {
      rules: [
        {
          test: /\.(?:js|jsx|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react',]
              ]
            }
          }
        }
      ]
    }
};