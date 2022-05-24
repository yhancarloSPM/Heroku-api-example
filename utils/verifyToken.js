const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = function authorization(req, res, next) {
  const token = req.header("authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.User = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};
