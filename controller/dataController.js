// controller file for display data
const resultModel = require('../model/userModel');
const con = require('../config/server');


//get all users data
exports.getAllData = async(req, res, next)=>{


    con.Collection.dbName = 'users';
    let result = con.Collection.find({"password" : 12345});
    console.log(result);


    // let result = await resultModel.getAllData();
    // res.send(
    //     {   message : "Data Fetched Successfull",
    //         data : result,
    //     }
    // );

    // let users = con.Collection('users');
    // users.find(async(err, data)=>{
    //     console.log(await data);
    // })
}
