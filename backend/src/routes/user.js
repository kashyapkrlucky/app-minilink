// src/routes/user.js
const express = require('express');
const { getUser, getUsers, createUser, signIn, updateUser, deleteUser, forgotPassword, resetPassword } = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signin', signIn);
router.post('/forgot-password', forgotPassword);

// Protected routes (require authentication)
router.use(authMiddleware.authenticate); // Middleware to verify JWT token
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/create', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/reset-password/:token', resetPassword);

module.exports = router;