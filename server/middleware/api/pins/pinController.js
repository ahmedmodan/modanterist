'use strict';

const db = require('./../../../database/dbHelpers.js');
const _id = '_id';

const savePin = function* () {
  let imageData;
  const fields = this.request.body.fields;
  yield db.cloudinaryUpload(this.request.body.files.file.path, data => (imageData = data));
  fields.image_url = imageData.url;
  yield db.queryDB(db.insertQueryBuilder(db.TAGS, fields.tags));
  fields.tags = yield db.queryDB(
    db.selectQueryBuilder(db.TAGS, { column: _id, params: fields.tags })
  );
  const result = yield db.queryDB(db.insertQueryBuilder(db.CARDS, fields));
  if (result.command === 'INSERT' && result.rowCount === 1) {
    this.response.status = 200;
  }
};

module.exports = {
  savePin
};
