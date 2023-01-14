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

const getUser = async (req) => {
  try {
    console.log(req.params);
    const user = await User.findById(req.params.id);
    if (!user) {
      return {
        status: 'error',
        message: 'User not found'
      };
    }
    return {
      status: 'success',
      data: user,
      message: 'User retrieved successfully'
    };
  } catch (err) {
    return {
      status: 'error',
      message: err.message
    };
  };
};

const deleteUser = async (req) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return {
        status: 'error',
        message: 'User not found'
      };
    }
    return {
      status: 'success',
      message: 'User deleted successfully'
    };
  } catch (err) {
    return {
      status: 'error',
      message: err.message
    };
  }
};

module.exports = {
  userPost,
  usersGet,
  updateUser,
  getUser,
  deleteUser
};
