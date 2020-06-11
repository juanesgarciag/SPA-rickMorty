const path = require('path');  //permite acceder donde nos estamos moviendo en el proyecto, no importa si es local o en la nube

const HtmlWebpackPlugin = require('html-webpack-plugin');  //Nos permite trabajar con html

const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//configuración de lo que va a suceder

module.exports = {
    //archivo de entrada o punto de entrada
    entry: './src/index.js',
    //donde vamos a poner el proyecto estructurado, compilado y listo para producción -- output
    output: {
        path: path.resolve(__dirname, 'dist'),
        //nombre del archivo a generar, el que sale a producción
        filename: 'main.js',
    },
    //extensiones que utilizara nuestro proyecto
    resolve: {
        extensions: ['.js'],
    },
    //modulo con las reglas necesarias para trabajar
    //regla para babel
    module: {
        rules: [
            //son pasadas por un arreglo
            {
                //estructura de babel, requiere un test de como identificar los archivos
                //regex es una forma de establecer valores que queremos filtrar de una ruta, de unos elementos o archivos utilizados
                test: /\.js?$/,
                //excluye los archivos de lo que definamos
                exclude: /node_modules/,
                //configuración establecida para trabajar todo nuestro codigo
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false,
                        },
                    },
                    'css-loader',
                ],
            },
        ]
    },
    //plugins a utilizar

    plugins: [
        //webpackplugin que nos permite trabajar con los archivos html
        //instanciamos en la parte superior
        new HtmlWebpackPlugin(
            {
                //como voy a inyectar en un archivo html
                inject: true,
                //donde se encuentra en el template ppal
                template: './public/index.html',
                //a donde vamos a guardar este archivo y podemos darle un nombre
                filename: './index.html',
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'assets/[hash].css',
        }),
    ],
};


