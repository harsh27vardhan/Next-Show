const userSchema = require("../models/user");
const jwt = require("jsonwebtoken");
const { setToken } = require("../services/auth");

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  userSchema
    .findOne({ email, password })
    .then((user) => {
      if (!user)
        return res.status(401).json({ message: "Invalid email or password" });
      const token = setToken(user);
      res
        .status(200)
        .cookie("token", token)
        .json({ message: "Login successful", user });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.signupUser = (req, res) => {
  const { name, email, password, mobile, role } = req.body;

  userSchema
    .create({
      name,
      email,
      password,
      mobile,
      role,
    })
    .then(() => {
      res.status(200).json({ message: "User created successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
