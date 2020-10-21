
//aqui vamos a importar los templates que creamos y generar el manejo de rutas y el render!
import header from '../templates/header';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';

//creamos las rutas
const routes = {
    '/': home,
    '/:id': character, //segun el id que me regrese es a que seccion lo voy a mandar
    '/contact': 'contact',
}

//creamos el manejadodr para msotrar los elementos segun la logica
//async y await para esperar hasta que algo este sucediendo para seguir con el bloque
//declaramos unas constantes para saber adonde vamos a hacer render
const router = async () => {

    const Header = null || document.getElementById('header');  //le pasamos null en caso que no la encuentre con el ID
    const content = null || document.getElementById('content');

    Header.innerHTML = await header();  //para ver el template de header
};

export default router;