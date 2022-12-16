/* 
Authenticate all the inputs
 validating user input data like eamil and password 
 password should be at 8 character long 
 email should be at the gmail format
 the fields should not be empty
*/

// Exporting function for email and password validation
module.exports = (req, res, next)=>{
    let emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(req.body.email == '' && req.body.password == ''){
        return res.status(200).send({
            message : "Email id and password is required",
        })
    }
    else if(req.body.email != '' && req.body.password == ''){
        return res.status(200).send({
            message : "Password is required",
        })
    }
    else if(req.body.email == '' && req.body.password != ''){
        return res.status(200).send({
            message : "Email is required",
        })
    }
    else if(req.body.email != '' && !req.body.email.match(emailValidate)){
        return res.status(200).send({
            message : "Email should be valid, sample valid email address like : abc@gmail.com"
        })
    }
    else if(req.body.password != '' && req.body.password.length < 8){
        return res.status(200).send({
            message : "Password should be at least 8 characters long"
        })
    }
    else{
        next();
    }
}