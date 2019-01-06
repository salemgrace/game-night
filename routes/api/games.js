const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
    .get(gamesController.findAll);

module.exports = router;