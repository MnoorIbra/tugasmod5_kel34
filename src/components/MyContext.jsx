import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const PokemonContex = createContext({})
const Provider = ({children})=> {
    const [pokemon, setPokemon] = useState([])
    

    const getDataPokemon = async ()=> {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        const final = response.data.results
        setPokemon(final)
       
    }

    useEffect(()=> {
        getDataPokemon()
    },[] )

    return (
        <PokemonContex.Provider value ={{ pokemon }}>
            {children}
        </PokemonContex.Provider>
    )
}

export default Provider
export {PokemonContex}

