const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
    .get(gamesController.findAllGames)

router.route("/:id")
    .get(gamesController.findById);

module.exports = router;