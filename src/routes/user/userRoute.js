const routes = require("express").Router();
const { userPost, usersGet, updateUser, deleteUser, getUser  } = require("../../controller/user");

routes.get("/user", async (req, res) => {
  const userData = await usersGet();
  const response = {
    status: "success",
    data: userData,
  };
  res.json(response);
});

routes.post("/user", async (req, res) => {
  const { body } = req;
  const responsePost = await userPost(body);
  console.log(body);
  const response = {
    status: "success",
    data: responsePost,
  };
  res.json(response);
});

routes.get("/user/:id", async (req, res) => {
  const responseUser = await getUser(req);
  res.json(responseUser);
});

routes.put("/user/:id", async (req, res) => {
  const responsePut = await updateUser(req);
  res.json(responsePut);
});

routes.delete("/user/:id", async (req, res) => {
  const responseDelete = await deleteUser(req);
  res.json(responseDelete);
});

module.exports = routes;
