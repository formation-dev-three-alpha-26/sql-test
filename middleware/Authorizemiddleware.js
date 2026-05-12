const jwt = require("jsonwebtoken");
require("dotenv").config();
const autorize = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.send("token not found");
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    return res.status(500).send("token invalide");
  }
};

module.exports = autorize;






