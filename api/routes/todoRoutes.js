// Routing is used to route browser traffic. When se enter serverAddress:Port/route (which is described below),
// then corresponding actions will be possible 
'use strict';
// here we export this whole function
module.exports = function(app) {
  // here we import methods from Controller
  var todoList = require('../controllers/todoController');

  // todoList Routes. Whne You enter address:port/tasks, you will be able to use get and post methods
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  // when you add /taskId variable into to the url described above, you will be able to display, delete or update existing task with specified ID 
  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
