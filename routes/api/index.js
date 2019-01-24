const router = require("express").Router();
const gameRoutes = require("./games");
const ownerRoutes = require("./owners");
const playerRoutes = require("./players");

router.use("/games", gameRoutes);

router.use("/owners", ownerRoutes);

router.use("/players", playerRoutes);

module.exports = router;