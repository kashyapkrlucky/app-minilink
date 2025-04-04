// responseMiddleware.js
// Exports Success Response
const onSuccess = (res, data, message) => res.status(200).json({ data, status: true, message });

// Exports Error Response
const onClientError = (res, data, message) => res.status(400).json({ data, status: false, message });

// Exports Error Response
const onNotFound = (res, data, message) => res.status(404).json({ data, status: false, message });

// Exports Error Response
const onError = (res, data, message) => res.status(500).json({ data, status: false, message });

// Exports Unauthorized Response
const unauthorize = (res, data, message) => res.status(401).json({ data, status: false, message });

// Exports Response nothing changed
const nothingChanged = (res, data, message) => res.status(201).json({ data, status: false, message });

// Exports Response nothing changed
const duplicate = (res, data, message) => res.status(409).json({ data, status: false, message });

module.exports = {
    onSuccess,
    onClientError,
    onNotFound,
    onError,
    unauthorize,
    nothingChanged,
    duplicate
}