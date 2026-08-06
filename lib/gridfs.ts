import { MongoClient, GridFSBucket } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;

  // eslint-disable-next-line no-var
  var _gridfsBucket: GridFSBucket | undefined;
}

export async function getGridFSBucket() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing");
  }

  if (global._mongoClient && global._gridfsBucket) {
    return global._gridfsBucket;
  }

  const client = new MongoClient(uri);

  await client.connect();

  const db = client.db();

  const bucket = new GridFSBucket(db, {
    bucketName: "uploads",
  });

  global._mongoClient = client;
  global._gridfsBucket = bucket;

  return bucket;
}