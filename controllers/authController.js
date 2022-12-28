const User = require('./../models/userModel.js');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');

const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

exports.signup = async (req, res, next) => {
	try {
		const newUser = await User.create({
			email: req.body.email,
			password: req.body.password,
			passwordConfirm: req.body.passwordConfirm,
		});

		const token = signToken(newUser._id);

		res.status(201).json({
			status: 'success',
			token,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		// 1. Check if email and password exist
		if (!email || !password) {
			return next(new AppError('Pleasy provide email and password', 400));
		}
		// 2. Check if user exists && pasword is correct
		const user = await User.findOne({ email }).select('+password');

		if (!user || !(await user.correctPassword(password, user.password))) {
			return next(new AppError('Incorrect email or password', 401));
		}
		// 3. If everything is ok, send token to client

		const token = signToken(user._id);

		res.status(200).json({
			status: 'success',
			token,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};
