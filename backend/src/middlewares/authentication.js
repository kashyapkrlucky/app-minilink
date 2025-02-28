const jwt = require('jsonwebtoken');
const { unauthorize } = require('./responseMiddleware');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        unauthorize(res, err, 'Authorization denied. Invalid token.')
    }
};

exports.authenticateUserID = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    const userId = req.params.id || req.body.id;
    if (!token) {
        return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.id === userId) {
            req.user = decoded;
            next();
        } else {
            unauthorize(res, '', 'Authorization denied. Invalid token.')
        }
    } catch (err) {
        unauthorize(res, err, 'Authorization denied. Invalid token.')
    }
};

exports.authenticateUser = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    const userId = req.params.user || req.body.user;
    if (!token) {
        return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.id === userId) {
            req.user = decoded;
            next();
        } else {
            unauthorize(res, '', 'Authorization denied. Invalid token.')
        }
    } catch (err) {
        unauthorize(res, err, 'Authorization denied. Invalid token.')
    }
};
