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

jsonStationRouter.get("/songs/:type_id",(req, res, next) => {
    songs.findAll({where:{type_id: Number(req.params.type_id)}}).then((response) => {
        res.json(response);
    }).catch(e => {
        console.log(e);
    })
    
})

module.exports = jsonStationRouter;