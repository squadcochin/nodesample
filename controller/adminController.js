const db = require("../model");
const Users = db.users;

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
        deleted_at : "" 
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
  Users.find({})
    .then(data => {
      res.send(data);
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

// Find a single Users with an id
exports.findOne = (req, res) => {
  let userId = req.params.id;
  Users.find({ "userId": userId})
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

// Update a Users by the id in the request
exports.updatePassword = (req, res) => {
  console.log(req.body);
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
};

// Delete a Users with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Users.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Users with id=${id}. Maybe Users was not found!`
        });
      } else {
        res.send({
          message: "Users was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Users with id=" + id
      });
    });
};



