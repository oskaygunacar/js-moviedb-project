const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Kullanmak istediğiniz HTML şablonu
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'), // İçeriklerin sunulacağı dizin <> Burada 'dist' klasör yolu sizin statik dosyalarınızın bulunduğu yere göre ayarlanmalıdır
      },
    compress: true, // Gzip sıkıştırma
    port: 8080 // Sunucunun çalışacağı port
  },
  module: { // Babel settings
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
