const Users = require('../models/Users')
// Esto es para crear la tabla, genera una sincronización con la DB. Esto en producción (después cuando ya tengamos algo un poco más serio) se hace con migraciones.
// const createTable = async () => {
//     await Users.sync({force:true})
//     console.log('table created')
// }

// createTable() 

const UsersCont = class {
    constructor(){
        (async () => {
            await Users.sync()
            console.log('table created')
        })()
    }

    createUser = async (user) => {
        try{
            const {userName, email, password} = user
            const newUser = await Users.create({
                nickName: userName,
                email: email,
                password: password
            })
            return newUser.toJSON()
        }catch(err){
            console.log(err)
        }
    }

    
}

const usersCont = new UsersCont()

