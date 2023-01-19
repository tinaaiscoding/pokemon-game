let allThePokemonArr = []

function print151Pokemon() {
  for (let i = 1; i < 4; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(response => response.json())
    .then(response => {
      const pokemon = response
      allThePokemonArr.push(`(${pokemon.id}, ${pokemon.name}, ${pokemon.sprites.front_default}, ${pokemon.stats[0].base_stat}, ${pokemon.stats[1].base_stat}, ${pokemon.stats[4].base_stat}, ${pokemon.stats[5].base_stat}, ARRAY['${pokemon.moves[0].move.name}', '${pokemon.moves[1].move.name}', '${pokemon.moves[2].move.name}', '${pokemon.moves[3].move.name}'], ${pokemon.name}, 0, 0)`)
      console.log(allThePokemonArr)
    })
  }
}

print151Pokemon()

// function printAfterFetch() {
//   console.log(allThePokemonArr)
// }

// printAfterFetch()


// ${pokemon.moves[0].move.name}