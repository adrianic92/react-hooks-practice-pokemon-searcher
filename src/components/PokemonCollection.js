import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const allPokemon = pokemon.map( poke => {
    return (
      <PokemonCard key={poke.id} id={poke.id} name={poke.name} hp={poke.hp} front={poke.sprites.front} back={poke.sprites.back}/>
    )
  })

  return (
    <section>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {allPokemon}
      </Card.Group>
    </section>
  );
}

export default PokemonCollection;
