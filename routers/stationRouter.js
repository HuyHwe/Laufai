const express = require("express");
const bodyParser = require("body-parser");
const stationRouter = express.Router();
const songs = require("../models").songs;

stationRouter.use(bodyParser.urlencoded({extended:true}));

stationRouter.get("/", (req, res, next) => {
    res.render("station");
})

module.exports = stationRouter;