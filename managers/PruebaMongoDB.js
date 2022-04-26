require('./connections/ConnectionMongoose')
const Img = require('../schemas/Img')

const newImg = new Img({
    pathImage: "Esta es la ruta",
    idRel: "Aqui va el UUID a sql",
    type: "Nose que es esto asi que xD"
})

newImg.save((err, document) => {
    if(err) console.log(err)
    console.log(document)
})