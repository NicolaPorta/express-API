async function getToDoById(req, res, list) {
    const id = req.params.id;

    for (let toDo of list) {
        if (toDo.id == id) {
            res.json(toDo);
            return;
        }
    }

    res.status(404).send({list, response:`ToDo with id: ${id} not found`});
};

module.exports = getToDoById;