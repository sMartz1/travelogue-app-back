const app = require("express")();
const cors = require("cors");
const {sequelize}  = require("./models")
const config = require("./config")
var bodyParser = require("body-parser");
const db = require('./managers/connections/ConnectionMongoose')
app.use(bodyParser.json());
app.use(cors());


const PORT = config.PORT;

app.use("/api", require("./routes"));

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully to PG.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

})