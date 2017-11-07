'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// here we describe json Schema for our mongo files
var ProductSchema = new Schema({

  ///////////////////////////////////
    productId: {
        type: String,},
    productName: {
        type: String,},
    productCode: {
        type: String,},
    releaseDate: {
        type: String,},
    description: {
        type: String,},
    price: {
        },
    starRating: {
        },
    imageUrl: {
        type: String,},
});

// here we export mongoose model , whioch will be named 'Task'
// it will be most likely used by /api/controllers/CONTROLLER 
// also it willo be a name of our Collection in MongoDB
module.exports = mongoose.model('Product', ProductSchema);