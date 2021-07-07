const ToDo = require('../../DB/initializeDB');

async function addToDo(req, res) {
    await new ToDo({text: req.body.toDo}).save().then(todo => res.send({todo, response: `'${todo.text}' is added at id: ${todo._id}`}));
};

module.exports = addToDo;