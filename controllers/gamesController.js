const db = require("../models");

module.exports = {
    findAllGames: function(req, res) {
        console.log("in the findall games");
        db.Game
            .find(req.query)
            .populate("owner")
            .sort({ title: 1 })
            .then(dbGame => res.json(dbGame))
            .catch(err => res.status(400).json(err));
    },
    findAllOwners: function(req, res) {
        console.log("in the findall owners");
        db.Owner
            .find(req.query)
            .populate("games")
            .sort({ name: 1 })
            .then(dbOwner => {
                res.json(dbOwner);
                console.log("in findall owners" + dbOwner);
            })
            .catch(err => res.status(400).json(err));
    },
    findGameById: function(req, res) {
        db.Game
            .findById(req.params.id)
            .populate("owner")
            .then(dbGame => res.json(dbGame))
            .catch(err => res.status(422).json(err));
      },
    findOwnerById: function(req, res) {
        console.log("in the individual owner")
        db.Owner
          .findById(req.params.id)
          .populate("games")
          .then(dbOwner => res.json(dbOwner))
          .catch(err => res.status(422).json(err));
    }
    // populateGames: function(req, res) {
    //     db.Owner
    //     .find({}).populate("games")
    //     .then(function(dbOwner) {
    //         console.log(dbOwner)
    //     })
    //     console.log(data + " after owners inserted");
    // }
};