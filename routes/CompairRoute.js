const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('compair', {
        path: "Compair page"
    })
})

module.exports = {
    path: '/compair',
    router: router
}
