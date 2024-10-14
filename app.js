const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
require("dotenv").config();
require("express-async-errors");

const port = process.env.PORT || 5001;

const cruiseRoutes = require("./routes/cruise");
const signInRoutes = require("./routes/signin");

// express body parser
app.use(express.json());

app.use("/cruise", cruiseRoutes);
app.use("/identity/users/sign-in", signInRoutes);


// connectDB
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server listening on http://localhost:${port}/`);
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

start();
