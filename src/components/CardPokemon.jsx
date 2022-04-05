import axios from 'axios'
const CardPokemon = () => {
  let pokemones=[]
    
  async function consultarAPI() {
     for(let i=1; i>=1 && i<150; i++){
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await axios.get(url);
        pokemones.push(response.data)}
        
        //console.log(pokemones[1].name)
        //console.log(pokemones[1].types[0].type.name)
      //  console.log(pokemones[1].weight) 
       // console.log(pokemones[1].sprites["front_default"])
    }
    consultarAPI()


    const style ={
        width:'12rem'
    }
      
return({pokemones.map((e)=> 
  {  return( <div className="card" style={ style}>
          <img src=${e.sprites["front_default"]}  className="card-img-top" alt=""/>
          <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title">${e.name}</h5>
                  <p className="card-text">Tipo:${e.types[0].type.name}</p>
                  <p className="card-text">Peso:${e.weight}  Kg.</p>
            </div>
                  <a href="google.com" className="btn btn-primary ">Abrir</a>
          
      </div>)}
  } )}
  
  


export default CardPokemon;