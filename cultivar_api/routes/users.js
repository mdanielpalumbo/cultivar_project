const express = require('express');
const service = require('../services/users.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

console.log(service)

const users = express.Router();

users.post('/register', async (req,res) => {
    try{
        const user = req.body
        await service.createUser(user)
        res.status(204)
        res.json({response: 'user succesfully created'})
    }catch(err){
        res.json(err)
    }
})

users.post('/login', async(req,res) => {
    try{
        const user = req.body
        const token = await service.userLogin(user)
        res.cookie('token', token).send('cookie properly set')
    }catch(err){
        console.log(err)
        res.status(403).json(err)
    }
})


module.exports = users