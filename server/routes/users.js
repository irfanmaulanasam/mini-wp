var express = require('express');
var router = express.Router();

const {UserController} = require('../controller/')

router.post('/signup',UserController.signUp)
router.post('/signin',UserController.signIn)
router.post('/Gsignin',UserController.GsignIn)
router.put('/updateuser/:id',UserController.update)
router.delete('/deleteuser/:id',UserController.delete)
router.get('/homepage',UserController.homePage)


module.exports = router;
