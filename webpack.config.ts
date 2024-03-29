export const path = require('path');

module.exports = {
  plugins: [
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file-loader?name=/public/icons/[name].[ext]"
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true
          }
        }
      ],
    }
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};
