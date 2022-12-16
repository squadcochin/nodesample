/*
  This file use to declaring all the routes of user
*/

// Required packages- express, Router 
var express = require('express');
var router = express.Router();

// User defined files/packages 
const userController = require('../controller/userController');

// File for email and password validation
const isAuth = require('../middleware/authUserEmail');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//user login route - localhost:3000/users/login;
router.post('/login', isAuth, userController.uesrLogin);

//User change password route - localhost:3000/user/updatePassword;
router.post('/resetPassword', userController.forgotPassword);

//User change profile detail 
router.post('/updateProfile/:id', userController.editUserinfo);

// To exports all router
module.exports = router;
