const mongoose = require("mongoose");

// Library
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Token
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

// hashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
  }

  next();
});

// Model
const User = mongoose.model("User", userSchema);
module.exports = User;
