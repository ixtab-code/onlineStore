const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render(path.join(rootDir, 'client', 'views', 'shop', 'shop.ejs'));
});

module.exports = router;