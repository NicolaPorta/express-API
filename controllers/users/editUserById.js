const { User } = require('../../DB');

async function editUserById(req, res) {
    await User.findById({_id: req.params.id})
    .then(user => {
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.active = req.body.active;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save();
        try {
            return user;
        } catch(err) {
            res.send(err.message);
        }
    })
    .then(user => res.send({response: `'${user.name} ${user.surname}' with id: ${user._id} has been edited`,user}));
};

module.exports = editUserById;