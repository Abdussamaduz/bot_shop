const fs = require('fs')
const path = require('path')
const express = require('express')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const application = express()

const PORT = process.env.PORT


// Middlewares -- Start
const cookieParser = require('cookie-parser')
const userMiddleaware = require('./middlewares/UserMiddleware')
application.use(express.json())
application.use(express.urlencoded({ extended: true }))
application.use(cookieParser())
application.use(userMiddleaware)
// Middlewares -- End


// Settings -- Start
application.set('view engine', 'ejs')
application.set('views', path.join(__dirname, "/views"))
application.listen(PORT, () => console.log(`${PORT}chi portni ishga tushdi`))
application.use(express.static('public'))
// Settings -- End


// Routes -- Start
const routesPath = path.join(__dirname, 'routes')
fs.readdir(routesPath, (err, files) => {
    files.forEach(file => {
        const Route = require(path.join(__dirname, "routes", file))
        if(Route.path && Route.router) application.use(Route.path, Route.router)
    })
})
// Routes -- End