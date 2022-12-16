/*
  This file use to declaring all the routes of admin
*/


// Required packages- express, Router 
var express = require('express');
var router = express.Router();

// Admin defined files/packages 
const adminController = require('../controller/adminController');

// File for email and password validation
const isAuth = require('../middleware/authUserEmail');


//Admin login route - localhost:3000/admin/login;
router.post('/login', isAuth, adminController.adminLogin);

//Admin get all data route - localhost:3000/admin/getAllData;
router.get('/getAllData', adminController.findAll);

//Admin create new user route - localhost:3000/admin/createNewUser;
router.post('/createNewUser', adminController.create);

//Admin clear data from database route - localhost:3000/admin/clearAll;
router.get('/clearAll', adminController.clearAll);

//Admin find single user route - localhost:3000/admin/findOne/?;
router.get('/findOne/:id', adminController.findOne);

//Admin change password route - localhost:3000/admin/updatePassword;
router.post('/updatePassword', adminController.updatePassword);

//Admin change user detail 
router.post('/updateProfile/:id', adminController.editUserinfo);

//Admin delete single user by change in deletedAt route - localhost:3000/admin/deleteUser/?;
router.get('/deleteUser/:id', adminController.deleteUser);

//Admin delete all user by change in deletedAt route - localhost:3000/admin/deleteAllUsers;
router.get('/deleteAllUsers', adminController.deleteAllUsers);

// To exports all router
module.exports = router;
