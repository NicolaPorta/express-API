const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();

const Router = require('./routes');
const Users = require('./routes/users');

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', Users);
app.use('/toDos', Router);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));