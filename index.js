const app = require("express")();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
app.use("/api", require("./routes"));
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})