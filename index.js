const express = require('express');
const cors = require('cors');
const ToDo = require('./testDB');
const app = express();
const port = 3001;
require('dotenv').config();
const Router = require('express').Router();

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
    dbCall();
    res.json(toDoList);
});
Router.post('/', async function(req, res){
    const text = req.body.toDo;
    await new ToDo({text}).save();

    dbCall();

    res.send({toDoList,response: `ToDo is added (id: ${toDoList[toDoList.length - 1].id})`});
});

Router.get('/:id', async function(req, res){
    const id = req.params.id;

    for (let toDo of toDoList) {
        if (toDo.id == id) {
            res.json(toDo);
            return;
        }
    }

    res.status(404).send({toDoList, response:`ToDo with id: ${id} not found`});
});
Router.put('/:id', async function(req, res){

    const id = req.params.id;
    const toDoEdited = {
        id,
        text: req.body.toDo
    };
    const toDo = await ToDo.findById({_id: id});
    toDo.text = toDoEdited.text;
    toDo.save();

    toDoList.forEach((toDo, i) => {
        if (toDo.id == id) {
            toDoList[i] = toDoEdited;
        }
    });

    res.send({toDoList, response:`ToDo with id: ${id} has been edited`});
});
Router.delete('/:id', async (req, res) => {

    const id = req.params.id;
    await ToDo.deleteOne({_id: id});
    
    toDoList = toDoList.filter(toDo => {
        return (id != toDo.id);
    });

    res.send({toDoList, response:`ToDo with id: ${id} has been deleted`});
});

app.use('/toDos', Router);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));