const Users = require('../db/models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const UsersCont = class {
    constructor(){
        (async () => {
            await Users.sync()
            console.log('table users ready')
        })()
    }

    createUser = async (user) => {
        const saltRounds = 10;
        bcrypt.hash(user.password, saltRounds, async(err, hash) => {
            try{
                console.log('jaja')
                await Users.create({
                    ...user,
                    password:hash
                })
                delete user.password
                return user;
            }catch(err){
                console.log(err)
                return err
            }
        })
    }

    userLogin = async (user) => {
        try{
            console.log(user)
            const userRes = await Users.findOne({
                attributes: [
                    'password'
                ],
                where: {
                    nickName: user.nickName
                }
            })
            console.log(userRes)
            bcrypt.compare(user.password, userRes.dataValues.password, (result) => {
                console.log(result)
                    delete user.password
                    delete userRes.dataValues.password
                    return jwt.sign(user, process.env.SECRET, {expiresIn: '3m'})
                
            })
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new UsersCont()

