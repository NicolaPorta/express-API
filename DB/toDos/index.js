const mongoose = require('mongoose');
// Create a schema for Todos
const toDoSchema = new mongoose.Schema({
    text: String
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
