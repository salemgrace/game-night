const router = require("express").Router();
const gameRoutes = require("./games");
const ownerRoutes = require("./owners");

router.use("/games", gameRoutes);

router.use("/owners", ownerRoutes);

module.exports = router;