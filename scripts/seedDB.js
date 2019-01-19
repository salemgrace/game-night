const mongoose = require("mongoose");
const db = require("../models");

var salem_id = mongoose.Types.ObjectId();
var malini_id = mongoose.Types.ObjectId();
var hannah_id = mongoose.Types.ObjectId();
var xander_id = mongoose.Types.ObjectId();

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactgames", 
    { useNewUrlParser: true } 
);

// const gameSeed = [
//     {
//         name: "Salem",
//         games: [
//             {
//                 title: "Catch Phrase",
//                 minPlayers: 2
//             },
//             {
//                 title: "Imaginiff",
//                 minPlayers: 3
//             },
//             {
//                 title: "Rummikub",
//                 minPlayers: 2
//             }
//         ]
//     },
//     {   
//         name: "Malini",
//         games: [
//             {
//                 title: "Anomia",
//                 minPlayers: 3
//             }
//         ]
//     },
//     {
//         name: "Hannah",
//         games: [
//             {
//                 title: "Exploding Kittens",
//                 minPlayers: 2
//             },
//             {
//                 title: "Code Names",
//                 minPlayers: 4
//             }
//         ]
//     },
//     {
//         name: "Xander",
//         games: [
//             {
//                 title: "Scattegories",
//                 minPlayers: 2
//             }
//         ]
//     }
// ];

const gameSeed = [
    {
        title: "Catch Phrase",
        owner: salem_id,
        minPlayers: 2
    },
    {
        title: "Imaginiff",
        owner: salem_id,
        minPlayers: 3
    },
    {
        title: "Rummikub",
        owner: salem_id,
        minPlayers: 2
    },
    {
        title: "Anomia",
        owner: malini_id,
        minPlayers: 3
    },
    {
        title: "Exploding Kittens",
        owner: hannah_id,
        minPlayers: 2
    },
    {
        title: "Code Names",
        owner: hannah_id,
        minPlayers: 4
    },
    {
        title: "Scattegories",
        owner: xander_id,
        minPlayers: 2
    }
];

const ownerSeed =[
    {
        _id: xander_id,
        name: "Xander",
        games: []
    },
    {
        _id: hannah_id,
        name: "Hannah",
        games: []
    },
    {
        _id: salem_id,
        name: "Salem",
        games: []
    },
    {
        _id: malini_id,
        name: "Malini",
        games: []
    }
];


db.Owner
    .remove({})
    .then(() => db.Owner.collection.insertMany(ownerSeed))
    .catch(err => {
        console.error(err);
    });

db.Game
    .remove({})
    .then(() => db.Game.collection.insertMany(gameSeed))
    .then(() => { 
        db.Owner.find({}).populate("games")
            console.log("games inserted");
    })
    .catch(err => {
        console.error(err);
    });

// Find owner and all their games
/*
db.Owner
    .findById("someid") // id of the owner
    .populate("games")
    .then((owner) => {
        console.log(owner.games) // the games
    })

    // Saving a game

// let id = req.body.ownerId
//let gameTitle = req.body.gametitle
let gameTitle = "hi"
let ownerid = new mongoose.SchemaType.ObjectId()
// Check if the game exists and also if it's owned by the owner
let gameToAdd = {
    title: "hi",
    minPlayers: 2
}
let createdGame;
db.Game
    .find({title: gameTitle})
    .then((game) => {
        console.log('inside then')
        console.log(game)
        if (!game.length) {
            // game doesn't exist, add it (there are no owners so add the owner)
            gameToAdd.owners = []
            gameToAdd.owners.push(Ownerid)
            return db.Game
                .create(gameToAdd)
                .then((createdGame) => {
                    // save reference to the owner (find the owner first)
                    return db.Owner.findById(ownerid)
                })
                .then((owner) => {
                    // assuming the owner doesn't have the game already (might want to check this)
                    owner.games.push(createdGame._id)
                    // save the owner
                    return owner.save()
                })
        } else {
            // means the game exists!
            gameToAdd.push(Ownerid)
        }

    })
    .then(() => {
        // respond to client
    })
    .catch((err) => console.log('there was an err'. err))
    */