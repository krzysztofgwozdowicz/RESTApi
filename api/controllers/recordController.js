'use strict';

// import mongoose package
var mongoose = require('mongoose'),
    // Here we specify which model we want to use (it's also name of collection in db (lowerCased))
    // name of model is usually described in ./api/models folder
record = mongoose.model('OperationRecord');

// Here we define list_all_records method, and export it
exports.list_all_records = function (req, res) {
    // here we find all records that are corresponding to specified model  
    record.find({}, function (err, prod) {
        if (err)
            // if error occurs, send it
            res.send(err);
        // if there is no error, send found records in form of json
        res.json(prod);
    });
};



// this exported method creates new record in our db
exports.create_record = function (req, res) {
    // Here we define new record using record object and body part of request as parameter 
    var new_record = new record(req.body);
    // here we use moongoose library's method, save to create new record
    new_record.save(function (err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};

//Here we create method which finds record with specified Id
exports.read_record = function (req, res) {
    // again we use libvrary's internal method, findById, and pass request parameter to it  
    // szuka po id z bazy danych a nie recordId
    record.findById(req.params.deviceId, function (err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};

// another method, this one finds record by id and updates it's body with passed one
exports.update_record = function (req, res) {
    record.findOneAndUpdate({ _id: req.params.recordId }, req.body, { new: true }, function (err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};


// This one deletes record with id passed as message parameter
exports.delete_record = function (req, res) {
    record.remove({ _id: req.params.recordId }, function (err, record) {
        if (err)
            res.send(err);
        res.json({ message: 'record succesfully deleted' });
    });


};



//Here we create method which finds record with specified Id
exports.read_records_by_deviceId = function (req, res) {
    console.log('zzz');
    console.log("recordName: "+req.params.deviceId);
    
    // again we use libvrary's internal method, findById, and pass request parameter to it  
    record.find({DeviceId:req.params.deviceId}, function (err, record) {
        if (err)
            res.send(err);
        console.log(record);    
        res.json(record);
    });
};

