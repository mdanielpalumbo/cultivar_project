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
            const userRes = await Users.findOne({
                attributes: [
                    'password'
                ],
                where: {
                    nickName: user.nickName
                }
            })
            let jaja = await bcrypt.compare(user.password, userRes.dataValues.password)  
            delete userRes.dataValues.password
            delete user.password
            return jwt.sign({data: user}, process.env.SECRET, {expiresIn:'15m'})
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = new UsersCont()

