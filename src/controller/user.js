const User = require("../models/user");

const userPost = async (body) => {
  try {
    const user = new User(body);
    const response = await user.save();
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const usersGet = async (req, res) => {
  try {
    const userList = await User.find({});
    console.log(userList);
    return userList;
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    return {
      status: "success",
      data: user,
      message: "User updated successfully",
    };
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  userPost,
  usersGet,
  updateUser,
};
