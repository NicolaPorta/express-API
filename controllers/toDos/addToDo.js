const ToDo = require('../../DB/testDB');

async function addToDo(req, res) {

    const text = req.body.toDo;
    await new ToDo({text}).save().then(({_id, text})=> res.send({response: `'${text}' is added at id: ${_id}`}));

    // res.send({response: `ToDo is added`});
};

module.exports = addToDo;