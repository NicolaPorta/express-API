const getUsersList = require('./getUsersList');
const addUser = require('./addUser');
const getUserById = require('./getUserById');
const editUserById = require('./editUserById');
const deleteUserById = require('./deleteUserById');
const requestLogin = require('./requestLogin');
const validateToken = require('./validateToken');

module.exports = {
    getUsersList,
    addUser,
    getUserById,
    editUserById,
    deleteUserById,
    requestLogin,
    validateToken
};