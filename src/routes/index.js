
//aqui vamos a importar los templates que creamos y generar el manejo de rutas y el render!
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes'; //accedes a cada funcion de las creadas en cada import

//creamos las rutas
const routes = {
    '/': Home,
    '/:id': Character, //segun el id que me regrese es a que seccion lo voy a mandar
    '/contact': 'Contact',
};

//creamos el manejadodr para msotrar los elementos segun la logica
//async y await para esperar hasta que algo este sucediendo para seguir con el bloque
//declaramos unas constantes para saber adonde vamos a hacer render
const router = async () => {

    const header = null || document.getElementById('header');  //le pasamos null en caso que no la encuentre con el ID
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();  //para ver el template de header
    let hash = getHash(); //llamado a getHash para obtener el hash en el que se encuentra o la ruta en que se esta movienedo
    let route = await resolveRoutes(hash);  //aqui se puede demorar q resoult obtenga el hash, pasarlo y hacer las validaciones necesarias
    let render = routes[route] ? routes[route] : Error404;  //le pasamos validacion con ternarios (?), routes es la estructura y route la que obtenemos de traerla del hash y luego del resoult
    //si si retorna un elemento voy a mostrarlo, si no puedo acceder porque la ruta no existe : error404
    content.innerHTML = await render();
};                             

export default router;