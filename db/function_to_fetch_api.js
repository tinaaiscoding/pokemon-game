let allThePokemonArr = []

// wont work for ditto who is 132 as he crashes the loop as there is NO ${pokemon.moves[1].move.name} or above for Ditto, only has transform

function print151Pokemon() {
  for (let i = 133; i < 152; i++) {
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

INSERT INTO
  pokemons(pokedex_number, name, img, hp, attack, defense, speed, moves, nickname, win_count, user_id)
VALUES 
(1, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 45, 49, 65, 45, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind'], 'bulbasaur', 0, 0),
(2, 'ivysaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 60, 62, 80, 60, ARRAY['swords-dance', 'cut', 'bind', 'vine-whip'], 'ivysaur', 0, 0),
(3, 'venusaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 80, 82, 100, 80, ARRAY['swords-dance', 'cut', 'bind', 'vine-whip'], 'venusaur', 0, 0),
(4, 'charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 39, 52, 50, 65, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charmander', 0, 0),
(5, 'charmeleon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 58, 64, 65, 80, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charmeleon', 0, 0),
(6, 'charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 78, 84, 85, 100, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charizard', 0, 0),
(7, 'squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', 44, 48, 64, 43, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'squirtle', 0, 0),
(8, 'wartortle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', 59, 63, 80, 58, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'wartortle', 0, 0),
(9, 'blastoise', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', 79, 83, 105, 78, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'blastoise', 0, 0),
(10, 'caterpie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', 45, 30, 20, 45, ARRAY['tackle', 'string-shot', 'snore', 'bug-bite'], 'caterpie', 0, 0),
(11, 'metapod', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', 50, 20, 25, 30, ARRAY['string-shot', 'harden', 'iron-defense', 'bug-bite'], 'metapod', 0, 0),
(12, 'butterfree', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', 60, 45, 80, 70, ARRAY['razor-wind', 'gust', 'whirlwind', 'headbutt'], 'butterfree', 0, 0),
(13, 'weedle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png', 40, 35, 20, 50, ARRAY['poison-sting', 'string-shot', 'bug-bite', 'electroweb'], 'weedle', 0, 0),
(14, 'kakuna', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png', 45, 25, 25, 35, ARRAY['string-shot', 'harden', 'iron-defense', 'bug-bite'], 'kakuna', 0, 0),
(15, 'beedrill', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png', 65, 90, 80, 75, ARRAY['swords-dance', 'cut', 'headbutt', 'fury-attack'], 'beedrill', 0, 0),
(16, 'pidgey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png', 40, 45, 35, 56, ARRAY['razor-wind', 'gust', 'wing-attack', 'whirlwind'], 'pidgey', 0, 0),
(17, 'pidgeotto', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png', 63, 60, 50, 71, ARRAY['razor-wind', 'gust', 'wing-attack', 'whirlwind'], 'pidgeotto', 0, 0),
(18, 'pidgeot', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png', 83, 80, 70, 101, ARRAY['razor-wind', 'gust', 'wing-attack', 'whirlwind'], 'pidgeot', 0, 0),
(19, 'rattata', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png', 30, 56, 35, 72, ARRAY['cut', 'headbutt', 'tackle', 'body-slam'], 'rattata', 0, 0),
(20, 'raticate', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png', 55, 81, 70, 97, ARRAY['swords-dance', 'cut', 'headbutt', 'tackle'], 'raticate', 0, 0),
(21, 'spearow', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png', 40, 60, 31, 70, ARRAY['razor-wind', 'whirlwind', 'fly', 'headbutt'], 'spearow', 0, 0),
(22, 'fearow', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png', 65, 90, 61, 100, ARRAY['razor-wind', 'whirlwind', 'fly', 'headbutt'], 'fearow', 0, 0),
(23, 'ekans', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png', 35, 60, 54, 55, ARRAY['bind', 'slam', 'headbutt', 'body-slam'], 'ekans', 0, 0),
(24, 'arbok', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png', 60, 95, 79, 80, ARRAY['bind', 'slam', 'headbutt', 'body-slam'], 'arbok', 0, 0),
(25, 'pikachu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 35, 55, 50, 90, ARRAY['mega-punch', 'pay-day', 'thunder-punch', 'slam'], 'pikachu', 0, 0),
(26, 'raichu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png', 60, 90, 80, 110, ARRAY['mega-punch', 'pay-day', 'thunder-punch', 'slam'], 'raichu', 0, 0),
(27, 'sandshrew', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png', 50, 75, 30, 40, ARRAY['scratch', 'swords-dance', 'cut', 'sand-attack'], 'sandshrew', 0, 0),
(28, 'sandslash', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png', 75, 100, 55, 65, ARRAY['scratch', 'swords-dance', 'cut', 'sand-attack'], 'sandslash', 0, 0),
(29, 'nidoran-f', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png', 55, 47, 40, 41, ARRAY['scratch', 'cut', 'double-kick', 'headbutt'], 'nidoran-f', 0, 0),
(30, 'nidorina', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png', 70, 62, 55, 56, ARRAY['scratch', 'cut', 'double-kick', 'headbutt'], 'nidorina', 0, 0),
(31, 'nidoqueen', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png', 90, 92, 85, 76, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 'nidoqueen', 0, 0),
(32, 'nidoran-m', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png', 46, 57, 40, 50, ARRAY['cut', 'double-kick', 'headbutt', 'horn-attack'], 'nidoran-m', 0, 0),
(33, 'nidorino', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png', 61, 72, 55, 65, ARRAY['cut', 'double-kick', 'headbutt', 'horn-attack'], 'nidorino', 0, 0),
(34, 'nidoking', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png', 81, 102, 75, 85, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 'nidoking', 0, 0),
(35, 'clefairy', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png', 70, 45, 65, 35, ARRAY['pound', 'double-slap', 'mega-punch', 'fire-punch'], 'clefairy', 0, 0),
(36, 'clefable', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png', 95, 70, 90, 60, ARRAY['pound', 'double-slap', 'mega-punch', 'fire-punch'], 'clefable', 0, 0),
(37, 'vulpix', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png', 38, 41, 65, 65, ARRAY['headbutt', 'tackle', 'body-slam', 'take-down'], 'vulpix', 0, 0),
(38, 'ninetales', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png', 73, 76, 100, 100, ARRAY['headbutt', 'tackle', 'body-slam', 'take-down'], 'ninetales', 0, 0),
(39, 'jigglypuff', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', 115, 45, 25, 20, ARRAY['pound', 'double-slap', 'mega-punch', 'fire-punch'], 'jigglypuff', 0, 0),
(40, 'wigglytuff', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png', 140, 70, 50, 45, ARRAY['pound', 'double-slap', 'mega-punch', 'fire-punch'], 'wigglytuff', 0, 0),
(41, 'zubat', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png', 40, 45, 40, 55, ARRAY['razor-wind', 'gust', 'wing-attack', 'whirlwind'], 'zubat', 0, 0),
(42, 'golbat', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png', 75, 80, 75, 90, ARRAY['razor-wind', 'wing-attack', 'whirlwind', 'fly'], 'golbat', 0, 0),
(43, 'oddish', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png', 45, 50, 65, 30, ARRAY['swords-dance', 'cut', 'headbutt', 'take-down'], 'oddish', 0, 0),
(44, 'gloom', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png', 60, 65, 75, 40, ARRAY['swords-dance', 'cut', 'headbutt', 'take-down'], 'gloom', 0, 0),
(45, 'vileplume', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png', 75, 80, 90, 50, ARRAY['swords-dance', 'cut', 'headbutt', 'body-slam'], 'vileplume', 0, 0),
(46, 'paras', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png', 35, 70, 55, 25, ARRAY['scratch', 'swords-dance', 'cut', 'headbutt'], 'paras', 0, 0),
(47, 'parasect', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png', 60, 95, 80, 30, ARRAY['scratch', 'swords-dance', 'cut', 'headbutt'], 'parasect', 0, 0),
(48, 'venonat', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png', 60, 55, 55, 45, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'venonat', 0, 0),
(49, 'venomoth', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png', 70, 65, 75, 90, ARRAY['razor-wind', 'gust', 'whirlwind', 'headbutt'], 'venomoth', 0, 0),
(50, 'diglett', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png', 10, 55, 45, 95, ARRAY['scratch', 'swords-dance', 'cut', 'sand-attack'], 'diglett', 0, 0),
(51, 'dugtrio', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png', 35, 100, 70, 120, ARRAY['scratch', 'swords-dance', 'cut', 'sand-attack'], 'dugtrio', 0, 0),
(52, 'meowth', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png', 40, 45, 40, 90, ARRAY['pay-day', 'scratch', 'cut', 'headbutt'], 'meowth', 0, 0),
(53, 'persian', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png', 65, 70, 65, 115, ARRAY['pay-day', 'scratch', 'cut', 'headbutt'], 'persian', 0, 0),
(54, 'psyduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', 50, 52, 50, 55, ARRAY['mega-punch', 'pay-day', 'ice-punch', 'scratch'], 'psyduck', 0, 0),
(55, 'golduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png', 80, 82, 80, 85, ARRAY['mega-punch', 'pay-day', 'ice-punch', 'scratch'], 'golduck', 0, 0),
(56, 'mankey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png', 40, 80, 45, 70, ARRAY['karate-chop', 'mega-punch', 'pay-day', 'fire-punch'], 'mankey', 0, 0),
(57, 'primeape', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png', 65, 105, 70, 95, ARRAY['karate-chop', 'mega-punch', 'pay-day', 'fire-punch'], 'primeape', 0, 0),
(58, 'growlithe', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png', 55, 70, 50, 60, ARRAY['double-kick', 'headbutt', 'body-slam', 'take-down'], 'growlithe', 0, 0),
(59, 'arcanine', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png', 90, 110, 80, 95, ARRAY['headbutt', 'body-slam', 'take-down', 'double-edge'], 'arcanine', 0, 0),
(60, 'poliwag', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png', 40, 50, 40, 90, ARRAY['pound', 'double-slap', 'headbutt', 'body-slam'], 'poliwag', 0, 0),
(61, 'poliwhirl', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png', 65, 65, 50, 90, ARRAY['pound', 'double-slap', 'mega-punch', 'ice-punch'], 'poliwhirl', 0, 0),
(62, 'poliwrath', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png', 90, 95, 90, 70, ARRAY['pound', 'double-slap', 'mega-punch', 'ice-punch'], 'poliwrath', 0, 0),
(63, 'abra', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png', 25, 20, 55, 90, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'abra', 0, 0),
(64, 'kadabra', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png', 40, 35, 70, 105, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'kadabra', 0, 0),
(65, 'alakazam', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png', 55, 50, 95, 120, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'alakazam', 0, 0),
(66, 'machop', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png', 70, 80, 35, 35, ARRAY['karate-chop', 'mega-punch', 'fire-punch', 'ice-punch'], 'machop', 0, 0),
(67, 'machoke', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png', 80, 100, 60, 45, ARRAY['karate-chop', 'mega-punch', 'fire-punch', 'ice-punch'], 'machoke', 0, 0),
(68, 'machamp', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png', 90, 130, 85, 55, ARRAY['karate-chop', 'mega-punch', 'fire-punch', 'ice-punch'], 'machamp', 0, 0),
(69, 'bellsprout', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png', 50, 75, 30, 40, ARRAY['swords-dance', 'cut', 'bind', 'slam'], 'bellsprout', 0, 0),
(70, 'weepinbell', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png', 65, 90, 45, 55, ARRAY['swords-dance', 'cut', 'bind', 'slam'], 'weepinbell', 0, 0),
(71, 'victreebel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png', 80, 105, 70, 70, ARRAY['swords-dance', 'cut', 'bind', 'vine-whip'], 'victreebel', 0, 0),
(72, 'tentacool', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png', 40, 40, 100, 70, ARRAY['swords-dance', 'cut', 'bind', 'headbutt'], 'tentacool', 0, 0),
(73, 'tentacruel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png', 80, 70, 120, 100, ARRAY['swords-dance', 'cut', 'bind', 'headbutt'], 'tentacruel', 0, 0),
(74, 'geodude', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png', 40, 80, 30, 20, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'sand-attack'], 'geodude', 0, 0),
(75, 'graveler', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png', 55, 95, 45, 35, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'sand-attack'], 'graveler', 0, 0),
(76, 'golem', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png', 80, 120, 65, 45, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'mega-kick'], 'golem', 0, 0),
(77, 'ponyta', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png', 50, 85, 65, 90, ARRAY['stomp', 'double-kick', 'headbutt', 'horn-drill'], 'ponyta', 0, 0),
(78, 'rapidash', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png', 65, 100, 80, 105, ARRAY['pay-day', 'swords-dance', 'stomp', 'double-kick'], 'rapidash', 0, 0),
(79, 'slowpoke', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png', 90, 65, 40, 15, ARRAY['pay-day', 'stomp', 'headbutt', 'tackle'], 'slowpoke', 0, 0),
(80, 'slowbro', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png', 95, 75, 80, 30, ARRAY['mega-punch', 'pay-day', 'ice-punch', 'stomp'], 'slowbro', 0, 0),
(81, 'magnemite', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png', 25, 35, 55, 45, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'magnemite', 0, 0),
(82, 'magneton', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png', 50, 60, 70, 70, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'magneton', 0, 0),
(83, 'farfetchd', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png', 52, 90, 62, 60, ARRAY['razor-wind', 'swords-dance', 'cut', 'gust'], 'farfetchd', 0, 0),
(84, 'doduo', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png', 35, 85, 35, 75, ARRAY['swords-dance', 'whirlwind', 'fly', 'jump-kick'], 'doduo', 0, 0),
(85, 'dodrio', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png', 60, 110, 60, 110, ARRAY['swords-dance', 'whirlwind', 'fly', 'jump-kick'], 'dodrio', 0, 0),
(86, 'seel', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png', 65, 45, 70, 45, ARRAY['pay-day', 'slam', 'headbutt', 'horn-drill'], 'seel', 0, 0),
(87, 'dewgong', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png', 90, 70, 95, 70, ARRAY['pay-day', 'headbutt', 'horn-drill', 'body-slam'], 'dewgong', 0, 0),
(88, 'grimer', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png', 80, 80, 50, 25, ARRAY['pound', 'fire-punch', 'ice-punch', 'thunder-punch'], 'grimer', 0, 0),
(89, 'muk', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png', 105, 105, 100, 50, ARRAY['pound', 'fire-punch', 'ice-punch', 'thunder-punch'], 'muk', 0, 0),
(90, 'shellder', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png', 30, 65, 25, 40, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'shellder', 0, 0),
(91, 'cloyster', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png', 50, 95, 45, 70, ARRAY['headbutt', 'tackle', 'body-slam', 'take-down'], 'cloyster', 0, 0),
(92, 'gastly', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png', 30, 35, 35, 80, ARRAY['fire-punch', 'ice-punch', 'thunder-punch', 'headbutt'], 'gastly', 0, 0),
(93, 'haunter', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png', 45, 50, 55, 95, ARRAY['fire-punch', 'ice-punch', 'thunder-punch', 'headbutt'], 'haunter', 0, 0),
(94, 'gengar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', 60, 65, 75, 110, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'gengar', 0, 0),
(95, 'onix', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png', 35, 45, 45, 70, ARRAY['bind', 'slam', 'headbutt', 'tackle'], 'onix', 0, 0),
(96, 'drowzee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png', 60, 48, 90, 42, ARRAY['pound', 'mega-punch', 'fire-punch', 'ice-punch'], 'drowzee', 0, 0),
(97, 'hypno', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png', 85, 73, 115, 67, ARRAY['pound', 'mega-punch', 'fire-punch', 'ice-punch'], 'hypno', 0, 0),
(98, 'krabby', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png', 30, 105, 25, 50, ARRAY['vice-grip', 'guillotine', 'swords-dance', 'cut'], 'krabby', 0, 0),
(99, 'kingler', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png', 55, 130, 50, 75, ARRAY['vice-grip', 'guillotine', 'swords-dance', 'cut'], 'kingler', 0, 0),
(100, 'voltorb', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png', 40, 30, 55, 100, ARRAY['headbutt', 'tackle', 'take-down', 'sonic-boom'], 'voltorb', 0, 0),
(101, 'electrode', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png', 60, 50, 80, 150, ARRAY['headbutt', 'tackle', 'take-down', 'sonic-boom'], 'electrode', 0, 0),
(102, 'exeggcute', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png', 60, 40, 45, 40, ARRAY['swords-dance', 'headbutt', 'take-down', 'double-edge'], 'exeggcute', 0, 0),
(103, 'exeggutor', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png', 95, 95, 75, 55, ARRAY['swords-dance', 'stomp', 'headbutt', 'take-down'], 'exeggutor', 0, 0),
(104, 'cubone', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png', 50, 50, 50, 35, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'swords-dance'], 'cubone', 0, 0),
(105, 'marowak', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png', 60, 80, 80, 45, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'swords-dance'], 'marowak', 0, 0),
(106, 'hitmonlee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png', 50, 120, 110, 87, ARRAY['mega-punch', 'double-kick', 'mega-kick', 'jump-kick'], 'hitmonlee', 0, 0),
(107, 'hitmonchan', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png', 50, 105, 110, 76, ARRAY['comet-punch', 'mega-punch', 'fire-punch', 'ice-punch'], 'hitmonchan', 0, 0),
(108, 'lickitung', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png', 90, 55, 75, 30, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'lickitung', 0, 0),
(109, 'koffing', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png', 40, 65, 45, 35, ARRAY['headbutt', 'tackle', 'flamethrower', 'psybeam'], 'koffing', 0, 0),
(110, 'weezing', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png', 65, 90, 70, 60, ARRAY['headbutt', 'tackle', 'flamethrower', 'psybeam'], 'weezing', 0, 0),
(111, 'rhyhorn', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png', 80, 85, 30, 25, ARRAY['swords-dance', 'stomp', 'sand-attack', 'headbutt'], 'rhyhorn', 0, 0),
(112, 'rhydon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png', 105, 130, 45, 40, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 'rhydon', 0, 0),
(113, 'chansey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png', 250, 5, 105, 50, ARRAY['pound', 'double-slap', 'mega-punch', 'fire-punch'], 'chansey', 0, 0),
(114, 'tangela', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png', 65, 55, 40, 60, ARRAY['swords-dance', 'cut', 'bind', 'slam'], 'tangela', 0, 0),
(115, 'kangaskhan', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png', 105, 95, 80, 90, ARRAY['pound', 'comet-punch', 'mega-punch', 'fire-punch'], 'kangaskhan', 0, 0),
(116, 'horsea', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png', 30, 40, 25, 60, ARRAY['razor-wind', 'headbutt', 'take-down', 'double-edge'], 'horsea', 0, 0),
(117, 'seadra', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png', 55, 65, 45, 85, ARRAY['headbutt', 'take-down', 'double-edge', 'leer'], 'seadra', 0, 0),
(118, 'goldeen', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png', 45, 67, 50, 63, ARRAY['swords-dance', 'headbutt', 'horn-attack', 'fury-attack'], 'goldeen', 0, 0),
(119, 'seaking', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png', 80, 92, 80, 68, ARRAY['swords-dance', 'headbutt', 'horn-attack', 'fury-attack'], 'seaking', 0, 0),
(120, 'staryu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png', 30, 45, 55, 85, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'staryu', 0, 0),
(121, 'starmie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png', 60, 75, 85, 115, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'starmie', 0, 0),
(122, 'mr-mime', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png', 40, 45, 120, 90, ARRAY['pound', 'double-slap', 'mega-punch', 'fire-punch'], 'mr-mime', 0, 0),
(123, 'scyther', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png', 70, 110, 80, 105, ARRAY['razor-wind', 'swords-dance', 'cut', 'wing-attack'], 'scyther', 0, 0),
(124, 'jynx', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png', 65, 50, 95, 95, ARRAY['pound', 'double-slap', 'mega-punch', 'ice-punch'], 'jynx', 0, 0),
(125, 'electabuzz', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png', 65, 83, 85, 105, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'electabuzz', 0, 0),
(126, 'magmar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png', 65, 95, 85, 93, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'mega-kick'], 'magmar', 0, 0),
(127, 'pinsir', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png', 65, 125, 70, 85, ARRAY['vice-grip', 'guillotine', 'swords-dance', 'cut'], 'pinsir', 0, 0),
(128, 'tauros', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png', 75, 100, 70, 110, ARRAY['stomp', 'headbutt', 'horn-attack', 'horn-drill'], 'tauros', 0, 0),
(129, 'magikarp', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png', 20, 10, 20, 80, ARRAY['tackle', 'hydro-pump', 'splash', 'flail'], 'magikarp', 0, 0),
(130, 'gyarados', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png', 95, 125, 100, 81, ARRAY['bind', 'headbutt', 'tackle', 'body-slam'], 'gyarados', 0, 0),
(131, 'lapras', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png', 130, 85, 95, 60, ARRAY['headbutt', 'horn-drill', 'body-slam', 'take-down'], 'lapras', 0, 0),
(132, 'ditto', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', 48, 48, 48, 48, ARRAY['transform', 'transform', 'transform', 'transform'], 'ditto', 0, 0),
(133, 'eevee', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png', 55, 55, 65, 55, ARRAY['pay-day', 'double-kick', 'sand-attack', 'headbutt'], 'eevee', 0, 0),
(134, 'vaporeon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png', 130, 65, 95, 65, ARRAY['pay-day', 'double-kick', 'sand-attack', 'headbutt'], 'vaporeon', 0, 0),
(135, 'jolteon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png', 65, 65, 95, 130, ARRAY['pay-day', 'double-kick', 'sand-attack', 'headbutt'], 'jolteon', 0, 0),
(136, 'flareon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png', 65, 130, 110, 65, ARRAY['pay-day', 'double-kick', 'sand-attack', 'headbutt'], 'flareon', 0, 0),
(137, 'porygon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png', 65, 60, 75, 40, ARRAY['headbutt', 'tackle', 'take-down', 'double-edge'], 'porygon', 0, 0),
(138, 'omanyte', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png', 35, 40, 55, 35, ARRAY['bind', 'slam', 'sand-attack', 'headbutt'], 'omanyte', 0, 0),
(139, 'omastar', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png', 70, 60, 70, 55, ARRAY['bind', 'sand-attack', 'headbutt', 'horn-attack'], 'omastar', 0, 0),
(140, 'kabuto', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png', 30, 80, 45, 55, ARRAY['scratch', 'sand-attack', 'headbutt', 'body-slam'], 'kabuto', 0, 0),
(141, 'kabutops', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png', 60, 115, 70, 80, ARRAY['scratch', 'razor-wind', 'swords-dance', 'cut'], 'kabutops', 0, 0),
(142, 'aerodactyl', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png', 80, 105, 75, 130, ARRAY['razor-wind', 'wing-attack', 'whirlwind', 'fly'], 'aerodactyl', 0, 0),
(143, 'snorlax', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', 160, 110, 110, 30, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 'snorlax', 0, 0),
(144, 'articuno', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png', 90, 85, 125, 85, ARRAY['razor-wind', 'gust', 'whirlwind', 'fly'], 'articuno', 0, 0),
(145, 'zapdos', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png', 90, 90, 90, 100, ARRAY['razor-wind', 'whirlwind', 'fly', 'headbutt'], 'zapdos', 0, 0),
(146, 'moltres', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png', 90, 100, 85, 90, ARRAY['razor-wind', 'gust', 'wing-attack', 'whirlwind'], 'moltres', 0, 0),
(147, 'dratini', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png', 41, 64, 50, 50, ARRAY['bind', 'slam', 'headbutt', 'body-slam'], 'dratini', 0, 0),
(148, 'dragonair', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png', 61, 84, 70, 70, ARRAY['bind', 'slam', 'headbutt', 'horn-drill'], 'dragonair', 0, 0),
(149, 'dragonite', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png', 91, 134, 100, 80, ARRAY['mega-punch', 'fire-punch', 'ice-punch', 'thunder-punch'], 'dragonite', 0, 0),
(150, 'mewtwo', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', 106, 110, 90, 130, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 'mewtwo', 0, 0),
(151, 'mew', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', 100, 100, 100, 100, ARRAY['pound', 'mega-punch', 'pay-day', 'fire-punch'], 'mew', 0, 0);



// OLD SCHEMA

// INSERT INTO
//   pokemons(pokedex_number, name, img, hp, attack, defense, speed, moves, nickname, win_count, user_id)
// VALUES 
//   (1, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 45, 49, 49, 45, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind'], 'bulbasaur', 0, 0),
//   (4, 'charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 39, 52, 43, 65, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charmander', 0, 0),
//   (6, 'charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 78, 84, 78, 100, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 'charizard', 0, 0),
//   (7, 'squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', 44, 48, 65, 43, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt'], 'squirtle', 0, 0),
//   (54, 'psyduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', 50, 52, 48, 55, ARRAY['mega-punch', 'pay-day', 'ice-punch', 'scratch'], 'psyduck', 0, 0),
//   (56, 'mankey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png', 40, 80, 35, 70, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 'mankey', 0, 0),
//   (58, 'growlithe', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png', 55, 70, 45, 60, ARRAY['double-kick', 'headbutt', 'body-slam', 'take-down'], 'growlithe', 0, 0),
//   (69, 'bellsprout', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png', 50, 75, 35, 40, ARRAY['swords-dance', 'cut', 'bind', 'slam'], 'bellsprout', 0, 0);

//   (1, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 45, 49, 49, 45, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind'], 'bulbasaur', 0, 1),