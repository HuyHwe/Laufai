const express = require("express");
const bodyParser = require("body-parser");
const jsonStationRouter = express.Router();
const songs = require("../models").songs;

jsonStationRouter.use(bodyParser.json());

jsonStationRouter.get("/songs",(req, res, next) => {
    songs.findAll().then((response) => {
        res.json(response);
    }).catch(e => {
        console.log(e);
    })
    
})

jsonStationRouter.post("/nop", (req, res, next) => {
    const id =  req.body.id;
    songs.increment('nop', { by: 1, where: { id: id }});
    
})

module.exports = jsonStationRouter;