import { MongoClient } from "mongodb";

let db;

const uri = process.env.MONGODB_URI;

const dbName = "REACT_BLOG_DB";

async function connectToDb(cb) {
  const client = new MongoClient(uri);

  await client.connect();

  db = client.db(dbName);

  cb();
}

export { db, connectToDb };
