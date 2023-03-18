const express = require('express');
const service = require('../services/users.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



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
        const token = await usersCont.userLogin(user)
        res.status(200).json(token)
    }catch(err){
        console.log('erraste')
        res.status(403).json(err)
    }
})


module.exports = users