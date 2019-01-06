const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Game
            .find(req.query)
            .then(dbGame => res.json(dbGame))
            .catch(err => res.status(400).json(err));
    }
};