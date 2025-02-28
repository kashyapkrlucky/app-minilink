// src/routes/user.js
const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();
const { authenticate, authenticateUser } = require('../middlewares/authentication');

router.post('/sign-in', controller.signIn);
router.post('/create', controller.createUser);
router.post('/forgot-password', controller.forgotPassword);

router.get('/profile/:id', authenticate, controller.getUser);
router.put('/update', authenticateUser, controller.updateUser);
router.delete('/delete/:id', authenticateUser, controller.deleteUser);
router.post('/change-password', authenticateUser, controller.changePassword);
router.get('/search/:str', authenticate, controller.search);

module.exports = router;