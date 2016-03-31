'use strict';

const db = require('./../../../database/dbHelpers.js');

const savePin = function* () {
  let imageData;
  const fields = this.request.body.fields;
  yield db.cloudinaryUpload(this.request.body.files.file.path, data => (imageData = data));
  fields.image_url = imageData.url;
  const result = yield db.queryDB(db.insertQueryBuilder(db.CARDS, fields));
  if (result.command === 'INSERT' && result.rowCount === 1) {
    this.response.status = 200;
  }
};

module.exports = {
  savePin
};
