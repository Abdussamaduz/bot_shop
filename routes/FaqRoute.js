const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('faq', {
        path: "Faq page"
    })
})

module.exports = {
    path: '/faq',
    router: router
}
