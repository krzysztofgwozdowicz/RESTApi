'use strict';

// import mongoose package
var mongoose = require('mongoose'),
    // Here we specify which model we want to use (it's also name of collection in db (lowerCased))
    // name of model is usually described in ./api/models folder
product = mongoose.model('Product');

// Here we define list_all_products method, and export it
exports.list_all_products = function (req, res) {
    // here we find all products that are corresponding to specified model  
    product.find({}, function (err, prod) {
        if (err)
            // if error occurs, send it
            res.send(err);
        // if there is no error, send found products in form of json
        res.json(prod);
    });
};



// this exported method creates new product in our db
exports.create_product = function (req, res) {
    // Here we define new product using product object and body part of request as parameter 
    var new_product = new product(req.body);
    // here we use moongoose library's method, save to create new product
    new_product.save(function (err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

//Here we create method which finds product with specified Id
exports.read_product = function (req, res) {
    // again we use libvrary's internal method, findById, and pass request parameter to it  
    // szuka po id z bazy danych a nie productId
    product.findById(req.params.productId, function (err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

// another method, this one finds product by id and updates it's body with passed one
exports.update_product = function (req, res) {
    product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true }, function (err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};


// This one deletes product with id passed as message parameter
exports.delete_product = function (req, res) {
    product.remove({ _id: req.params.productId }, function (err, product) {
        if (err)
            res.send(err);
        res.json({ message: 'product succesfully deleted' });
    });


};



//Here we create method which finds product with specified Id
exports.read_products_by_name = function (req, res) {
    console.log('zzz');
    console.log("productName: "+req.params.productName);
    
    // again we use libvrary's internal method, findById, and pass request parameter to it  
    product.find({productName:req.params.productName}, function (err, product) {
        if (err)
            res.send(err);
        console.log(product);    
        res.json(product);
    });
};

