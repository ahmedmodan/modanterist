const pg = require('co-pg')(require('pg'));

const connectionString = process.env.DB;

const CARDS = 'CARDS';

const queryDB = function* (query) {
  const connectionResults = yield pg.connectPromise(connectionString);
  const client = connectionResults[0];
  const done = connectionResults[1];
  const result = yield client.queryPromise(query);
  done();
  return result;
};

const cardInsertQueryBuilder = (values) => {
  const tagsString = values.tags.split(' ').reduce((allTags, tag) => {
    if (!!tagsString) {
      return `${allTags}`;
    }
    return `${allTags}", "${tag}`;
  });
  return `INSERT INTO cards VALUES ('${values.title}',
                                    '${values.description}',
                                    '${values.link}',
                                    '{"${tagsString}"}')`;
};

const insertQueryBuilder = (table, values) => {
  switch (table) {
    case CARDS:
      return cardInsertQueryBuilder(values);
    default:
    // TODO: CHANGE DEFAULT RETURN STATEMENT
      return null;
  }
};

module.exports = {
  CARDS,
  queryDB,
  insertQueryBuilder
};
