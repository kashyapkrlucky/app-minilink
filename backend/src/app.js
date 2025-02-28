const express = require('express');
const routes = require('./routes');
const connectDB = require('./config/db');
const { errorHandler, notFoundHandler } = require('./middlewares/errorHandler');

const app = express();

// Database connection
if (process.env.NODE_ENV !== 'test') {
    connectDB();
}

// Middleware
require('./middlewares')(app);

// Routes
app.use('/api', routes);

const swaggerSetup = require('./config/swagger');
swaggerSetup(app);

const metricsEndpoint = require('./middlewares/metrics');
app.get('/metrics', metricsEndpoint);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
