const mongoose = require("mongoose");
const getAlldata = async (req, res) => {
  try {
    console.log(req.query);
    const usersModel = mongoose.model("users");
    const data = await usersModel.findOne(req.query);

    res.status(201).json({
      status: true,
      result: {
        data,
      },
    });
  } catch (error) {
    res.status(400).json({
      massage: " fail",
      status: error.massage,
    });
  }
};
module.exports = getAlldata;
