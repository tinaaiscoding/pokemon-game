CREATE DATABASE pokedex;
\c pokedex

CREATE TABLE pokemons(
  id SERIAL PRIMARY KEY,
  pokedex_number INTEGER,
  name TEXT,
  img TEXT,
  hp INTEGER,
  attack INTEGER,
  defense INTEGER,
  speed INTEGER,
  moves text ARRAY
);
-- for now win_count will not be displayed in pokemon. Will be added future feature

-- From API we are grabbing the 
INSERT INTO
  pokemons(pokedex_number, name, img, hp, attack, defense, speed, moves)
VALUES 
(1, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 45, 49, 49, 45, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind']),
  (4, 'charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 39, 52, 43, 65, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch']),
  (6, 'charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 78, 84, 78, 100, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch']),
  (7, 'squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', 44, 48, 65, 43, ARRAY['mega-punch', 'ice-punch', 'mega-kick', 'headbutt']),
  (54, 'psyduck', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', 50, 52, 48, 55, ARRAY['mega-punch', 'pay-day', 'ice-punch', 'scratch']),
  (56, 'mankey', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png', 40, 80, 35, 70, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch']),
  (58, 'growlithe', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png', 55, 70, 45, 60, ARRAY['double-kick', 'headbutt', 'body-slam', 'take-down']),
  (69, 'bellsprout', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png', 50, 75, 35, 40, ARRAY['swords-dance', 'cut', 'bind', 'slam']);
  
  -- start
-- User signs up -> grab 3 pokemon (db, bulb,squir,chari) -> view pokemon (db) -> battle Opponent(API) 
-- -> catch (store data into DB) -> view pokemon (db) -> for now we can only catch upto 2 and mypokemon.win_count will always be 0 initial.
-- if pokemon is able to evolve then have evolve option.
 --  -> else prompts you lack battle points


  -- unfortunately as rattata's 4th abilities is scratch so scratch will be the strongest.

CREATE TABLE mypokemons (
  id SERIAL PRIMARY KEY,
  name TEXT,
  nickname TEXT,
  win_counts INTEGER
);

INSERT INTO
  mypokemons (name, win_counts)
VALUES
  ('charmander', 0),
  ('psyduck', 0)
  ;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);



