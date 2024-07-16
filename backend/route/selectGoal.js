const mongoose = require("mongoose");

const selectGoal = async (req, res) => {
  try {
    // USER MODEL API............................................

    const usersModel = mongoose.model("users");
    const { selectGoal, email } = req.body;
    await usersModel.updateOne(
      {
        email: email,
      },
      {
        selectGoal: selectGoal,
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
    res.status(201).json({
      massage: " fail",
      status: error.massage,

      // users:req.users._id
    });
  }
};

module.exports = selectGoal;
