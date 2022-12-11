const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	title: String,
	author: String,
	description: String,
	image: String,
	newest: Boolean,
	bestseller: Boolean,
	recomended: Boolean,
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
