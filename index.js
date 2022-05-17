const app = require("express")();
const cors = require("cors");
const {sequelize}  = require("./models")
const config = require("./config")
const authentication = require("./middlewares/authentication")
var bodyParser = require("body-parser");
const db = require('./managers/connections/ConnectionMongoose')
app.use(bodyParser.json());
app.use(cors());


const PORT = config.PORT;

app.use("/api", require("./routes"));

//route for registered users
app.use(process.env.ROOT_LOGGED,authentication, require('./routes'));


app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully to PG.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

})