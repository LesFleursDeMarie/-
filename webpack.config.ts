const path = require('path');

module.exports = {
  entry: './src/index.tsx',  // Punto de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',  // Asegura que los recursos se sirvan correctamente
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],  // Asegúrate de que Webpack resuelva archivos .css
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Transpila los archivos .ts y .tsx
        use: 'ts-loader', // Usamos ts-loader para compilar TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Regla para manejar archivos .css y .module.css
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',  // Esto es para los archivos .module.css
              },
            }
          },
        ],
      },     
      {
        test: /\.md$/,  // Carga archivos .md como texto
        use: 'raw-loader',  // Usamos raw-loader para leer contenido de Markdown
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Carga imágenes
        use: {
          loader: 'file-loader', // Usamos file-loader para manejar imágenes
          options: {
            name: '[name].[ext]', // Mantiene el nombre original
            outputPath: 'images/', // Carpeta donde se guardarán las imágenes
          },
        },
      },
      {
        test: /\.html$/,  // Carga archivos .html
        use: 'html-loader', // Usamos html-loader para gestionar archivos HTML
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // Carpeta donde servir los archivos estáticos
    historyApiFallback: true,  // Para SPA con React Router
    port: 3000,  // Puerto donde se servirá el proyecto
    hot: true,  // Habilita Hot Module Replacement
  },
  devtool: 'source-map', // Genera mapas de fuente para debugging
};
