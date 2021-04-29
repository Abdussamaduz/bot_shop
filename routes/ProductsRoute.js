const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('products', {
        title: "Products Page"
    })
})

module.exports = {
    path: '/products',
    router: router
}