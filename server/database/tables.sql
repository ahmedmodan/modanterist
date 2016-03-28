DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS cards CASCADE;
DROP TABLE IF EXISTS boards_cards CASCADE;

CREATE TABLE users(
  _id serial PRIMARY KEY,
  username varchar(160) UNIQUE,
  password varchar(160)
);

CREATE TABLE boards (
  _id serial PRIMARY KEY,
  description varchar(50),
  user_id integer,
  FOREIGN KEY (user_id) REFERENCES users(_id)
);

CREATE TABLE tags (
  _id bigserial PRIMARY KEY,
  tag varchar(30)
);

CREATE TABLE cards (
  _id bigserial PRIMARY KEY,
  description varchar(250),
  image_url varchar(250),
  tags_id integer,
  FOREIGN KEY (tags_id) REFERENCES tags(_id)
);

CREATE TABLE boards_cards (
  card_id integer,
  board_id integer,
  FOREIGN KEY (card_id) REFERENCES cards (_id) ON UPDATE CASCADE,
  FOREIGN KEY (board_id) REFERENCES boards (_id) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT board_card_pk PRIMARY KEY (board_id, card_id) --composite id optimizes query when done using board_id
);
