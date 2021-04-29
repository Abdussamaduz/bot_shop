const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('tac', {
        path: "tac page"
    })
})

module.exports = {
    path: '/tac',
    router: router
}