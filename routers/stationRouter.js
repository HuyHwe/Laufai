const express = require("express");
const stationRouter = express.Router();

stationRouter.get("/", (req, res, next) => {
    res.send("ok");
})

module.exports = stationRouter;