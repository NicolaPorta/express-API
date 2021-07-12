const { User } = require("../../DB");

async function getUsersList(res) {
    return User.find()
    .then(users => res.json(users));
};

module.exports = getUsersList;