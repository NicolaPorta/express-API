const ToDo = require('../../testDB');

async function deleteToDoById(req, res) {
    const id = req.params.id;
    await ToDo.deleteOne({_id: id});

    res.send({response:`ToDo with id: ${id} has been deleted`});
};

module.exports = deleteToDoById;