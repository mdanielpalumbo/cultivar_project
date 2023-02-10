const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http')
const {Container} = require('./container')


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


