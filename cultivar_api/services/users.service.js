const Users = require('../db/models/Users')
const bcrypt = require('bcrypt')
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
            console.log(userRes)
            bcrypt.compare(user.password, userRes.dataValues.password, (error, result) => {
                if(result) {
                    delete user.password
                    delete userRes.dataValues.password
                    const token = jwt.sign(user, process.env.SECRET, {expiresIn: '3m'})
                    return token
                }
                else{
                    console.log('jaja')
                }
            })
        }catch(err){
            console.log('jaja2')
        }
    }
    
}

module.exports = new UsersCont()

