const mongoose = require('mongoose');

var Task = mongoose.model('Task', {
    name : { type :  String },
    status : { type : String },
    date : { type : String } 
});

module.exports = {
    Task 
};