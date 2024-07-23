const mongoose = require("mongoose");

const reminder = async (req, res) => {
  try {
    // USER MODEL API............................................

    const usersModel = mongoose.model("users");
    const { hour, minutes, email } = req.body;
    if(!hour) throw ("Hour is required")
      if(!minutes) throw ("Minutes is required")


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
    res.status(404).json({
      status: false,
      massage: error,
    });
  }
};

module.exports = reminder;
