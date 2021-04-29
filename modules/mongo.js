const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/shop"

async function client () {
    return await mongoose.connect(url, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = client