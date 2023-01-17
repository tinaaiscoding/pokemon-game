CREATE DATABASE pokedex;
\c pokedex

CREATE TABLE pokemon(
  id SERIAL PRIMARY KEY,
  pokedex_number INTEGER,
  name TEXT,
  hp INTEGER,
  attack INTEGER,
  defence INTEGER,
  moves text ARRAY,
  win_requirements INTEGER,
  evolve BOOLEAN 
);

-- From API we are grabbing the 
INSERT INTO
  pokemon(pokedex_number, name, hp, attack, defence, moves, win_requirements, evolve)
VALUES 
  (4, 'charmander', 39, 52, 43, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 5, true),
  (1, 'bulbasaur', 39, 52, 49, ARRAY['razor-wind', 'swords-dance', 'cut', 'bind'], 5,  true),
  (54, 'psyduck', 45, 49, 49, ARRAY['mega-punch', 'pay-day', 'ice-punch', 'scratch'], 5, true),
  (56, 'mankey', 40, 80, 35, ARRAY['mega-punch', 'pay-day', 'fire-punch', 'ice-punch'], 5, true),
  (58, 'growlithe', 55, 70, 45, ARRAY['double-kick', 'headbutt', 'body-slam', 'take-down'], 5, true),
  (69, 'bellsprout', 50, 75, 35, ARRAY['swords-dance', 'cut', 'bind', 'slam'], 5, true),
  (6, 'charizard', 78, 84, 78, ARRAY['mega-punch', 'fire-punch', 'thunder-punch', 'scratch'], 0, false);
  



  -- unfortunately as rattata's 4th abilities is scratch so scratch will be the strongest.

CREATE TABLE mypokemons (
  id SERIAL PRIMARY KEY,
  name TEXT,
  win_counts NUMBER,
  evolution TEXT
);

INSERT INTO
  mypokemons (name, win_counts, evolution)
VALUES
  ('charmander', 0),
  ('bulbasaur', 0),
  ('psyduck', 0),
  ('mankey', 0),
  ('growlithe', 0),
  ('bellsprout', 0),
  ('charizad', 0);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT,

);



