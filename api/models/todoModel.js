'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// here we describe json Schema for our mongo files
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

// here we export mongoose model , whioch will be named 'Task'
// it will be most likely used by /api/controllers/CONTROLLER 
// also it willo be a name of our Collection in MongoDB
module.exports = mongoose.model('Task', TaskSchema);