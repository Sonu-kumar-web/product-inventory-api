//importing all the necessary files
const express = require('express');
const router = express.Router();

// Setting controller path
const productsApi = require("../../../controllers/api/v1/products_api_controller");

// Setting up all paths for controller
router.post('/create',productsApi.addProduct);
router.get('/',productsApi.getProduct);
router.delete('/:id',productsApi.deleteProduct);
router.post('/:id/update_product',productsApi.updateProduct);

// Exporting router
module.exports = router;