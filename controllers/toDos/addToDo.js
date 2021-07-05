const ToDo = require('../../testDB');
async function addToDo(req, res) {
    const text = req.body.toDo;
    await new ToDo({text}).save();

    res.send({response: `ToDo is added`});
};

module.exports = addToDo;