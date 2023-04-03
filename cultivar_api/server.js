const express = require('express')
const users = require('./routes/users')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({
    origin: 'http://172.30.146.251:3000',
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

// MIDDLEWARES
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

// ROUTES
app.use('/users', users)

app.listen(5000, () => {
    console.log('server ready and listening on port 5000')
})



