const jwt = require("jsonwebtoken");
const secret = "secretkeyhaiyetodurrahiye";

exports.setToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    secret,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

exports.verifyToken = (token) => {
  if (!token) return null;
  try {
    const user = jwt.verify(token, secret);
    return user;
  } catch (err) {
    return null;
  }
};
