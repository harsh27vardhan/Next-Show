const { verifyToken } = require("../services/auth");

exports.checkAuth = (req, res, next) => {
  const cookieToken = req.cookie?.token;
  if (!cookieToken) {
    return res
      .status(401)
      .send({ error: "No token found, authorization denied" });
  }
  const user = verifyToken(cookieToken);
  if (!user) {
    return res
      .status(401)
      .send({ error: "Invalid token, authorization denied" });
  }
  req.user = user;
  next();
};
