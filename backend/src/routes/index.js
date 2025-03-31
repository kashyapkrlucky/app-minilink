const express = require("express");
const userRoutes = require("./user");
const shortLinkRoutes = require("./shortLink");
const router = express.Router();

router.use("/", shortLinkRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
