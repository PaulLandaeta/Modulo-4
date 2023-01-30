const routes = require("express").Router();
const { login, signup } = require("./../../controller/Auth");

routes.post("/login", login);

routes.post("/signup", signup);
module.exports = routes;
