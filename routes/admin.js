/*
  This file use to declaring all the routes of admin
*/


// required packages- express, Router 
var express = require('express');
var router = express.Router();

// user defined files/packages 
const adminController = require('../controller/adminController');

// file for authentication
const isAuth = require('../middleware/authUserEmail');


//admin login route - localhost:3000/admin/login;
router.post('/login', isAuth, adminController.adminLogin);

//admin get all data route - localhost:3000/admin/getAllData;
router.get('/getAllData', adminController.findAll);

//admin create new user route - localhost:3000/admin/createNewUser;
router.post('/createNewUser', adminController.create);

//admin clear data from database route - localhost:3000/admin/clearAll;
router.get('/clearAll', adminController.clearAll);

//admin find single user route - localhost:3000/admin/findOne/?;
router.get('/findOne/:id', adminController.findOne);

//admin change password route - localhost:3000/admin/updatePassword;
router.post('/updatePassword', adminController.updatePassword);

//Admin change user detail 
router.post('/updateProfile/:id', adminController.editUserinfo);

//admin delete single user by change in deletedAt route - localhost:3000/admin/deleteUser/?;
router.get('/deleteUser/:id', adminController.deleteUser);

//admin delete all user by change in deletedAt route - localhost:3000/admin/deleteAllUsers;
router.get('/deleteAllUsers', adminController.deleteAllUsers);


module.exports = router;
