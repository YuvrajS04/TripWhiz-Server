const locationRouter = require("express").Router();
const fs = require("fs");

function readLocationData(){
    const locationFile = fs.readFileSync("./data/location-details.json");
    const locationData = JSON.parse(locationFile);
    return locationData;
}

const url = "http://localhost:5555"

locationRouter.get("/", (_req, res) => {
    const locationData = readLocationData();
    res.json(locationData)
});

module.exports = locationRouter;
