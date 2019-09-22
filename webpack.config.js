const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
<<<<<<< HEAD
<<<<<<< HEAD
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
=======

>>>>>>> 68de6b9f4f55c53a2a80df82063507e3466efe5e
=======

>>>>>>> 953750bd2d12b6d0f374d7b57bce4f5d9fe44b34

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
<<<<<<< HEAD
<<<<<<< HEAD
	new CleanWebpackPlugin(),
=======
>>>>>>> 68de6b9f4f55c53a2a80df82063507e3466efe5e
=======
>>>>>>> 953750bd2d12b6d0f374d7b57bce4f5d9fe44b34
    new CopyPlugin([
      {
        from: "estore"
      }
    ])
<<<<<<< HEAD
<<<<<<< HEAD
  ],
  module: {
    rules: [
      {
        test: /\.js/ ,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
=======
  ]
};
>>>>>>> 68de6b9f4f55c53a2a80df82063507e3466efe5e
=======
  ]
};
>>>>>>> 953750bd2d12b6d0f374d7b57bce4f5d9fe44b34
