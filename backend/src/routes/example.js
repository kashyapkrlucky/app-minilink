// routes/exampleRoutes.js

const express = require('express');
const { check } = require('express-validator');
const validator = require('../utils/validator');

const router = express.Router();

router.get(
    '/',
    [check('param').isString().optional()],
    validator.validate,
    (req, res) => {
        const exampleData = { id: 1, name: 'Example' };
        res.success(exampleData, "Example data fetched successfully");
    }
);

module.exports = router;
