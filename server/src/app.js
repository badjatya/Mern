require('dotenv').config();
const express = require("express");
const app = express();
require("./db/mongoose");

// Configuration
app.use(express.json())

// Routes
app.use(require("./routes/authRoutes"))

app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
})