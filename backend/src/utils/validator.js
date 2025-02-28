// utils/validator.js

const { validationResult } = require('express-validator');

module.exports = {
    validate: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.error({ errors: errors.array() }, "Validation error", 422);
        }
        next();
    }
};
