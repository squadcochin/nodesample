/*
    Server.js file is to connect the node application to mongodb databse server;
    Required packages -
    dotenv - for environmental variables
    mongoose - for enabeling mongodb functionalities like connect etc..
*/



const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Configuring environmental variables path, the environmental variables is located on the root directory  
dotenv.config({
    path : "./.env",
});

// To avoid the deprication warning 
mongoose.set("strictQuery", true);

// This section will connect the app to monodb server using database name and password.
mongoose.connect("mongodb+srv://sqadmonodb:"+process.env.DATABASE_PASSWORD+"@cluster0.elcb8ia.mongodb.net/testProject")
    .then(() => {
       console.log("connected.");
    })
    .catch(() => {
        console.log("connection failed.");
    })

module.exports = mongoose;