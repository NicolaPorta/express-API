const { User } = require('../../DB');
const hashPassword = require('../../utils/hashingPasswords');

async function addUser(req, res) {
    const password = await hashPassword(req.body.password);
    return new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        active: req.body.active,
        password: password
    }).save().then(user => res.send({user, response: `'${user.name} ${user.surname}' is added at id: ${user._id}`}));
};

module.exports = addUser;