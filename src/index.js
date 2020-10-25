

import router from './routes'; //aca traemos toda la logica de routes
//1 logica para cuandoc carga por primera vez y otro para cuando hay un cambio en un hash
   window.addEventListener('load', router);    //saber si estamos, si esta escuchando. si la carga de la pagina sucedio
   window.addEventListener('hashchange', router);   //generamos otro que se encarga de escuchar las rutas. el hash al que me muevo