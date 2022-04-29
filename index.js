const app = require("express")();
const cors = require("cors");
const {sequelize}  = require("./models")
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
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