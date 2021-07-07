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

toDoSchema.static('findSetId', async function(){
  let list = await this.find().lean();
  const element = list.map(({_id, __v, ...rest}) => ({
    id: _id,
    ...rest,
    v: __v
  }));
  
  return element;
});

toDoSchema.static('findSetOneId', async function(id){
  let element = await this.findOne({_id: id}).lean();
  element = {
    id: element._id,
    ...element
  }
  delete element._id;
  element.v = element.__v;
  delete element.__v;
  return element;
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;