// controller file for display data
const resultModel = require('../model/userModel');
const con = require('../config/server');


//get all users data
exports.getAllData = async(req, res, next)=>{


    let users = con.Collection('users');
    users.find(async(err, data)=>{
        console.log(await data);
    })
}
