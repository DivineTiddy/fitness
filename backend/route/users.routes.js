const express = require("express");
const register = require("./register")
const login = require("./login");
const reminder = require("./reminder");
const selectGoal =require("./selectGoal");
const metricsGoal = require("./metricsGoal");
const getAlldata = require("./getAlldata");

const userRoute = express.Router();

//Routes............

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/reminder", reminder);
userRoute.post("/selectgoal" , selectGoal);
userRoute.post("/metricsgoal" , metricsGoal)
userRoute.get("/data" , getAlldata)



module.exports = userRoute;