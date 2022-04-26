const app = require("express")();
const cors = require("cors");
const config = require("./config")
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

const PORT = config.PORT;

app.use("/api", require("./routes"));

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})