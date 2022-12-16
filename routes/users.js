var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');
const isAuth = require('../middleware/authUserEmail');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//user login route - localhost:3000/users/login;
router.post('/login', isAuth, userController.uesrLogin);

// user password update route;
router.post('/resetPassword', userController.forgotPassword);

router.post('/updateProfile/:id', userController.editUserinfo);

module.exports = router;
