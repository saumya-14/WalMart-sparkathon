import mongoose from "mongoose";


const connectionString = process.env.MONGODB_URI||"";

if (!connectionString) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
//@ts-ignore
let cached = global.mongoose;

if (!cached) {
    //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(connectionString, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
