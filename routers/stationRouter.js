const express = require("express");
const stationRouter = express.Router();
const songs = require("../models").songs;

stationRouter.get("/", (req, res, next) => {
    res.render("station");
})
stationRouter.get("/json",(req, res, next) => {
    songs.findAll().then((response) => {
        res.json(response);
    }).catch(e => {
        console.log(e);
    })
    
})

module.exports = stationRouter;