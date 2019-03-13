const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    // user: {
    //     type:Schema.objectId.user,
    //     ref:'User'
    // },
    Title:{
        type:String,
        require: [true,'title cant empty'],
    },
    Article:{
        type:String,
        require:[true,'article cant empty']
    },
    statusPublish:Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Article = mongoose.model('Articles',ArticleSchema)

module.exports = Article