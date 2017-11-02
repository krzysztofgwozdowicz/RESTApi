'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// here we describe json Schema for our mongo files
var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Insert User Name Here'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: {
      type: String,
      enum: ['active', 'pending approval', 'inactive', 'temporarilly blocked', 'blacklisted']
    },
    default: ['pending approval']
  }
});

// here we export mongoose model , whioch will be named 'Task'
// it will be most likely used by /api/controllers/CONTROLLER 
// also it willo be a name of our Collection in MongoDB
module.exports = mongoose.model('User', UserSchema);