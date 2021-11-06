const router = require("express").Router();

// Model
const User = require("../models/user");

// Lib
const bcrypt = require("bcryptjs");

// User Registration
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;

  // if field doest not exit
  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "enter all filed" });
  }

  try {
    //checking is user exits
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(422).json({ error: "User already exits" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      confirmPassword,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(422).json({ error: "Invalid user" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(422).json({ error: "Invalid user password" });
    }

    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 25892000000),
    });

    res.json({ message: "User login successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Not found" });
  }
});

module.exports = router;
