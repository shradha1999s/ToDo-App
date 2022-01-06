const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Task } = require('../models/task');

// Get all tasks
router.get('/', (req, res) => {
    Task.find((error, docs) => {
        if(error){
            console.log("Error in retrieving tasks : "+ JSON.stringify(error, undefined, 2));
        }
        else{
            res.send(docs);
        }
    })
});



// Get task by ID
router.get('/:id', (req, res) => {
    //Validating ID
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with give id : ${req.params.id} `);
    }
    Task.findById(req.params.id, (error, doc) => {
        if(error){
            console.log(`Error in retriving task with id : ${req.params.id}` );
            console.log("Error : "+ JSON.stringify(error, undefined, 2));
        }
        else{
            res.send(doc);
        }
    });
});


// Post task 
router.post('/', (req, res) => {
    var new_task = new Task({
        name : req.body.name,
        status : req.body.status,
        date : req.body.date
    });
    new_task.save( (error, doc) =>{
        if(error){
            console.log("Error while posting task : " +JSON.stringify(error, undefined, 2));
        }
        else{
            res.send(doc);
        }
    } );
});

//Update task
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with give id : ${req.params.id} `);
    }
    var new_task = {
        name : req.body.name,
        status : req.body.status,
        date : req.body.date
    };
    Task.findByIdAndUpdate(req.params.id, { $set: new_task }, { new: true }, (error, doc) => {
        if(error){
            console.log("Error while updating task : " +JSON.stringify(error, undefined, 2));
        }
        else{
            res.send(doc);
        }
    });
});

//Delete Task
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with give id : ${req.params.id} `);
    }
    Task.findByIdAndRemove(req.params.id, (error, doc) => {
        if(error){
            console.log("Error while Deleting task : " +JSON.stringify(error, undefined, 2));
        }
        else{
            res.send(doc);
        }
    });
});


module.exports = router;
