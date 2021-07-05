const express = require('express');
const cors = require('cors');
const ToDo = require('./testDB');
const app = express();
const port = 3001;
require('dotenv').config();
const Router = require('express').Router();
const toDos = require('./controllers');

// Default List
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


app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

Router.use(function(req, res, next){
    next();
});

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

app.use('/toDos', Router);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));