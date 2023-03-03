const express = require('express')
const users = require('./routes/users')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', users)

app.listen(5000, () => {
    console.log('server ready and listening on port 5000')
})



