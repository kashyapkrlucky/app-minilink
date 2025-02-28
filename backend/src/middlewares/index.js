const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
// const csurf = require('csurf');
const morgan = require('morgan');
const logger = require('../utils/logger');

// CSRF Protection
// const csrfProtection = csurf({ cookie: true });

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later',
});

module.exports = (app) => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(limiter);
    if (process.env.NODE_ENV !== 'test') {
        app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));
        app.use(morgan(':method :url [:status] :res[content-length] - :response-time ms'));
    }
    // Routes without CSRF protection
    // app.use('/public', '/');

    // Apply CSRF protection to all routes below
    // app.use(csrfProtection);

    // Pass CSRF token to views or frontend
    // app.use((req, res, next) => {
    //     res.cookie('XSRF-TOKEN', req.csrfToken());
    //     next();
    // });
    app.use(limiter);
}