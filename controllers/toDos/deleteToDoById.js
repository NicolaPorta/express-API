const ToDo = require('../../testDB');

async function deleteToDoById(res, list) {
    const id = req.params.id;
    await ToDo.deleteOne({_id: id});
    
    list = list.filter(toDo => {
        return (id != toDo.id);
    });

    res.send({list, response:`ToDo with id: ${id} has been deleted`});
};

module.exports = deleteToDoById;