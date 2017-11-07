// Routing is used to route browser traffic. When se enter serverAddress:Port/route (which is described below),
// then corresponding actions will be possible 
'use strict';
// here we export this whole function
module.exports = function(app) {
  // here we import methods from Controller
  var userList = require('../controllers/userController');
  var utilities = require('../controllers/utilitiesController');

  // userList Routes. Whne You enter address:port/tasks, you will be able to use get and post methods
  app.route('/products')
    .get(userList.list_all_users)
    .post(userList.create_user);

 
  app.route('/api').get(utilities.display_help)
};
