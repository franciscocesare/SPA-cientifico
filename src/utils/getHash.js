
//no hacen falta las llaves para retornar solo un elemento que accedes dentro de la logica
const getHash = () =>   
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';  //aqui parseamos para solo obtener el valor del id 

export default getHash;  ////////////////////hasta aca llegamos el ultimo 