const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const stationRouter = require("./routers/stationRouter");
const PORT = process.env.PORT || 3010;

app.use(bodyParser.urlencoded({extended:true}));
app.use("/static", express.static(path.join(__dirname,'public')));
app.set("view engine", 'ejs');

app.use("/station", stationRouter);

app.listen(PORT, () => {
    console.log("Listening to port: "+ PORT);
})