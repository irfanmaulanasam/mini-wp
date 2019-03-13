const jwt = require ('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secret

class GetToken {

    static create(id){
        console.log(secret,'ini secret')
        return new Promise((resolve,reject)=>{
            jwt.sign(id, secret,(err,data)=> {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }

    static verify(token){
        return new Promise((resolve,reject)=>{
            jwt.verify(token,secret,(err,data)=>{
                if(!err){
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
            
    }
}

module.exports = GetToken