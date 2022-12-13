// controller file for display data
const resultModel = require('../model/userModel');
const con = require('../config/server');


//get all users data
exports.getAllData = async(req, res, next)=>{

    let result = await resultModel.getAllData();
    res.send(
        {   message : "Data Fetched Successfull",
            data : result,
        }
    );

    // let users = con.Collection('users');
    // users.find(async(err, data)=>{
    //     console.log(await data);
    // })
}
