import mongoose from "mongoose";

// Grade subdocument schema
const gradeSchema = new mongoose.Schema({
  date: Date,
  grade: String,
  score: Number,
});

// Address subdocument schema
const addressSchema = new mongoose.Schema({
  building: String,
  coord: [Number], // [longitude, latitude]
  street: String,
  zipcode: String,
});

// Main restaurant schema
const restaurantSchema = new mongoose.Schema({
  address: addressSchema,
  borough: String,
  cuisine: String,
  grades: [gradeSchema],
  name: String,
  restaurant_id: String,
});

export default mongoose.model("Restaurants", restaurantSchema);
