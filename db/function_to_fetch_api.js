let allThePokemonArr = []

function print151Pokemon() {
  for (let i = 1; i < 100; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(response => response.json())
    .then(response => {
      const pokemon = response
      allThePokemonArr.push(`(${pokemon.id}, '${pokemon.name}', '${pokemon.sprites.front_default}', ${pokemon.stats[0].base_stat}, ${pokemon.stats[1].base_stat}, ${pokemon.stats[4].base_stat}, ${pokemon.stats[5].base_stat}, ARRAY['${pokemon.moves[0].move.name}', '${pokemon.moves[1].move.name}', '${pokemon.moves[2].move.name}', '${pokemon.moves[3].move.name}'], '${pokemon.name}', 0, 0)`)
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

(10, 'caterpie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', 45, 30, 20, 45, ARRAY['tackle', 'string-shot', 'snore', 'bug-bite'], 'caterpie', 0, 0),
  (2, 'ivysaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 60, 62, 80, 60, ARRAY['swords-dance', 'cut', 'bind', 'vine-whip'], 'ivysaur', 0, 0),
  (1, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 45, 49, 65, 45, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind'], 'bulbasaur', 0, 0),
  (5, 'charmeleon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 58, 64, 65, 80, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charmeleon', 0, 0),
  (8, 'wartortle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', 59, 63, 80, 58, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'wartortle', 0, 0),
  (7, 'squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', 44, 48, 64, 43, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'squirtle', 0, 0),
  (9, 'blastoise', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', 79, 83, 105, 78, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'blastoise', 0, 0),
  (3, 'venusaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 80, 82, 100, 80, ARRAY['swords-dance', 'cut', 'bind', 'vine-whip'], 'venusaur', 0, 0),
  (4, 'charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 39, 52, 50, 65, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charmander', 0, 0),
  (6, 'charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 78, 84, 85, 100, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charizard', 0, 0)