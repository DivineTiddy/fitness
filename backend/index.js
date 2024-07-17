const { json } = require("body-parser");
const express = require("express");
const userRoute = require("./route/users.routes");
const { status, type } = require("express/lib/response");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookie = require("cookie-parser");
const port = process.env.PORT || 8000;
app.use(json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookie());

// CONNECTION OF MONGODB.....................
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {})
  .then(() => {
    console.log(`successfully`);
  })
  .catch(() => {
    console.log(`failed`);
  });
//INITAILIZATION OF USER SCHEMA..............
require("./models/UserSchema");

//ROUTER CONTROLLER.......................
app.use("/", userRoute);


// SERVER PORT.........................
app.listen(port, () => {
  console.log(`listing at port ${port}`);
});
