const { Schema, model } = require('mongoose')

const imgSchema = new Schema({
    pathImage: String,
    idRel: String,
    type: String
})

module.exports = model('Img', imgSchema);