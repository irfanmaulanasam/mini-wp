var express = require('express');
var router = express.Router();

const {UserController} = require('../controller/')

router.post('/signup',UserController.signUp)
router.post('/signin',UserController.signIn)
router.get('/homepage',UserController.homePage)


module.exports = router;
