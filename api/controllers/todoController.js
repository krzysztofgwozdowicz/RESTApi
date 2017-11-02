'use strict';

// import mongoose package
var mongoose = require('mongoose'),
  // Here we specify which model we want to use (it's also name of collection in db (lowerCased))
  // name of model is usually described in ./api/models folder
  Task = mongoose.model('Task');

// Here we define list_all_tasks method, and export it
exports.list_all_tasks = function(req, res) {
  // here we find all tasks that are corresponding to specified model  
  Task.find({}, function(err, task) {
    if (err)
      // if error occurs, send it
      res.send(err);
    // if there is no error, send found tasks in form of json
    res.json(task);
  });
};



// this exported method creates new task in our db
exports.create_a_task = function(req, res) {
  // Here we define new task using Task object and body part of request as parameter 
  var new_task = new Task(req.body);
  // here we use moongoose library's method, save to create new task
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//Here we create method which finds task with specified Id
exports.read_a_task = function(req, res) {
  // again we use libvrary's internal method, findById, and pass request parameter to it  
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// another method, this one finds task by id and updates it's body with passed one
exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


// This one deletes task with id passed as message parameter
exports.delete_a_task = function(req, res) {
  Task.remove({ _id: req.params.taskId }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });


};





