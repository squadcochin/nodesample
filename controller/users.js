// controller file for user services
//registration of user
exports.registerUser = (req, res, next)=>{
    res.send(JSON.stringify({message : "Registration Successful"}));
}

//user login
exports.uesrLogin = (req, res, next)=>{
    res.send(JSON.stringify({message : "User Logged in Successfull"}));
}

//forgot password
exports.forgotPassword = (req, res, next)=>{
    res.send(JSON.stringify({message : "User Password Reset Successfull"}));
}