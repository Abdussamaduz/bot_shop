const router = require('express').Router()

router.get('/', (request, response) => {
    response.render('legal_notice', {
        path: "Legal_notice page"
    })
})

module.exports = {
    path: '/legal_notice',
    router: router
}
