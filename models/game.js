const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    _id: Schema.Types.ObjectId,
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: "Owner" 
    },
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    minPlayers: { 
        type: Number 
    }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;