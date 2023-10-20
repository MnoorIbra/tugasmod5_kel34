import { useContext } from "react";
import { PokemonContex } from "./MyContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { pokemon } = useContext(PokemonContex);
  
  return (
    <>
      
      <h2>Halaman 1 (Pokémon 1-10)</h2>
      {pokemon.slice(0, 10).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      <Link to="/Homepage2" >
            Next Page
          </Link>

    
    </>
  );
};

export default HomePage;
