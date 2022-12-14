const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
    path : "./.env",
});

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://sqadmonodb:"+process.env.DATABASE_PASSWORD+"@cluster0.elcb8ia.mongodb.net/testProject")
    .then(() => {
       console.log("connected.");
    })
    .catch(() => {
        console.log("connection failed.");
    })

module.exports = mongoose;