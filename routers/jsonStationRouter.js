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
    console.log(id);
    songs.findOne({where: {
        id:id,
    }}).then((response) => {
        songs.update({nop: response.nop+1}, {where: 
            {
                id:id
            }
        });
        console.log("nop updated");
    }).catch((e) => {
        console.log(e);
    })
    
})

module.exports = jsonStationRouter;