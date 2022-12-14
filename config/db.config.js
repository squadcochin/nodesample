const dotenv = require('dotenv');
dotenv.config({
    path : "./.env",
});

module.exports = {
    url: "mongodb+srv://sqadmonodb:"+process.env.DATABASE_PASSWORD+"@cluster0.elcb8ia.mongodb.net/testProject"
  };