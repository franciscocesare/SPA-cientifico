//ya tenemos las rutas, que acaba de obtener del usuario, a que template debe enviarlo?
//si no ecuentra, al error 404

//va a necesitar pasar la ruta obtenida por la fn anterior
const resolveRoutes = (route) => {

    if (route.length <= 3) { //con esta vali vamos a saber si pertenece al home o a algun personaje, porque estaria en 0 - 999 que es / - la cantidad max de personajes

        let valid_route = route === '/' ? route: '/:id'; // si es igual a /, sino es /id 
        return valid_route;
    }     // ? es SI ESTO ES TRUE, retur route : '/:id';

    return `${route}`;  // (` `templates literal) si no es el id, ni /, es para el abput, porque es > a 3, pero es otra cosa. luego comparamos con el gestor de rutas
    // es retorna /aboute

};

export default resolveRoutes; // de aca nos vamos al index.js para importar lo que acabamos de crear