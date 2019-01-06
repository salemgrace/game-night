const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactgames"
);

const gameSeed = [
    {
        name: "Monopoly",
        owner: "Salem"
    },
    {
        name: "Bingo",
        owner: "Salem"
    },
    {
        name: "Go Fish",
        owner: "Malini"
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