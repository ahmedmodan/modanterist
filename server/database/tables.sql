DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS cards CASCADE;
DROP TABLE IF EXISTS boards_cards CASCADE;

CREATE TABLE users(
  username text UNIQUE,
  password text,
  _id serial PRIMARY KEY
);

CREATE TABLE boards (
  title text,
  user_id integer,
  _id serial PRIMARY KEY,
  FOREIGN KEY (user_id) REFERENCES users(_id)
);

CREATE TABLE cards (
  title text,
  description text,
  image_url text,
  tags text[],
  _id bigserial PRIMARY KEY
);

CREATE TABLE boards_cards (
  card_id integer,
  board_id integer,
  FOREIGN KEY (card_id) REFERENCES cards (_id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (board_id) REFERENCES boards (_id) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT board_card_pk PRIMARY KEY (board_id, card_id) --composite id optimizes query when done using board_id
);

-- card insert example:
-- INSERT INTO cards VALUES ('title2', 'description2', 'url2', '{ "tag4", "tag2", "tag5" }')
-- select from arrays example:
-- pint=# SELECT * FROM cards WHERE 'tag2' = ANY (-- this is the table: tags);