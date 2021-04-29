const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('contact', {
        path: "Contact page"
    })
})

module.exports = {
    path: '/contact',
    router: router
}
