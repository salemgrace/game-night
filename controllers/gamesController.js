const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("in the findall");
        db.Game
            .find(req.query)
            .sort({ name: 1 })
            .then(dbGame => res.json(dbGame))
            .catch(err => res.status(400).json(err));
    }, 
    findById: function(req, res) {
        db.Game
          .findById(req.params.id)
          .then(dbGame => res.json(dbGame))
          .catch(err => res.status(422).json(err));
      }
};