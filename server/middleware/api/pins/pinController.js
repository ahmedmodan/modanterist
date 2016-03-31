const db = require('./../../../database/dbHelpers.js');

const savePin = function* () {
  const fields = this.request.body.fields;
  const result = yield db.queryDB(db.insertQueryBuilder(db.CARDS, fields));
  if (result.command === 'INSERT' && result.rowCount === 1) {
    this.response.status = 200;
  }
};

module.exports = {
  savePin
};
