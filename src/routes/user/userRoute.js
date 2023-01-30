const routes = require("express").Router();
const {
  userPost,
  usersGet,
  updateUser,
  deleteUser,
  getUser,
} = require("../../controller/user");
const { protect } = require("./../../controller/auth");

routes.get("/users", [protect], async (req, res) => {
  const userData = await usersGet();
  const response = {
    status: "success",
    data: userData,
  };
  res.json(response);
});

routes.post("/users", [protect], async (req, res) => {
  const { body } = req;
  const responsePost = await userPost(body);
  console.log(body);
  const response = {
    status: "success",
    data: responsePost,
  };
  res.json(response);
});

routes.get("/users/:id", async (req, res) => {
  const responseUser = await getUser(req);
  res.json(responseUser);
});

routes.put("/users/:id", async (req, res) => {
  const responsePut = await updateUser(req);
  res.json(responsePut);
});

routes.delete("/users/:id", async (req, res) => {
  const responseDelete = await deleteUser(req);
  res.json(responseDelete);
});

module.exports = routes;
