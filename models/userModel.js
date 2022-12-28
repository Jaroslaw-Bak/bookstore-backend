const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Field email is required'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Provide a valid email'],
	},
	photo: {
		type: String,
	},
	password: {
		type: String,
		required: [true, 'Provide a password'],
		minlength: 8,
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, 'Please confirm your password'],
		validate: {
			// This only works on CREATE and SAVE !
			validator: function (el) {
				return el === this.password;
			},
		},
		message: 'Password are not the same',
	},
});

userSchema.pre('save', async function (next) {
	//Only run this function if password was actualy modified
	if (!this.isModified('password')) return next();

	this.password = await bcrypt.hash(this.password, 10);

	//Delete password confirm field
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
