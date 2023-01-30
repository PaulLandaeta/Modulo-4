const express = require("express");
const shoppingCartRouter = express.Router();
const {
  getAllShoppingCarts,
  addShoppingCart,
  payShoppingCart,
} = require("./../../controller/shoppingCart");
const { protect } = require("./../../controller/auth");

shoppingCartRouter
  .route("/product")
  .all(protect)
  .get(getAllShoppingCarts)
  .post(addShoppingCart);

shoppingCartRouter.route("/pay/:id").all(protect).post(payShoppingCart);

module.exports = shoppingCartRouter;
