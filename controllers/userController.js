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

exports.deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		const user = await User.findOneAndDelete({ _id: id });
		res.status(200).json({
			status: 'success',
			user,
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};
