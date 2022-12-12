// // database connection establishment 
// // required packages- mysql, dotenv

// const mysql = require('mysql');
// const dotenv = require('dotenv');

// // configuring dotenv path
// dotenv.config({
//     path : "./.env",
//   });

//   // creating database connection and set credentials 
// const con = mysql.createConnection({
//     host : process.env.DATABASE_HOST,
//     user : process.env.DATABASE_USER,
//     database : process.env.DATABASE_NAME,
// });

// //connecting to database 
// con.connect((err, res)=>{
//     if(err){
//         console.log("Databse connction failed" + err);
//     }
//     if(res){
//         console.log("Databse Connected Successfully");
//     }
// });

// // exporting the connection 
// module.exports = con;


//connecting to mongodb server

const mongoose = require('mongoose')

const url = `mongodb+srv://sqadmonodb:squad%40123@cluster0.elcb8ia.mongodb.net/test`;

mongoose.set('strictQuery', true);
mongoose.connect(url, (err, con)=>{
    if(err){
        console.log('Connection failed' + err);
    }
    if(con){
        console.log('Connected Success');
    }
})
module.exports = mongoose