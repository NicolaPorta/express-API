const { User } = require("../../DB");

async function getUserById(req, res) {
    return User.findOne({_id: req.params.id}).then(user => res.json(user));
};

module.exports = getUserById;