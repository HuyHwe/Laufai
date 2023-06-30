const express = require("express");
const stationRouter = express.Router();

stationRouter.get("/", (req, res, next) => {
    res.render("station");
})

module.exports = stationRouter;