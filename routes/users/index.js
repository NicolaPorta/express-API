const Router = require('express').Router();
const getUsersList = require('./getUsersList');
const addUser = require('./addUser');
const deleteUserById = require('./deleteUserById');
const getUserById = require('./getUserById');
const editUserById = require('./editUserById');
const requestLogin = require('./requestLogin');
const validateToken = require('./validateToken');

Router.get('/', getUsersList);
Router.post('/', addUser);
Router.get('/:id', getUserById);
Router.put('/:id', editUserById);
Router.delete('/:id', deleteUserById);
Router.post('/login', requestLogin);
Router.get('/login/validation', validateToken);

module.exports = Router;