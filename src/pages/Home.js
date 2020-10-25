//necesitamos una funcion que nos va a retornar la vista que necesitamos
const Home = () => {//las comillas inv permiten trabajar multilinea
//hacemos el ordenamiento para ver donde vamos a ubicar a cada uno de los personajes
    const view = `     
        <div class= "Characters> 
            <article class="Character-item">
                <a href="#/1/">
                    <img src="image" alt="name">
                         <h2>Name</h2>
                </a>        
            </article>
        </div> 

    `;
    return view;
};

export default Home;   //nos va a permitir identificar si este archivo puede ser utilizado en otros archivos JS