// Routing is used to route browser traffic. When se enter serverAddress:Port/route (which is described below),
// then corresponding actions will be possible 
'use strict';
// here we export this whole function
module.exports = function(app) {
  // here we import methods from Controller
  var todoList = require('../controllers/userController');
  var utilities = require('../controllers/utilitiesController');

  // todoList Routes. Whne You enter address:port/tasks, you will be able to use get and post methods
  app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_user);

  // when you add /taskId variable into to the url described above, you will be able to display, delete or update existing task with specified ID 
  app.route('/users/:taskId')
    .get(todoList.read_user)
    .put(todoList.update_user)
    .delete(todoList.delete_user);
    
  app.route('/api').get(utilities.display_help)
};
