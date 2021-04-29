const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('product_summary')
})

module.exports = {
    path: '/product_summary',
    router: router
}