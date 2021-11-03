const router = require("express").Router();

// Model
const User = require("../models/user");

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
  } catch (error) {}
});

module.exports = router;
