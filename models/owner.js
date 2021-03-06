var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ownerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true
    },
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: "Game"
        }
    ]
});

var Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;