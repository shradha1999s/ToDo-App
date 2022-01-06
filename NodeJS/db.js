const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ToDoDatabase', (error, db) => {
    if(error){
        console.log("Error in DB connection : " + JSON.stringify(error, undefined, 2));
    }
    else{
        console.log("MongoDB Connection Successfull !!");
    }
});

module.exports = mongoose;
