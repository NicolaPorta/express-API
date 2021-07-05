const ToDo = require('../../testDB.js');
async function addToDo(res, method, list) {
    const text = req.body.toDo;
    await new ToDo({text}).save();

    method();

    res.send({list,response: `ToDo is added (id: ${list[list.length - 1].id})`});
};

module.exports = addToDo;