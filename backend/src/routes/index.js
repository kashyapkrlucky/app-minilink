const express = require("express");
const userRoutes = require("./user");
const projectRoutes = require("./project");
const shortLinkRoutes = require("./shortLink");
const router = express.Router();

router.use("/", shortLinkRoutes);
router.use("/api/users", userRoutes);
router.use("/api/project", projectRoutes);

module.exports = router;
