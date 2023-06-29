const express = require("express");
const app = express();
const stationRouter = require("./routers/stationRouter");
const PORT = process.env.PORT || 3010


app.use("/station", stationRouter);

app.listen(PORT, () => {
    console.log("Listening to port: "+ PORT);
})