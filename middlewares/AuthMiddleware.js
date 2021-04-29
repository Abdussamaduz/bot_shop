const { checkToken } = require('../modules/jwt')

module.exports = async function (request, response, next) {
    let token = request?.cookies?.token
    if(!token) {
        response.redirect('/signup')
        token = checkToken(token)
        return
    } else {
        response.user = token
        response.redirect('/')
    }

    next()
}