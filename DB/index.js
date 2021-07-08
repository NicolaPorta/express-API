// Connect database
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected to: " + url);
});

const User = require('./users');
const ToDo = require('./toDos');

module.exports = {
  ToDo,
  User
};