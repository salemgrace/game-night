const mongoose = require("mongoose");
const db = require("../models");

var salem_id = mongoose.Types.ObjectId();
var malini_id = mongoose.Types.ObjectId();
var hannah_id = mongoose.Types.ObjectId();
var xander_id = mongoose.Types.ObjectId();

var game_one = mongoose.Types.ObjectId();
var game_two = mongoose.Types.ObjectId();
var game_three = mongoose.Types.ObjectId();
var game_four = mongoose.Types.ObjectId();
var game_five = mongoose.Types.ObjectId();
var game_six = mongoose.Types.ObjectId();
var game_seven = mongoose.Types.ObjectId();
var game_eight = mongoose.Types.ObjectId();
var game_nine = mongoose.Types.ObjectId();
var game_ten = mongoose.Types.ObjectId();
var game_eleven = mongoose.Types.ObjectId();
var game_twelve = mongoose.Types.ObjectId();
var game_thirteen = mongoose.Types.ObjectId();
var game_fourteen = mongoose.Types.ObjectId();

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
        _id: game_one,
        title: "Catch Phrase",
        owner: salem_id,
        minPlayers: 2
    },
    {
        _id: game_two,
        title: "Imaginiff",
        owner: salem_id,
        minPlayers: 3
    },
    {
        _id: game_three,
        title: "Rummikub",
        owner: salem_id,
        minPlayers: 2
    },
    {
        _id: game_four,
        title: "Anomia",
        owner: malini_id,
        minPlayers: 3
    },
    {
        _id: game_five,
        title: "Exploding Kittens",
        owner: hannah_id,
        minPlayers: 2
    },
    {
        _id: game_six,
        title: "Code Names",
        owner: hannah_id,
        minPlayers: 4
    },
    {
        _id: game_seven,
        title: "Scattegories",
        owner: xander_id,
        minPlayers: 2
    },
    {
        _id: game_eight,
        title: "Quick Wits",
        owner: malini_id,
        minPlayers: 3
    },
    {
        _id: game_nine,
        title: "5 Second Rule",
        owner: malini_id,
        minPlayers: 3
    },
    {
        _id: game_ten,
        title: "I should have known that!",
        owner: malini_id,
        minPlayers: 4
    },
    {
        _id: game_eleven,
        title: "What do you meme?",
        owner: malini_id,
        minPlayers: 4
    },
    {
        _id: game_twelve,
        title: "Would you Rather...",
        owner: salem_id,
        minPlayers: 3
    },
    {
        _id: game_thirteen,
        title: "Team Trivial Pursuit",
        owner: salem_id,
        minPlayers: 4
    },
    {
        _id: game_fourteen,
        title: "Pandemic",
        owner: salem_id,
        minPlayers: 4
    }
];

const ownerSeed =[
    {
        _id: xander_id,
        name: "Xander",
        games: [game_seven]
    },
    {
        _id: hannah_id,
        name: "Hannah",
        games: [game_five, game_six]
    },
    {
        _id: salem_id,
        name: "Salem",
        games: [game_one, game_two, game_three, game_twelve, game_thirteen, game_fourteen]
    },
    {
        _id: malini_id,
        name: "Malini",
        games: [game_four, game_eight, game_nine, game_ten, game_eleven]
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