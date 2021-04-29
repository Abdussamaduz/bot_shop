const { Schema } = require('mongoose')
const client = require('../modules/mongo')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unuque: true,
        index: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    card: [
        {
            count: {
                type: Number
            },
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            title: String,
            price: Number,
            pricingTotal: Number
        }
    ],
    pricingTotal: {
        type: Number,
        default: 0
    }
})
 
async function UserModel() {
    let db = await client()
    let model = db.model('users', UserSchema)
    return model
}

async function createUser(phone, name, password, card, pricingTotal){
    console.log(phone, name, password, card, pricingTotal);
    const db = await UserModel()
    return await db.create({
        phone, name, password, card, pricingTotal
    })
}

async function updateDate(objectId, bdate) {
    const db = await UserModel()
    return await db.updateOne({ _id: objectId }, { bdate })
}



module.exports = {
    createUser,
    updateDate
}