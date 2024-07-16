const mongoose = require("mongoose");

const reminder = async (req, res) => {
  try {
    // USER MODEL API............................................

    const usersModel = mongoose.model("users");
    const { hour, minutes, am_And_pm, email } = req.body;
    await usersModel.updateOne(
      {
        email: email,
      },
      {
        hour: hour,
        minutes: minutes,
      }
    );
    // RESPONES API..................................

    res.status(200).json({
      status: true,
      massage: "successful",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      massage: error.massage,
    });
  }
};

module.exports = reminder;
