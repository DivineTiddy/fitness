const mongoose = require("mongoose");

const metricsGoal = async (req, res) => {
  try {
    // USER MODEL API............................................
    const usersModel = mongoose.model("users");
    const { metricsGoal, loss, within, email } = req.body;
    if(!metricsGoal) throw "Please select a metric"
    // CHECK USER MODEL AND UPDATE......................
    await usersModel.updateOne(
      {
        email: email,
      },
      {
        loss: loss,
        within: within,
        metricsGoal: metricsGoal,
      },
      {
        new: true,
        runValidators: true,
      }
    );
          // RESPONES API..................................

    res.status(201).json({
      massage: " successfully",
      status: true,
    });
  } catch (error) {
    res.status(404).json({
      massage: " fail",
      status: error.massage,
    });
  }
};

module.exports = metricsGoal;
