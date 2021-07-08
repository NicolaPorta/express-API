// Connect database
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected to: " + url);
});

// Create a schema for Todos
const toDoSchema = new mongoose.Schema({
    text: String
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;