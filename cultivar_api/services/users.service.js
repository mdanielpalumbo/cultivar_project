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
        const saltRounds = 10;
        bcrypt.hash(user.password, saltRounds, async(err, hash) => {
            try{
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

            console.log(userRes)
            return userRes
        }catch(err){
            console.log(err)
        }
    }
    
}

module.exports = new UsersCont()

