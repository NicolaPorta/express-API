const toDos = require('../../controllers');
const Router = require('express').Router();

// Todos Routes
Router.get('/', function(req, res){
    toDos.getToDoList(res);
});

Router.post('/', async function(req, res){
    toDos.addToDo(req, res);
});

Router.get('/:id', async function(req, res){
    toDos.getToDoById(req, res);
});

Router.put('/:id', async function(req, res){
    toDos.editToDoById(req, res)
});

Router.delete('/:id', async (req, res) => {
    toDos.deleteToDoById(req, res);
});

module.exports = Router;