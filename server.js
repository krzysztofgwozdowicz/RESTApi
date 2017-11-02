
// required imports, to create basic api we need express, express object
// mongoose, mongoDB file Model, and a body parser
var express = require('express'),
app = express(),
mongoose = require('mongoose'),
Task = require('./api/models/userModel'), //created model loading here
bodyParser = require('body-parser');

// here we describe, on which port our application will listen
port = process.env.PORT || 3000, //enviromental variable or specified default port

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongo connection key                                                                                                                                              name of db
mongoose.connect('mongodb://kgtestmongo:otUR09whH9vuu2GTmkEU2TWx4Yj6Dgl3sa846qfTwBgH8dHdJonMxfNrjgHWmSsX5NrKcLXOTSL0IcsDTUISfw==@kgtestmongo.documents.azure.com:10255/admin2?ssl=true');
// after connecting to database

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// here we describe which type of bodyParser will our express app use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// here we require routes specified by us, and register to it (by passing app object)
var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

// here we start listening
app.listen(port);

// info for us.
console.log('user list RESTful API server started on: ' + port);
