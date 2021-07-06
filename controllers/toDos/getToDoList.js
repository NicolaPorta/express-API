const ToDo = require("../../DB/testDB");

async function getToDoList(res) {
    await ToDo.find()
    .then(toDoList => {
        const result = toDoList.map(({_id, text}) => ({
            id: _id,
            text
         }));
        res.json(result);
    });
};

module.exports = getToDoList;