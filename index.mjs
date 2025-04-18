import dotenv from "dotenv";
dotenv.config();

import express from "express";
import Restaurants from "./routes/restaurants.mjs";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});




app.use("/restaurants", Restaurants)

// Global error handling
app.use((err, _req, res, next) => {
  res
    .status(500)
    .send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Server is running on port:http://localhost:${PORT}`
  );
});
