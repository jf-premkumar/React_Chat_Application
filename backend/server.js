// Jai shreeram Jai devi Jaganmata
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const chats = require("./data/data");
const connect = require("./config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/user", userRoutes);

app.listen(PORT, async (req, res) => {
  try {
    connect();
    console.log(`port ${PORT} is running successfully`.green.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
  }
});

//  updated
