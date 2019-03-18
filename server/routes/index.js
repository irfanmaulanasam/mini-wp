var express = require('express');
var router = express.Router();
const {ArticleController} = require('../controller/')

router.get('/listarticle', ArticleController.findAll)
router.post('/addarticle',ArticleController.create)
router.get('/updatearticle/:id',ArticleController.findOne)
router.put('/updatearticle/:id',ArticleController.update)
router.delete('/deletearticle/:id',ArticleController.delete)

module.exports = router;
