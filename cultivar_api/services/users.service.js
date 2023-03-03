const Users = require('../db/models/Users')
const bcrypt = require('bcrypt')

const UsersCont = class {
    constructor(){
        (async () => {
            await Users.sync()
            console.log('table users ready')
        })()
    }

    createUser = async (user) => {
        try{
            console.log(user)
            await Users.create(user)
        }catch(err){
            console.log(err)
        }
    }

    checkUser = async (user) => {
        try{
            const userRes = await Users.findOne({
                attributes: [
                    'password'
                ],
                where: {
                    nickName: user.nickName
                }
            })
            return userRes
        }catch(err){
            console.log(err)
        }
    }
    
}

module.exports = new UsersCont()

