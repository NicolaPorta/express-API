const ToDo = require('../../testDB.js');

async function editToDoById(req, res) {
    const id = req.params.id;
    const toDoEdited = {
        id,
        text: req.body.toDo
    };
    const toDo = await ToDo.findById({_id: id});
    toDo.text = toDoEdited.text;
    toDo.save();

    res.send({ response:`ToDo with id: ${id} has been edited`});
};

module.exports = editToDoById;