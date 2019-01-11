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
        owner: "Salem",
        minPlayers: 2
    },
    {
        name: "Imaginif",
        owner: "Salem",
        minPlayers: 4
    },
    {
        name: "Bingo",
        owner: "Salem",
        minPlayers: 3
    },
    {
        name: "Anomia",
        owner: "Malini",
        minPlayers: 4
    },
    {
        name: "Exploding Kittens",
        owner: "Hannah",
        minPlayers: 3
    },
    {
        name: "Code Names",
        owner: "Hannah",
        minPlayers: 4
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