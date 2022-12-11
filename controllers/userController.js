exports.getAllUsers = (req, res) => {
	res.json({
		status: 'success',
		message: 'get users',
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
