//obtener el hash es cuando nos movamos a un personaje, mandamos #/id tenemos que obtener 
//ese id para saber a que personaje estoy accediendo y mandar el template correspondiente
//no hacen falta las llaves para retornar solo un elemento que accedes dentro de la logica
const getHash = () =>   
location.hash.slice(1).toLocaleLowerCase().split('/')[1]||'/';  //aqui parseamos para solo obtener el valor del id. sino encuentra, OR || mandar el slash /
//el navegador es locaton. al hash le quiero pásar valores, por eso lo parseamos, solo queremos el id  
export default getHash; 