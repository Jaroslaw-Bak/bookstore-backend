const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
	'<PASSWORD>',
	process.env.DATABASE_PASSWORD
);

async function dbConnect() {
	await mongoose.set('strictQuery', true).connect(DB);
	console.log('db connection successful');
}

dbConnect().catch((err) => console.log(err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, '127.0.0.1', () => {
	console.log('Server listening on port ', PORT);
});
