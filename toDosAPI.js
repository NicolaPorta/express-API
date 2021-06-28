const express = require('express');

const cors = require('cors');

const app = express();
const port = 3001;

let toDoList = [];

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/toDos', (req, res) => {
    const toDo = req.body;
    toDoList.push(toDo);

    res.send('ToDo is added to the database');
});

app.get('/toDos', (req, res) => {
    res.json(toDoList);
});

app.get('/toDos/:toDo', (req, res) => {

    const text = req.params.toDo.replace(/\s+/g, '-').toLowerCase();

    for (let toDo of toDoList) {
        let newToDo = toDo.toDo.replace(/\s+/g, '-').toLowerCase();
        if (newToDo === text) {
            res.json(toDo);
            return;
        }
    }

    res.status(404).send('ToDo not found');

});

app.put('/toDos/:toDo', (req, res) => {

    const text = req.params.toDo;
    const newToDo = req.body;

    toDoList.forEach(toDo=> {
        if (toDo.toDo === text) {
            toDo = newToDo;
        }
    });

    res.send('ToDo is edited');
});

app.delete('/toDos/:toDo', (req, res) => {

    const text = req.params.toDo;
    console.log(text);

    toDoList = toDoList.filter(toDo => {
        let newToDo = toDo.toDo.replace(/\s+/g, '-').toLowerCase();
        return (newToDo !== text);
    });

    res.send('ToDo is deleted');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));