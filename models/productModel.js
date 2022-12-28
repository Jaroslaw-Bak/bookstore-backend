const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'title is required'],
	},
	author: {
		type: String,
		required: [true, 'author is required'],
	},
	price: {
		type: String,
		required: [true, 'price is required'],
	},
	category: {
		type: String,
		required: [true, 'category is required'],
	},
	description: {
		type: String,
		required: [true, 'description is required'],
	},
	image: {
		type: String,
		default:
			'https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png',
	},
	newest: {
		type: Boolean,
		default: false,
	},
	bestseller: {
		type: Boolean,
		default: false,
	},
	recomended: {
		type: Boolean,
		default: false,
	},
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
