// controller file for user services
//required packages - model file for databse and etc...
const db = require("../model");
const Users = db.users;

//registration of user
exports.registerUser = (req, res, next)=>{
    res.send(JSON.stringify({message : "Registration Successful"}));
}

//user login
exports.uesrLogin = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    Users.find({email : email, password : password})
    .then(data=>{
        if(data.length > 0){
            res.status(200).send({
                message : "Successfully Logged in",
                data : data
            })
        }
        else{
            throw new Error("Invalid email or password");
        }
    })
    .catch(err=>{
        res.status(401).send({
            message:
                err.message || "Invalid Credentials"
        });
    })
}

//forgot password
exports.forgotPassword = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    Users.updateOne({email : email}, {$set : {password : password}})
    .then(data=>{
        if(data.matchedCount >0){
            res.status(200).send({
                message : "Successfully password updated",
                data : data
            })
        }
        else{
            throw new Error("Invalid Email");
        }
    })
    .catch(err=>{
        res.status(401).send({
            message:
                err.message || "Invalid Credentials"
        });
    })
}