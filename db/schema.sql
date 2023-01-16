CREATE DATABASE pokedex;
\c pokedex

CREATE TABLE pokedex(
  
)

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);