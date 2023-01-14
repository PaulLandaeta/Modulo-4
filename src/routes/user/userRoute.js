const routes = require("express").Router();
const { userPost, usersGet, updateUser } = require("../../controller/user");
routes.get("/user", async (req, res) => {
  const userData = await usersGet();
  const response = {
    status: 'success',
    data: userData,
  };
  res.json(response);
});

routes.post("/user", async (req, res) => {
  const { body } = req;
  const responsePost = await userPost(body);
  console.log(body);
  const response = {
    status: 'success',
    data: responsePost,
  };
  res.json(response);
  
});

routes.put('/user/:userId', async (req, res) => {
    const responsePut = await updateUser(req);
    res.json(response.put)
})

module.exports = routes;
