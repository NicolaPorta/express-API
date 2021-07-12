const { User } = require('../../DB');

async function deleteUserById(req, res) {
    return User.findOneAndDelete({_id: req.params.id})
    .then(user => {
        try {
            res.send({user, response: `'${user.name} ${user.surname}' with id: ${user._id} has been deleted`});
        } catch(err) {
            res.send(err.message)
        }
    })
};

module.exports = deleteUserById;