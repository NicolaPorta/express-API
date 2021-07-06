const ToDo = require('../../DB/testDB');

async function editToDoById(req, res) {
    const id = req.params.id;
    
    const toDo = await ToDo.findById({_id: id});
    toDo.text = req.body.toDo;
    toDo.save()
    .then(({_id, text}) => res.send(`'${text}' with id: ${_id} has been edited`));

};

module.exports = editToDoById;