const { json } = require("body-parser");
const express = require("express");
const cors = require("cors");
const userRoute = require("./route/users.routes");
const { status, type } = require("express/lib/response");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cookie = require("cookie-parser");
const port = process.env.PORT || 4000;
app.use(json());
app.use(cors());
app.use(cookie());

// CONNECTION OF MONGODB.....................
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {})
  .then(() => {
    console.log(`successfully`);
  })
  .catch(() => {
    console.log(`fail`);
  });
//INITAILIZATION OF USER SCHEMA..............
require("./models/UserSchema");

//ROUTER CONTROLLER.......................
app.use("/api/v2/users", userRoute);
app.all("*" , (req , res)=>{
  res.status(400).json({
    status:"failed",
    message:"sorry tiddy page not found"
  })
})

// SERVER PORT.........................
app.listen(port, () => {
  console.log(`listing at port ${port}`);
});
