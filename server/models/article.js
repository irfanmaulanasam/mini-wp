const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    // user: {
    //     type:Schema.objectId.user,
    //     ref:'User'
    // },
    Title:{
        type:String,
        require: true
    },
    Article:{
        type:String,
        require:true
    },
    statusPublish:Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Article = mongoose.model('Articles',ArticleSchema)

module.exports = Article