const mongoose = require('mongoose');

const user = process.env.ADMIN_USER
const pass = process.env.ADMIN_PASS
const uri = `mongodb+srv://${user}:${pass}@cluster0.ojlfn.mongodb.net/imagesdb?retryWrites=true&w=majority`
const db = mongoose.connection

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err => console.log(err))

db.once('open', _ => {
    console.log('MongoDB en marcha')
});

db.on('error', err => {
    console.log(err)
});