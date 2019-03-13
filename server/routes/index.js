var express = require('express');
var router = express.Router();
const {ArticleController} = require('../controller/')

router.get('/listarticle', ArticleController.findAll)
router.post('/addarticle',ArticleController.create)
router.post('/updatearticle',ArticleController.update)
router.post('/deletearticle',ArticleController.delete)

module.exports = router;
