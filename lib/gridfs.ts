import { MongoClient, GridFSBucket } from "mongodb";

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error("MONGODB_URI is missing in .env.local");
}

let client: MongoClient;
let bucket: GridFSBucket;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
  // eslint-disable-next-line no-var
  var _gridfsBucket: GridFSBucket | undefined;
}

export async function getGridFSBucket() {
  // Reuse in development
  if (global._mongoClient && global._gridfsBucket) {
    return global._gridfsBucket;
  }

  client = new MongoClient(uri);

  await client.connect();

  const db = client.db();

  bucket = new GridFSBucket(db, {
    bucketName: "uploads",
  });

  global._mongoClient = client;
  global._gridfsBucket = bucket;

  return bucket;
}