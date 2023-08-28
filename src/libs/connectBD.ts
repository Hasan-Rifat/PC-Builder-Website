import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI as string);
    console.log(`Database is connected successfully`);
  } catch (err) {
    console.error("Failed to connect database", err);
  }
}

export default connectDB;
