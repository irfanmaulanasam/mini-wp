const {Article} = require('../models/')
// const jwt = require('../helpers/')

class ArticleController{
    static create(req,res){
        const {title,article,statusPublish} = req.body
        Article.create({
            Title:title,
            Article:article,
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
        Article.find()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
    
    static findOne(req,res){
        Article.findById(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.error)
        })
    }

    static update(req,res){
        const {id} = req.params
        console.log(req.body,'data olahan')
        Article
        // .findByIdAndUpdate(id, {
        //     Title : req.body.title,
        //     Article : req.body.article,
        //     statusPublish : req.body.statusPublish
        // })
        .findById(id)
        .then((article)=>{
            if(!article){
                throw Article().invalidate('article', 'not found', id)
            }
            article.Title = req.body.title;
            article.Article = req.body.article;
            article.statusPublish = req.body.statusPublish;
            return article.save()
        })
        // .then(async (data)=>{
        //     console.log(data,'data update')
        //     console.log(data)
        //     res.status(200).json({
        //         data: await Article.findById(id),
        //         message:'article has been update successfully'
        //     })
        // })
        .catch(err=>{
            res.status(500).json({
                message: err.Error
            })
        })
    }

    static delete(req,res){
        console.log(req.params)
        Article.findByIdAndDelete(req.params.id)
        .then(data=>{
            console.log(data)
            res.status(200).json({
                message:' article success to delete',
                data:data
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

}

module.exports = ArticleController