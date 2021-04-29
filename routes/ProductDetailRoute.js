const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('product_details', {
        title: "Product Details Page"
    })
})

module.exports = {
    path: '/product_details',
    router: router
}