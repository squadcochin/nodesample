//routes file for declaring all the routes 
// required packages- express, Router 
var express = require('express');
var router = express.Router();

// user defined files/packages 
const userController = require('../controller/users');
const dataController = require('../controller/dataController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//registration
router.post('/add-user', userController.registerUser);

//login
router.post('/user-login', userController.uesrLogin);

//forgot password
router.post('/password-reset', userController.forgotPassword);

// get all data
router.get('/getAllData', dataController.getAllData);

module.exports = router;
