const ToDo = require("../../testDB");

async function getToDoById(req, res) {
    const id = req.params.id;
    const toDoById = await ToDo.findOne({_id: id});
    res.json(toDoById);
};

module.exports = getToDoById;