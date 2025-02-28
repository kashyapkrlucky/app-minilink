const express = require('express');
const userRoutes = require('./user');
const projectRoutes = require('./project');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/project', projectRoutes);

module.exports = router;
