// routes file for declaring all the routes 
// required packages- express, Router 
var express = require('express');
var router = express.Router();

// user defined files/packages 
const userController = require('../controller/userController');
const adminController = require('../controller/adminController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get all data
router.get('/getAllData', adminController.findAll);

module.exports = router;
