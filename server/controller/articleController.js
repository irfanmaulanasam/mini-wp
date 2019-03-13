const {Article} = require('../models/')
const jwt = require('../helpers/')

class ArticleController{
    static create(req,res){
        const {title,Article,statusPublish} = req.body
        Article.create({
            Title:title,
            Article:Article,
            statusPublish
        })
        .then(data=>{
            res.status(200).json({
                article:data,
                message:'Article success to publish'
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err.error
            })
        })
    }

    static findAll(req,res){
        let where = {}
        if (req.query && req.query.keyword) {
            where = {
                [req.query]:req.query.keyword
            }
        }
        Article.find(where)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static update(req,res){
        const {id} = req.params
        Article.findByIdAndUpdate(id)
        .then(data=>{
            res.status(200).json({
                data:data,
                message:'article has been delete successfully'
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err.error
            })
        })
    }

    static delete(req,res){
        let where = {}
        if (req.query && req.query.keyword) {
            where = {
                [req.query]:req.query.keyword
            }
        }
        Article.findOneAndDelete(where)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

}

module.exports = ArticleController