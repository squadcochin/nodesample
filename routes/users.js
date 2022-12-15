var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//user login route - localhost:3000/users/login;
router.post('/login', userController.uesrLogin);

// user password update route;
router.post('/resetPassword', userController.forgotPassword);

module.exports = router;
