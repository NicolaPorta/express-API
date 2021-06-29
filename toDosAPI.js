const express = require('express');

const cors = require('cors');

const app = express();
const port = 3001;

let toDoList = [
    {
        id: 1,
        toDo: "Fare la spesa"
    },
    {
        id: 2,
        toDo: "Dare da mangiare ai cani"
        
    },
    {
        id: 3,
        toDo: "Pulire la casa"
    },
    {
        id: 4,
        toDo: "Andare al mercato"
    },
    {
        id: 5,
        toDo: "Portare fuori i cani"
    },
];

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/toDos', (req, res) => {
    res.json(toDoList);
});

app.post('/toDos', (req, res) => {
    let toDo = req.body;
    console.log(toDoList[toDoList.length - 1]);
    const id = toDoList[toDoList.length - 1].id + 1;
    toDo = {
        id,
        ...toDo
    };
    toDoList.push(toDo);

    res.send({toDoList,response: `ToDo is added with id: ${toDo.id}`}); //restituire elemento aggiunto
});

app.get('/toDos/:id', (req, res) => {

    const id = req.params.id

    for (let toDo of toDoList) {
        if (toDo.id == id) {
            res.json(toDo);
            return;
        }
    }

    res.status(404).send({toDoList, response:`ToDo with id: ${id} not found`});
});

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

app.delete('/toDos/:id', (req, res) => {

    const id = req.params.id;

    toDoList = toDoList.filter(toDo => {
        return (id != toDo.id);
    });

    res.send({toDoList, response:`ToDo with id: ${id} has been deleted`});
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));