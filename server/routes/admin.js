const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const adminController = require('../controller/admin');

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get('/products');

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;