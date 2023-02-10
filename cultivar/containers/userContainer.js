const Users = require('../models/Users')

const createTable = async () => {
    await Users.sync({force:true})
    console.log('table created')
}

createTable() 