const { User } = require('../../DB');

async function addUser(req, res) {
    return new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        active: req.body.active,
        password: req.body.password
    }).save().then(user => res.send({user, response: `'${user.name} ${user.surname}' is added at id: ${user._id}`}));
};

module.exports = addUser;