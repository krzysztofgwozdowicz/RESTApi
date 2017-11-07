// Routing is used to route browser traffic. When se enter serverAddress:Port/route (which is described below),
// then corresponding actions will be possible 
'use strict';
// here we export this whole function
module.exports = function(app) {
  // here we import methods from Controller
  var productList = require('../controllers/productController');
  var utilities = require('../controllers/utilitiesController');

  // productList Routes. Whne You enter address:port/tasks, you will be able to use get and post methods
  app.route('/products')
    .get(productList.list_all_products)
    .post(productList.create_product);

  // when you add /taskId variable into to the url described above, you will be able to display, delete or update existing task with specified ID 
  app.route('/products/:productId')
    .get(productList.read_product)
    .put(productList.update_product)
    .delete(productList.delete_product);
  
  app.route('/products/findbyname/:productName')
    .get(productList.read_products_by_name);

  app.route('/api').get(utilities.display_help);
};
