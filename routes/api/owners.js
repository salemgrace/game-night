const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
    .get(gamesController.findAllOwners)

router.route("/:id")
    .get(gamesController.findOwnerById);

module.exports = router;