const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

let corsOptions = {
	origin : 'https://bookstore-frontend-beryl.vercel.app',
  };
//MIDDLEWARE
app.use(cors(corsOptions));
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('development'));
}

app.use(bodyParser.json());

// ROUTERS
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
