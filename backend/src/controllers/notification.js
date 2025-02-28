// controllers/notificationController.js
const Notification = require('../models/Notification');
const { onSuccess, onError } = require('../middlewares/responseMiddleware');
const { getIo } = require('../../socket')
// Create a notification
exports.createNotification = async (user, content) => {
    const notification = new Notification({
        user, content
    });
    const io = await getIo();
    await notification.save();
    io.emit('notification', { user, content });
};

// Get notifications for a user
exports.getNotifications = async (req, res) => {
    try {
        const items = await Notification.find({ user: req.params.user }).sort({ createdAt: -1 });
        onSuccess(res, items, 'Like updated');
    } catch (err) {
        onError(res, err, 'Error in toggling like');
    }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) {
            return res.status(404).json({ msg: 'Notification not found' });
        }

        notification.read = true;
        await notification.save();

        res.json(notification);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
