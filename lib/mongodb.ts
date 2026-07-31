import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI missing in .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {

  if (cached.conn) {
    console.log("✅ MongoDB Already Connected");
    return cached.conn;
  }

  if (!cached.promise) {

    console.log("🔄 Connecting to MongoDB...");

    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => {

        console.log("✅ MongoDB Connected Successfully");

        return mongooseInstance;

      })
      .catch((error) => {

        console.error("❌ MongoDB Connection Failed");
        console.error(error);

        throw error;

      });

  }

  try {

    cached.conn = await cached.promise;

    return cached.conn;

  } catch (error) {

    cached.promise = null;

    throw error;

  }

}