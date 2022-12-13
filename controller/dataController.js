// controller file for display data
const resultModel = require('../model/userModel');
const con = require('../config/server');


//get all users data
exports.getAllData = async(req, res, next)=>{


    con.Collection('users');
    let result = con.fin
    console.log(result);


}
