const express = require('express');
const service = require('../services/users.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()


const users = express.Router();

users.post('/register', async (req,res) => {
    try{
        const user = req.body
        await service.createUser(user)
        res.status(204).json('userCreated')
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