import express from "express";
import connectToDB from "../db/conn.mjs";
import Restaurants from "../models/restaurants.mjs";

const router = express.Router();

await connectToDB();

//count total restaurants
const count = await Restaurants.countDocuments();
console.log("Total restaurents:", count);

//All restaurants
const allRestaurants = await Restaurants.find();


router.get("/restaurents", async (req, res) => {
  console.log("GET /restaurents hit");
  try {
    const grades = await Restaurants.find();
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({
      message: "Failed to retrieve restaurents",
      error: err.message,
    });
  }
});


router.get("/:id", async (req, res) => {
  try {
    let result = await Restaurants.findById(req.params.id);
    res.send(result);
  } catch {
    res.send("Invalid ID").status(400);
  }
});


export default router;