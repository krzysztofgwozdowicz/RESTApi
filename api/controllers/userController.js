'use strict';

// import mongoose package
var mongoose = require('mongoose'),
    // Here we specify which model we want to use (it's also name of collection in db (lowerCased))
    // name of model is usually described in ./api/models folder
    User = mongoose.model('User');

// Here we define list_all_Users method, and export it
exports.list_all_users = function (req, res) {
    // here we find all Users that are corresponding to specified model  
    User.find({}, function (err, user) {
        if (err)
            // if error occurs, send it
            res.send(err);
        // if there is no error, send found Users in form of json
        res.json(user);
    });
};



// this exported method creates new User in our db
exports.create_user = function (req, res) {
    // Here we define new User using User object and body part of request as parameter 
    var new_user = new User(req.body);
    // here we use moongoose library's method, save to create new User
    new_user.save(function (err, user) {
        console.log("okkeeeej");
        if (err)
            res.send(err);
        res.json(user);
    });
};

//Here we create method which finds User with specified Id
exports.read_user = function (req, res) {
    // again we use libvrary's internal method, findById, and pass request parameter to it  
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

// another method, this one finds User by id and updates it's body with passed one
exports.update_user = function (req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


// This one deletes User with id passed as message parameter
exports.delete_user = function (req, res) {
    User.remove({ _id: req.params.userId }, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User succesfully deleted' });
    });


};





