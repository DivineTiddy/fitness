const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    // USER MODEL API............................................

    const usersModel = mongoose.model("users");
    const { name, password, email } = req.body;
    const getDupliateemail = await usersModel.findOne({ email: email });
    if (getDupliateemail) throw "email already exists";

    if (!name) throw "Name must be provided";
    if (!password) throw "Password must be provided";
    if (!email) throw "Email must be provided";

    const hashPassword = await bcrypt.hash(password, 12);

    await usersModel.create({
      name: name,
      password: hashPassword,
      email: email,
    });
    // RESPONES API..................................

    res.status(201).json({
      massage: "registers successfully",
      status: true,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: error,
    });
  }
};
module.exports = register;
