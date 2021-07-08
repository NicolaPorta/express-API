const {ToDo} = require("../../DB");

async function getToDoList(res) {
    await ToDo.find()
    .then(toDoList => res.json(toDoList));
};

module.exports = getToDoList;