const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifiedToken = await jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifiedToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    console.log(token);

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized: no token provided");
  }
};

module.exports = auth;
