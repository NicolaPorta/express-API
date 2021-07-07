const Router = require('express').Router();
const getToDoList = require('./getToDoList');
const addToDo = require('./addToDo.js');
const getToDoById = require('./getToDoById');
const editToDoById = require('./editToDoById');
const deleteToDoById = require('./deleteToDoById');

// Todos Routes
Router.get('/', getToDoList);
Router.post('/', addToDo);
Router.get('/:id', getToDoById);
Router.put('/:id', editToDoById);
Router.delete('/:id', deleteToDoById);

module.exports = Router;