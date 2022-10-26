const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const productController = require("../controller/product");
router.get("/", productController.getProducts);

module.exports = router;