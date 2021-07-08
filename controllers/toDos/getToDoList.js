const ToDo = require("../../DB/initializeDB");

async function getToDoList(res) {
    await ToDo.find()
    .then(toDoList => res.json(toDoList));
};

module.exports = getToDoList;