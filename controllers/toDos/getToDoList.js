const ToDo = require("../../testDB");

async function getToDoList(res) {
    const toDoList = await ToDo.find();
    let list = [];
    toDoList.map((todo, i) => {
        list[i] = {
            id: todo._id,
            text: todo.text
        }
    });
    res.json(list)
};

module.exports = getToDoList;