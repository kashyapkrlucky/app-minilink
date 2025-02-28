const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const {
    onSuccess, onError, unauthorize, duplicate,
    onNotFound
} = require('../middlewares/responseMiddleware');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '23h',
    });
};

exports.getUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const users = await User.find()
            .select({ name: true, email: true })
            .skip((page - 1) * limit)
            .limit(limit);
        if (users.length > 0) {
            onSuccess(res, users, `${users.length} records found`);
        } else {
            onSuccess(res, users, `Users not found`);
        }
    } catch (error) {
        onError(res, error, error.message);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select({ name: true, email: true });
        if (user) {
            onSuccess(res, user, `record found`);
        } else {
            onSuccess(res, '', `record not found`);
        }
    } catch (err) {
        onError(res, err, '');
    }
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
        const { email } = req.body;
        const isExist = await User.findOne({ email });
        if (isExist) {
            duplicate(res, '', 'Email already exist');
        } else {
            const user = new User(req.body);
            user
                .save()
                .then(doc => {
                    const response = {
                        id: doc._id,
                        token: generateToken(doc._id)
                    };
                    onSuccess(res, response, `user added successfully`);
                });
        }
    } catch (err) {
        onError(res, err, '');
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const { username, email, role } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { username, email, role },
            { new: true }
        );
        if (!user) {
            return onNotFound(res, '', `User not found`);
        }
        onSuccess(res, user, `user updated successfully`);
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
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_email_password',
            },
        });

        const mailOptions = {
            from: 'your_email@gmail.com',
            to: user.email,
            subject: 'Password Reset Request',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
                + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
                + `http://${req.headers.host}/reset-password/${resetToken}\n\n`
                + `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        onSuccess(res, '', `Password reset email sent`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

// Reset password - Update password using reset token
exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        // Find user by reset token and check expiration
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return onNotFound(res, '', `Invalid or expired token`);
        }

        // Hash new password
        const hashedPassword = await bcryptjs.hash(newPassword, 10);

        // Update user's password and reset token fields
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
        onSuccess(res, '', `Password reset successful`);
    } catch (error) {
        onError(res, error, error.message);
    }
};

