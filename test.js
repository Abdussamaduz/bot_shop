const url = "mongodb://localhost:27017/shop"
const mongoose = require('mongoose')
const Schema = mongoose.Schema

async function main() {
    const client = await mongoose.connect(url, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const UserSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    })

    let users = await mongoose.model('users', UserSchema)
    users = await users.create({ name: "Usmon" })
    console.log(users);
}


main()