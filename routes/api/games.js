const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
    .get(gamesController.findAllGames)

router.route("/:id")
    .get(gamesController.findGameById);

module.exports = router;