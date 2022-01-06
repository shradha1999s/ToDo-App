const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //used to allow requests from any port number or domain

const { mongooose } = require('./db.js');
var taskController = require('./controllers/taskController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors( {origin : 'http://localhost:4200'} ));

app.listen(3000, () => console.log('Server started at port number : 3000'));

app.use('/tasks', taskController);