const {ToDo} = require('../../DB');

async function deleteToDoById(req, res) {
    await ToDo.findOneAndDelete({_id: req.params.id})
    .then(todo => {
        if(todo.text) {
            res.send({todo, response: `'${todo.text}' with id: ${todo._id} has been deleted`});
        } else {
            res.send({todo, response: `This ToDo has been deleted`});
        }
        
    })
};

module.exports = deleteToDoById;