const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('components', {
        path: "Components page"
    })
})

module.exports = {
    path: '/components',
    router: router
}
