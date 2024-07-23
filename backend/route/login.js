const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    // USER MODEL API............................................
    const userModel = mongoose.model("users");
    const { password, email } = req.body;
    const getEmail = await userModel.findOne({ email: email });
    const comparePassword = await bcrypt.compare(password, getEmail.password);
    if (!password) throw "Password must be provided";
    if (!email) throw "Email must be provided";
    // CONDITION IF PASSWORD IS EQUAL TO BCRYPT PASSWORD.............................
    if (comparePassword) {
      const token = jwt.sign({ name: getEmail.name }, process.env.KEY, {
        expiresIn: "2h",
      });
      // COOKIS CONTROLLER................................
      res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
      // RESPONES API..................................
      res.status(200).json({
        status: true,
        massages: "login successfully",
      });
    }
  } catch (error) {
    res.status(404).json({
      statu: "failed to login",
      massage: error,
    });
  }
};

module.exports = login;
