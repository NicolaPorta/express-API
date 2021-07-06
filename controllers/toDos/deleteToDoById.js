const ToDo = require('../../DB/testDB');

async function deleteToDoById(req, res) {
    const id = req.params.id;
    await ToDo.deleteOne({_id: id})
    .then(({_id, text}) => res.send(`'${text}' with id: ${_id} has been deleted`));
};

module.exports = deleteToDoById;