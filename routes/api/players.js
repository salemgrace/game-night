const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
    .get(gamesController.findGamesByPlayers);

module.exports = router;