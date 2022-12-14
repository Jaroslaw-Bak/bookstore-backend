const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
	const users = await User.find();

	res.json({
		status: 'success',
		message: 'get users',
		data: {
			users,
		},
	});
};
exports.createUser = (req, res) => {
	res.json({
		status: 'success',
		message: 'create user',
	});
};

exports.getUser = (req, res) => {
	const id = req.params.id;
	res.json({
		status: 'success',
		message: 'get user route id: ' + id,
	});
};
