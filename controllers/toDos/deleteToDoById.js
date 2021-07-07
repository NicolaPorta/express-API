const ToDo = require('../../DB/initializeDB');

async function deleteToDoById(req, res) {
    await ToDo.findOneAndDelete({_id: req.params.id})
    .then(todo => res.send({todo, response: `'${todo.text}' with id: ${todo._id} has been deleted`}));
};

module.exports = deleteToDoById;