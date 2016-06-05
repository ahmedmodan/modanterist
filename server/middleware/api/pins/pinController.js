'use strict'; // eslint-disable-line strict

const db = require('./../../../database/dbHelpers.js');
const _id = '_id';
const all = '*';

function combineTagsAndCards(cards, tags) {
  return cards.map(card => {
    const newCard = card;
    newCard.tags_ids = newCard.tags_ids.reduce((tagArray, tag) => {
      if (tags[tag]) {
        tagArray.push(tags[tag]);
      }
      return tagArray;
    }, []);
    return newCard;
  });
}

function combineTagsAndIDs(queryRows) {
  return queryRows.reduce(
    (tagsObject, tag) => {
      const tagsObj = tagsObject;
      tagsObj[tag._id] = tag.tag;
      return tagsObj;
    }, {}
  );
}

const savePin = function* () {
  const fields = this.request.body.fields;
  const tags = fields.tags.split(' ');
  const availableTags = yield db.queryDB(
    db.selectQueryBuilder(db.TAGS, {
      column: all,
      params: tags
    })
  );
  const extractedTags = availableTags.rows.map(tagRow => tagRow.tag);
  const tagsToSave = tags.filter(tag => extractedTags.indexOf(tag) === -1).join(' ');
  const imageData = yield db.cloudinaryUpload(this.request.body.files.file.path);
  fields.image_url = imageData.url;
  yield db.queryDB(
    db.insertQueryBuilder(db.TAGS, tagsToSave)
  );
  fields.tags = yield db.queryDB(
    db.selectQueryBuilder(db.TAGS, {
      column: _id,
      params: tags
    })
  );
  const result = yield db.queryDB(db.insertQueryBuilder(db.CARDS, fields));
  const savedCard = yield db.queryDB(
    db.selectQueryBuilder(db.SINGLE_CARD, {
      column: all,
      params: fields.image_url
    })
  );
  if (result.command === 'INSERT' && result.rowCount === 1) {
    fields.tags = tags;
    this.response.status = 200;
    this.response.body = [Object.assign({}, savedCard.rows[0], { tags_ids: tags })];
  }
};

const getPins = function* () {
  const tags = this.request.query.tags.split(',');
  const tagQuery = yield db.queryDB(
    db.selectQueryBuilder(db.TAGS, {
      column: all,
      params: tags
    })
  );
  const tagsAndIDs = combineTagsAndIDs(tagQuery.rows);
  const cardsQuery = yield db.queryDB(
    db.selectQueryBuilder(db.CARDS, {
      column: [all],
      params: tagQuery.rows
    })
  );
  this.status = 200;
  this.body = combineTagsAndCards(cardsQuery.rows, tagsAndIDs);
};

module.exports = {
  savePin,
  getPins
};
