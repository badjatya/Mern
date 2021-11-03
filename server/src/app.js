require('dotenv').config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
require("./db/mongoose");

// Configuration
app.use(express.json())

// Routes
app.use(require("./routes/authRoutes"))

app.get("/", (req,res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})