const Router = require('express').Router();
const toDoRoute = require('./toDos')
const userRoute = require('./users');

Router.use(function(req,res,next){
    next()
}, toDoRoute);

Router.use((req,res,next) => {
    next()
}, userRoute);

module.exports = Router;