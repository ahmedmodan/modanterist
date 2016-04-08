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

const tagInsertQueryBuilder = (tags) => {
  const formattedTags = tags.split(' ').reduce((formattedTag, tag) =>
    formattedTag === '' ? `($$${tag}$$)` : `${formattedTag}, ($$${tag}$$)`, '');
  return `INSERT INTO tags VALUES ${formattedTags}`;
};

const tagsSelectQueryBuilder = (column, params) =>
  `SELECT ${column} FROM tags WHERE tag = ANY('{${params.join(',')}}'::text[])`;

const cardInsertQueryBuilder = (values) => {
  const tagIDs = values.tags.rows.reduce(
    (formattedTagIds, tagId) =>
    formattedTagIds === '' ? `${tagId._id}` : `${formattedTagIds}, ${tagId._id}`
    , '');
  return `INSERT INTO cards VALUES ($$${values.title}$$,
                                    $$${values.description}$$,
                                    $$${values.image_url}$$,
                                    $$${values.link}$$,
                                    '{${tagIDs}}')`;
};


const selectQueryBuilder = (table, data) => {
  switch (table) {
    case TAGS:
      return tagsSelectQueryBuilder(data.column, data.params.split(' '));
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
