const routes = require('express').Router();
const user = require('./user/userRoute');
const auth = require('./auth/authRoute');
const product = require('./product/productRouter');
const shoppingCartRouter = require('./cart/shoppingCartRouter');

routes.use('/v1', user);
routes.use('/v1/auth', auth);
routes.use('/v1/products', product)
routes.use("/v1/cart/", shoppingCartRouter);

module.exports = routes;
