const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

let corsOptions = {
	origin : '*',
	'Access-Control-Allow-Origin': '*'
  };
//MIDDLEWARE
app.use(cors(corsOptions));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('development'));
}

app.use(bodyParser.json());

// ROUTERS
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
