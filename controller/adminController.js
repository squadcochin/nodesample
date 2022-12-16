/*
    ALL ADMIN CONTROLLER FUNCTIONS ARE WORKING IN THIS FILE
*/


const { now } = require("mongoose");
const db = require("../model");
const Users = db.users;

// Admin login
exports.adminLogin = (req, res, next)=>{
  let email = req.body.email;
  let password = req.body.password;
  Users.find({email : email, password : password, role : "admin"})
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

// Create and Save a new Users
exports.create = async (req, res) => {
  // Validate request
  var userId = 1;
  if (!req.body.email || !req.body.password || !req.body.userName) {
    res.status(400).send({ message: "Please insert valide data!" });
    return;
  }
  Users.find({})
    .then(data => {
      userId = data.length + 1;
      const users = new Users({
        userId: userId,
        name: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        deletedAt : ''
      });
      // Save Users in the database
      users
        .save(users)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(401).send({
            message:
              err.message || "Some error occurred while creating the Users."
          });
        });

    })

};

// Retrieve all Userss from the database.
exports.findAll = (req, res) => {
  Users.find({"deletedAt" : ''})
    .then(data => {
      if(data.length == 0){
        res.send("No data found!");
      }else{
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Delete all Userss from the database.
exports.clearAll = (req, res) => {
  Users.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// Find a single Users with an userId
exports.findOne = (req, res) => {
  let userId = req.params.id;
  Users.find({"userId": userId, "deletedAt" : ''})
    .then(data => {
      if (data.length == 0)
        res.status(404).send({ message: "Not found Users with id " + userId });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(401)
        .send({ message: "Error retrieving Users with id=" + userId });
    });
};

// Update a admin password by the email and new password in the request
exports.updatePassword = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Users.updateOne({email : email, "deletedAt" : ''}, {$set : {password : password}})
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
};

// Update user informations
exports.editUserinfo = (req, res, next)=>{
  let name = req.body.name;
  let email = req.body.email;
  let role = req.body.password;
  Users.findOneAndUpdate({userId : req.params.id}, {$set : {name : name, email : email, role : role}}, {new: true})
  .then(data=>{
      if(data){
          res.status(200).send({
              message : "Successfully updated details",
              data : data
          })
      }
      else{
          throw new Error('Update Failed');
      }
  })
  .catch(err=>{
      res.status(401).send({
          message:
              err.message || "Invalid Credentials"
      });
  })
}

// Delete user by making change in deletedAt feald
exports.deleteUser = (req, res) => {
  let userId = req.params.id;
  let currentDate = Date("0000-00-00T00:00:00");
  Users.updateOne({userId : userId}, {$set : {deletedAt : currentDate}})
    .then(data=>{
        if(data.matchedCount > 0){
            res.status(200).send({
                message : "Data deleted Successfully",
                data : data
            })
        }
        else{
            throw new Error("Invalid userId");
        }
    })
    .catch(err=>{
        res.status(401).send({
            message:
                err.message || "Invalid Credentials"
        });
    })
};

// Delete a Users with the specified id in the request
exports.deleteAllUsers = (req, res) => {
  let currentDate = Date("0000-00-00T00:00:00");
  Users.updateMany({$set : {deletedAt : currentDate}})
    .then(data=>{
        if(data.matchedCount > 0){
            res.status(200).send({
                message : "Data deleted Successfully",
                data : data
            })
        }
        else{
            throw new Error("Invalid userId");
        }
    })
    .catch(err=>{
        res.status(401).send({
            message:
                err.message || "Invalid Credentials"
        });
    })
};



