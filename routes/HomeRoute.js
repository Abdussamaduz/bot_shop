const router = require('express').Router()
const Renab = require('../models/renab')
const Product = require('../models/products')


router.get('/', (request, response) => {
    response.render('index')
})

module.exports = {
    path: '/',
    router: router
}