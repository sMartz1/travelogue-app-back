require('./connections/ConnectionMongoose')
const Img = require('../schemas/Img')

const newImg = new Img({
    pathImage: "Esta es la ruta",
    idRel: "Aqui va el UUID a sql",
    type: "Nose que es esto asi que xD"
})

console.log(newImg)