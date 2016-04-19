'use strict';

const pg = require('co-pg')(require('pg'));
const cloudinary = require('cloudinary');

const connectionString = process.env.DB;

const CARDS = 'CARDS';
const TAGS = 'TAGS';

const queryDB = function* (query) {
  const connectionResults = yield pg.connectPromise(connectionString);
  const client = connectionResults[0];
  const done = connectionResults[1];
  const result = yield client.queryPromise(query);
  done();
  return result;
};

const tagIDReducer = (tagArray) => tagArray.reduce(
      (formattedTagIds, tagId) =>
      formattedTagIds === '' ? `${tagId._id}` : `${formattedTagIds}, ${tagId._id}`
    , '');

// SELECT QUERY BUILDERS
const tagsSelectQueryBuilder = (column, params) =>
  `SELECT ${column} FROM tags WHERE tag = ANY('{${params.join(',')}}'::text[])`;


const cardsSelectQueryBuilder = (column, params) => {
  const formattedParams = tagIDReducer(params);
  let formattedColumns = column[0];
  if (column.length > 1) {
    formattedColumns = column.join(',');
  }
  if (params === 'all') {
    return `SELECT ${formattedColumns} FROM cards`;
  }
  return `SELECT ${formattedColumns} FROM cards
    WHERE tags_ids && '{${formattedParams}}'`;
};


// INSERT QUERY BUILDERS
const tagInsertQueryBuilder = (tags) => {
  const formattedTags = tags.split(' ').reduce((formattedTag, tag) =>
    formattedTag === '' ? `($$${tag}$$)` : `${formattedTag}, ($$${tag}$$)`, '');
  return `INSERT INTO tags VALUES ${formattedTags}`;
};

const cardInsertQueryBuilder = (values) => {
  const tagIDs = tagIDReducer(values.tags.rows);
  return `INSERT INTO cards VALUES ($$${values.title}$$,
                                    $$${values.description}$$,
                                    $$${values.image_url}$$,
                                    $$${values.link}$$,
                                    '{${tagIDs}}')`;
};


const selectQueryBuilder = (table, data) => {
  switch (table) {
    case TAGS:
      return tagsSelectQueryBuilder(data.column, data.params);
    case CARDS:
      return cardsSelectQueryBuilder(data.column, data.params);
    default:
    // TODO: CHANGE DEFAULT RETURN STATEMENT
      return null;
  }
};

const insertQueryBuilder = (table, values) => {
  switch (table) {
    case CARDS:
      return cardInsertQueryBuilder(values);
    case TAGS:
      return tagInsertQueryBuilder(values);
    default:
    // TODO: CHANGE DEFAULT RETURN STATEMENT
      return null;
  }
};

const cloudinaryUpload = (file, callback) => done => {
  cloudinary.uploader.upload(file, result => {
    callback(result);
    done();
  });
};


module.exports = {
  CARDS,
  TAGS,
  queryDB,
  selectQueryBuilder,
  insertQueryBuilder,
  cloudinaryUpload
};
