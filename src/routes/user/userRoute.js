const routes = require('express').Router();

routes.get('/user', async(req, res)=>{
  const response = { data: {
    user: 'Paul'
  }}
  res.json(response);
});

module.exports = routes;