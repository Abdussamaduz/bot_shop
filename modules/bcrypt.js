const bcrypt = require('bcrypt')

async function generateCrypt(data) {
    let salt= bcrypt.genSaltSync(10)
    let crypt = bcrypt.hashSync(data, salt)
    return crypt
}

async function checkCrypt(data, hash) {
    return bcrypt.compareSync(data, hash)
}

module.exports = {
    checkCrypt,
    generateCrypt
}