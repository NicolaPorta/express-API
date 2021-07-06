const ToDo = require("../../DB/testDB");

async function getToDoById(req, res) {
    const id = req.params.id;
    await ToDo.findOne({_id: id}).then(todo => res.json(todo));
};

module.exports = getToDoById;