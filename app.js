const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

//MIDDLEWARE
app.use(cors());

// ROUTERS
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
