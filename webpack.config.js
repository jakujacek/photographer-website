module.exports = {
    entry: [//'./js/zadanie00.jsx'
            './js/app.jsx'
          ],
    output: {
        filename: './js/out.js'
    },
    watch: true,
    module: {
        loaders: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'stage-2', 'react']
              }
          },
          {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
          },
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=10000'
          },
          {
            test: /\.jpg$/,
            loader: "file-loader?name=[path][name].[ext]"
          }
        ]
    }
}
