const mongoose = require("mongoose");

const selectGoal = async (req, res) => {
  try {
    // USER MODEL API............................................

    const usersModel = mongoose.model("users");
    const { selectGoal, email } = req.body;
    if(!selectGoal) throw ("Please select your goal")
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
    res.status(404).json({
      massage: error,
      status: false,

      // users:req.users._id
    });
  }
};

module.exports = selectGoal;
