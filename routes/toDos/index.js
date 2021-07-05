const {
    toDos,
    toDoList,
    dbCall
} = require('../../controllers');
const Router = require('express').Router();

Router.get('/', function(req, res){
    toDos.getToDoList(res, dbCall, toDoList);
});
Router.post('/', async function(req, res){
    toDos.addToDo(req, res, dbCall, toDoList);
});

Router.get('/:id', async function(req, res){
    toDos.getToDoById(req, res, toDoList);
});
Router.put('/:id', async function(req, res){
    toDos.editToDoById(req, res, toDoList)
});
Router.delete('/:id', async (req, res) => {
    toDos.deleteToDoById(req, res, toDoList);
});

module.exports = Router;