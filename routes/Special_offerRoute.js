const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('special_offer', {
        path: "Special_offer page"
    })
})

module.exports = {
    path: '/special_offer',
    router: router
}
