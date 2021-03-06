const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
    .get(gamesController.findAllGames)
    .post(gamesController.createGame);

router.route("/:id")
    .get(gamesController.findGameById);

module.exports = router;