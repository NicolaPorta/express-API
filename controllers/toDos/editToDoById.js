const { ToDo } = require('../../DB');

async function editToDoById(req, res) {
    await ToDo.findById({_id: req.params.id})
    .then(toDo => {
        toDo.text = req.body.toDo;
        toDo.save();
        return toDo;
    })
    .then(todo => res.send({response: `'${todo.text}' with id: ${todo._id} has been edited`,todo}));
};

module.exports = editToDoById;