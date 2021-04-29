const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('normal', {
        path: "Normal page"
    })
})

module.exports = {
    path: '/normal',
    router: router
}
