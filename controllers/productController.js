const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json({
			status: 'success',
			message: 'get products',
			data: {
				products,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};











exports.createProduct = async (req, res) => {
	try {
		const newProduct = await Product.create(req.body);
		res.status(201).json({
			status: 'success',
			message: 'create product',
			data: {
				newProduct,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.getProduct = async (req, res) => {
	const id = req.params.id;
	const product = await Product.findOne({ _id: id });
	res.status(200).json({
		status: 'success',
		message: 'get product id:  ' + id,
		data: {
			product,
		},
	});
};

exports.updateProduct = (req, res) => {
	res.json({
		status: 'success',
		message: 'update 1 product',
	});
};
exports.deleteProduct = (req, res) => {
	res.json({
		status: 'success',
		message: 'delete 1 product',
	});
};
