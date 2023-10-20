import { useContext } from "react";
import { PokemonContex } from "./MyContext";
import { Link } from 'react-router-dom';

const HomePage2 = () => {
  const { pokemon } = useContext(PokemonContex);
  
  return (
    <>
      
      <h2>Halaman 2 (Pokémon 11-20)</h2>
      {pokemon.slice(11, 19).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      <Link to="/" >
            Previous
          </Link>
 
    </>



    
  );
};

export default HomePage2;
