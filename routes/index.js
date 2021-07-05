const Router = require('express').Router();
const toDoRoute = require('./toDos')

Router.use(function(req,res,next){
    next()
}, toDoRoute);

module.exports = Router;