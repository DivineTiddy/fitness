const mongoose = require("mongoose");



const usersSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Name is required"],
  },
  email: {
    type: "string",
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "Password is required"],
  },
  fitness_goal: {
    type: "string",
  },
  within: {
    type: Number,
  },
  loss: {
    type: Number,
  },
  metricsGoal: {
    type: "string", 
  },
  selectGoal: {
    type: "string",
  },
  hour: {
    type: Number,
  },
  minutes: {
    type: Number,
  },
});
const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
