const {Schema, model} = require('mongoose')

const RenabSchema = new Schema({
   title: String,
   subtitle: String,
   description: String,
   img: String,
   img_price: String
}, {collection: 'renab'})

module.exports = model('Renab', RenabSchema)