const errorHandler = (err, req, res) => {
    console.error(err.stack);
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        status: "error",
        message: message,
        data: null,
        error: {
            code: statusCode,
            details: err.details || null
        }
    });
};

const notFoundHandler = (req, res) => {
    res.status(404).json({ error: 'Not Found' });
};

module.exports = { errorHandler, notFoundHandler };
