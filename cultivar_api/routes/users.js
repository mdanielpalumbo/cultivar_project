const express = require('express');
const usersCont = require('../containers/usersCont');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const users = express.Router();
const saltRounds = 10;

users.post('/register', async (req,res) => {
    try{
        const { nickName ,email, password } = req.body
        bcrypt.hash(password, saltRounds, async(err, hash) => {
            try{
                const newUser = {nickName, email, password: hash}
                await usersCont.createUser(newUser)
                res.status(204).json('userCreated')
            }catch(err){
                res.json(err)
            }
        })
    }catch(err){
        res.json(err)
    }
})

users.post('/login', async(req,res) => {
    try{
        const user = req.body
        const userRes = await usersCont.checkUser(user)
        bcrypt.compare(user.password, userRes.dataValues.password, (error, result) => {
            if(result) {
               const token = jwt.sign(user, process.env.SECRET, {expiresIn: '3m'})
               res.status(200).json({token}) 
            }
            else{
                res.status(403).json({error: 'invalid user'})
            }
        })
    }catch(err){
        res.json(err)
    }
})


module.exports = users