const {ToDo} = require("../../DB");

async function getToDoList(res) {
    return ToDo.find()
    .then(toDoList => res.json(toDoList));
};

module.exports = getToDoList;