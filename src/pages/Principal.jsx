import CardPokemon from '../components/CardPokemon'



const Principal = () => {
    
  


  return (
  <div className="container">
    <div className="input-group flex-nowrap mb-5">
        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass"></i></span>
        <input 
        type="text" 
        className="form-control" placeholder="Busca un pokemon" aria-label="Username" aria-describedby="addon-wrapping"/>
    </div>

    <CardPokemon/>
   
    
    
</div>
 
  )
  }

export default Principal