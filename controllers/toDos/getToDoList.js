const ToDo = require("../../DB/testDB");

async function getToDoList(res) {
    const toDoList = await ToDo.find();
    const result = toDoList.map(({_id, text}) => ({
      id: _id,
      text
    }));
    res.json(result);
};

module.exports = getToDoList;