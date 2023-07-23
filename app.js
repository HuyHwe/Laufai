// dependencies
const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./models").sequelize;

// routers and port
const stationRouter = require("./routers/stationRouter");
const jsonStationRouter = require("./routers/jsonStationRouter");
const PORT = process.env.PORT || 3010;

// essential midware 

app.use("/static", express.static(path.join(__dirname,'public')));
app.set("view engine", 'ejs');
app.use("/station", stationRouter);
app.use("/station/json", jsonStationRouter);

// connect to database and start listening
sequelize.authenticate()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Listening to port: "+ PORT);
        })
})