const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('forgetpass', {
        path: "Forgetpass page"
    })
})

module.exports = {
    path: '/forgetpass',
    router: router
}
