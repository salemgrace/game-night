const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactgames", 
    { useNewUrlParser: true } 
);

const gameSeed = [
    {
        name: "Catch Phrase",
        owner: "Salem"
    },
    {
        name: "Imaginif",
        owner: "Salem"
    },
    {
        name: "Bingo",
        owner: "Salem"
    },
    {
        name: "Anomia",
        owner: "Malini"
    },
    {
        name: "Exploding Kittens",
        owner: "Hannah"
    },
    {
        name: "Code Names",
        owner: "Hannah"
    }
];

db.Game
    .remove({})
    .then(() => db.Game.collection.insertMany(gameSeed))
    .then(data => {
        console.log(data.result.n + " games inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });