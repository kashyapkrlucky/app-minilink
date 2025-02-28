const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

const metricsEndpoint = (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
};

module.exports = metricsEndpoint;
