const mongoose = require("mongoose");

const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl, {
    useNewUrlParser:true
}, () => {
    console.log("Database connected");
})