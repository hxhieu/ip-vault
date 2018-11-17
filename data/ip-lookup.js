const database = require('./db');
const COLLECTION_NAME = 'ip-lookup';

const insert = pairs =>
  new Promise(async (resolve, reject) => {
    try {
      const collection = await database.collection(COLLECTION_NAME);
      collection.insertOne(pairs, err => {
        if (err) reject(err);
        else resolve();
      });
    } catch (ex) {
      reject(ex);
    }
  });

module.exports = {
  insert,
};
