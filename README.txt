REST api works this way:

MAIN EXE
You need libraries: express, body-parser, 
you need to create express object

    var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

you need to define port on which app will be listening
    port = process.env.PORT || 3000,

it is necessary to set body parser which our express app will use 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

Next you need to create routes and controllers (and data models if used)
(found in controllers, models and routes subfolders)
    var routes = require('./api/routes/todoRoutes');
also we need to register our app object in routes
    routes(app);
then we can start listening on the ports:
    app.listen(port);





ROUTES

Routes require controllers to be imported:
    var todoList = require('../controllers/todoController');
then you need to create routes:
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

and it exports everything
    module.exports = function(app) {... things described above ...}



controllers

controllers export methods that can be used 

