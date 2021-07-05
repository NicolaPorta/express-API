const toDos = require('./toDos');
const ToDo = require('../testDB');
let toDoList = [];
const dbCall = async () => {
    await ToDo.find(function(err, res) {
        res.map((toDo, i) => {
            const newToDo = {
                id: toDo._id,
                text: toDo.text
            };
            toDoList[i] = newToDo;
        });
    });
}
dbCall();
module.exports = {
    toDos,
    toDoList,
    dbCall
};