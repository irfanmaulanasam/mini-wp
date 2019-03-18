const bcrypt = require('bcryptjs')
const jwt = require('../helpers/')
const dotenv = require('dotenv').config()
const Gclient_id = dotenv.client_id
const User = require('../models/user')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(Gclient_id)

class UserController{
    static homePage(req,res){
        console.log(req.headers)
        const {token}= req.headers
        jwt.verify(token)
        .then(({id})=>{
            return User.findById(id)
        })
        .then(data=>{
            console.log(data)
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err.error)
        })
    }

    static GsignIn(req,res){
        let email = null
        let password = null
        let name = null
        client.verifyIdToken({
            idToken:req.body.token,
            audience:Gclient_id
        })
        .then(({payload})=>{
            email = payload.email
            name = payload.given_name
            password = payload.given_name +'fancy'
            return User.findOne({
                email:payload.email
            })
        })
        .then(data=>{
            // console.log(data,`data hasil dari database`)
            if(data === null){
                return User.create({
                    email:email,
                    password:password
                })
            } else if (bcrypt.compareSync(password,data.password)){
                // console.log('msuk bcrypt')
                return jwt.create(data.id)
            } else {
               res.status(401).json({
                   message:'username/password is invalid'
               })
           }
        })
        .then(data=>{
            if (data === null) {
                return jwt.create(name+'fancy')   
            }else {
                return res.status(200).json(data)
            }
        })
        .then (data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json({
                message: err.message
            })
        })
    }

    static signIn(req,res){
        console.log(req.body)
        const {email , password} = req.body
        User.findOne({email:email})
        .then(data=>{
            // console.log(data,' <<< hasil pencarian data')
            if (data === null) {
                // console.log(data.password,'password yang mau dikomparasi')
                res.status(404).json({
                    message:'username/password is invalid'
                })
            } else if (bcrypt.compareSync(password,data.password)){
                // console.log('masuk pengecekan password')
                const payload = {
                    id:data.id
                }
                return jwt.create(payload)
            } else {
               res.status(401).json({
                   message:'username/password is invalid'
               })
           }
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(({error})=>{
            res.status(500).json(error)
        })
    }

    static signUp(req,res){
        console.log(req.body)
        User.create(req.body)
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(({error})=>{
            res.status(500).json(error)
        })
    }

    static update(req,res){
        const {token} = req.params
        jwt.verify(token)
        .then(({id})=>{
            return User.findByIdAndUpdate(id,req.body)
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json({
                error:err.message
            })
        })
    }

    static delete(req,res){
        const {token} = req.params
        jwt.verify(token)
        .then(({id})=>{
            return User.findByIdAndDelete(id,req.body)
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json({
                error:err.message
            })
        })
    }
}

module.exports = UserController