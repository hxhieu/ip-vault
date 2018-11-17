const MongoClient = require('mongodb').MongoClient;

const URI = 'mongodb://localhost:27017';
const DB_NAME = 'ip-vault';

const open = dbName => {
  dbName = dbName || DB_NAME;
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      URI,
      { useNewUrlParser: true },
      (err, client) => {
        if (err) {
          reject(err);
        } else {
          resolve(client.db(dbName));
        }
      }
    );
  });
};

const collection = (collectionName, dbName) => {
  dbName = dbName || DB_NAME;
  return new Promise(async (resolve, reject) => {
    try {
      const db = await open(dbName);
      resolve(db.collection(collectionName));
    } catch (ex) {
      reject(ex);
    }
  });
};

module.exports = {
  open,
  collection,
};
