const express = require('express')
const users = require('./routes/users')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({

    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

// MIDDLEWARES
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/build'))


// ROUTES
app.use('/users', users)
app.get('/', function (req,res) {
    res.sendFile(__dirname + "/build/index.html");
  });

app.listen(5000, () => {
    console.log('server ready and listening on port 5000')
})



