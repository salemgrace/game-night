const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactgames", 
    { useNewUrlParser: true } 
);

const gameSeed = [
    {
        title: "Catch Phrase",
        owner: "Salem",
        minPlayers: 2
    },
    {
        title: "Imaginiff",
        owner: "Salem",
        minPlayers: 3
    },
    {
        title: "Rummikub",
        owner: "Salem",
        minPlayers: 2
    },
    {
        title: "Anomia",
        owner: "Malini",
        minPlayers: 3
    },
    {
        title: "Exploding Kittens",
        owner: "Hannah",
        minPlayers: 2
    },
    {
        title: "Code Names",
        owner: "Hannah",
        minPlayers: 4
    },
    {
        title: "Scattegories",
        owner: "Xander",
        minPlayers: 2
    }
];

db.Game
    .remove({})
    .then(() => db.Game.collection.insertMany(gameSeed))
    .then(data => {
        db.Owner
            .find({}).populate({
                path: "name",
                select: "owner"
            }).exec();
        // console.log(data.result.n + " games inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });