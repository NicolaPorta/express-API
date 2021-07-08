const {ToDo} = require("../../DB");

async function getToDoById(req, res) {
    await ToDo.findOne({_id: req.params.id}).then(todo => res.json(todo));
};

module.exports = getToDoById;