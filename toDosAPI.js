const express = require('express');
const cors = require('cors');
const ToDo = require('./testDB');
const app = express();
const port = 3001;

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

// Show complete ToDo list
app.get('/toDos', async function(req, res) {
    await dbCall();
    res.json(toDoList);
});

// Add ToDo
app.post('/toDos', async (req, res) => {
    const text = req.body.toDo;
    new ToDo({text}).save();
    await dbCall();
    res.send({toDoList,response: `ToDo is added (id: ${toDoList[toDoList.length - 1].id})`});
});

// Show single ToDo for id
app.get('/toDos/:id', (req, res) => {

    const id = req.params.id
    console.log(id);

    for (let toDo of toDoList) {
        if (toDo.id == id) {
            res.json(toDo);
            return;
        }
    }

    res.status(404).send({toDoList, response:`ToDo with id: ${id} not found`});
});

// Edit single ToDo
app.put('/toDos/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const toDoEdited = {
        id,
        toDo: req.body.toDo
    }

    toDoList.forEach((toDo, i) => {
        if (toDo.id == id) {
            toDoList[i] = toDoEdited;
        }
    });

    res.send({toDoList, response:`ToDo with id: ${id} has been edited`});
});

// delete single ToDo
app.delete('/toDos/:id', async (req, res) => {

    const id = req.params.id;
    await ToDo.deleteOne({_id: id});
    
    toDoList = toDoList.filter(toDo => {
        return (id != toDo.id);
    });

    res.send({toDoList, response:`ToDo with id: ${id} has been deleted`});
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));