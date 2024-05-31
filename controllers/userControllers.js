const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc register user
//@route POST /api/users/register
//@access public
const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        error: "All fields are mandatory",
      });
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    //   hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        message: `user ${user.username} create successfully`,
      });
    } else {
      return res.status(400).json({
        error: "User data invalid",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//@desc login user
//@route POST /api/users/login
//@access public
const userLogin = async (req, res) => {
  return res.status(200).json({
    message: "User logged in",
  });
};

module.exports = {
  userRegister,
  userLogin,
};
