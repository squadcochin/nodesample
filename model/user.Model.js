/*
  This file use to declare database connections between collections and fiels details
*/

const { Timestamp } = require("mongodb");

// Connecting database schema
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      userId : Number,
      name: String,
      password: String,
      email: String,
      role: String,
      deletedAt: Date
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Users = mongoose.model("users", schema);
  return Users;
};