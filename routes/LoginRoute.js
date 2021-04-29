const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('login', {
        path: "Login page"
    })
})

module.exports = {
    path: '/login',
    router: router
}
