const { verify, sign } = require('jsonwebtoken')

const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

function generateJWTToken(data) {
    return sign(data, process?.env?.SECRET_WORD)
}

function checkJWTToken(token) {
    try {
        return verify(token, process.env.SECRET_WORD)
    } catch (error) {
        return false
    }
}

module.exports = {
    generateJWTToken,
    checkJWTToken
}