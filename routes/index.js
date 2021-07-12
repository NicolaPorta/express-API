const Router = require('express').Router();
const toDoRoute = require('./toDos')
const userRoute = require('./users');

Router.use(toDoRoute);
Router.use(userRoute);

module.exports = Router;