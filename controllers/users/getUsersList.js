const { User } = require("../../DB");

async function getUsersList(res) {
    await User.find()
    .then(users => res.json(users));
};

module.exports = getUsersList;