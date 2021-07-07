const ToDo = require("../../DB/testDB");

async function getToDoList(res) {
    await ToDo.findSetId()
    .then(toDoList => res.json(toDoList));
};

module.exports = getToDoList;