const path = require('path'); // vamos a requerir traer path, llave node y saber donde nos estamos moviendo
//archivo para trabajar con html
const htmlWebpackPlugin = require('html-webpack-plugin');

//vamos a creare un modulo que vamos a exportar

module.exports = {
    entry: './src/index.js', //cual va a ser el punto de entrada
    output: {           //cual va a ser el punto de salida para mandar a produccion
        path: path.resolve(__dirname, 'dist'),   //path que importe, utilice resolver para saber donde se encuentra
        filename: 'main.js'  //el compilado que genero de esto cuando este listo pára produccion. dentro de DIST
    },

    //para definir las extensiones con las que va a trabajar nuestro proyecto
    resolve: {
        extensions: ['.js'],  //aca las extensiones con las que vas a trabajar

    },
    module: {  //dentro del module tenemos reglas para aser pasadas por array, y elementos dentro. REGLAs de babel  
        rules: [
            {
                test: /\.js?$/,   //establecer valores que queremos filtrar. la \indica punto dce entrada REGEX creado para saber cuales son los elementos
                exclude: /node_modules/, //para que excluya los node_moduls, para que no incopore todo
                use: { //va a utilizar un loader que instalamos de babel
                    loader: 'babel-loader',
                }
            }
        ]

    },
    plugins: [
        new htmlWebpackPlugin(
            {
                inject: true,    //como voy a un archivo html a injectar un valor
                template: './public/index.html',    //donde se encuentra el template inical
                filename: './index.html'    //hacia donde lo mandamos, nombre que tendra el archivoi
            }
        )

    ]

}

