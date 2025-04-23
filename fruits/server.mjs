import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import Fruits from './routes/fruits.mjs'; //routes plural

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded());
app.use(express.json());

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});

// Mock data
const fruits = ["apple", "banana", "pear"];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Fruits API!");
});

// Fruit routes
app.use('/fruits', Fruits);

// App.listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
