const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcrypt');
const crypto = require('crypto');

const {
    onSuccess, onError, unauthorize, duplicate,
    onNotFound
} = require('../middlewares/responseMiddleware');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '23h',
    });
};

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select({ password: true });
        if (user && (await user.matchPassword(password))) {
            onSuccess(res, {
                id: user._id,
                token: generateToken(user._id),
            }, `Signin Successfull`);
        } else {
            unauthorize(res, '', 'Invalid email or password');
        }
    } catch (err) {
        onError(res, err, '');
    }
};

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const isExist = await User.findOne({ email });
        if (isExist) {
            duplicate(res, '', 'Email already exist');
        } else {
            const user = new User({
                firstName, lastName, email, password, fullName: `${firstName} ${lastName}`
            });
            const created = await user.save();
            const response = {
                id: created._id,
                token: generateToken(created._id)
            };
            onSuccess(res, response, `user added successfully`);
        }
    } catch (err) {
        onError(res, err, '');
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select({ password: false });
        if (user) {
            onSuccess(res, user, `record found`);
        } else {
            onSuccess(res, '', `record not found`);
        }
    } catch (err) {
        onError(res, err, '');
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const { firstName, lastName, avatar, phone } = req.body;
        const user = await User.findByIdAndUpdate(
            req.body.user,
            { firstName, lastName, avatar, phone },
            { new: true }
        );
        if (!user) {
            return onNotFound(res, '', `User not found`);
        }
        onSuccess(res, user._id, `user updated successfully`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return onNotFound(res, '', `User not found`);
        }
        onSuccess(res, '', `user deleted successfully`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

// Forgot password - Generate reset token and send email
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return onNotFound(res, '', `User not found`);
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        // Send email with reset link

        onSuccess(res, '', `Password reset email sent`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

// Reset password - Update password using reset token
exports.changePassword = async (req, res) => {

    const { id, currentPassword, newPassword } = req.body;


    try {

        const user = await User.findById(id).select({ _id: true, password: true });
        if (!user) {
            return onNotFound(res, '', `Invalid request`);
        }
        const verifyPassword = await bcryptjs.compareSync(currentPassword, user.password);
        if (verifyPassword) {
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(newPassword, salt)
            await user.save();
            onSuccess(res, '', `Password reset successful`);
        } else {
            onError(res, "", 'Invalid request');
        }



    } catch (error) {
        onError(res, error, error.message);
    }
};

// Search User 
exports.search = async (req, res) => {
    const { str } = req.params;
    try {
        const docs = await User.find({ fullName: new RegExp(str, 'i') }).select({ fullName: true, email: true, avatar: true });
        onSuccess(res, docs, 'users found');
    } catch (err) {
        onError(res, err, 'error in finding');
    }
}
