import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.ATLAS_URI}`
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("DB connection error:", err.message);
    
  }
};

export default connectToDB;
