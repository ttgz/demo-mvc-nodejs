 const express = require('express');
 const route = express.Router();

 const homeController = require('../controllers/HomeController');

 //định tuyến đường, chỉ định controller và action
 route.get('/',homeController.index);
 route.get('/detail/:slug',homeController.detail);
 route.post('/',homeController.store);
 module.exports = route;