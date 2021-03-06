'use strict';

// Express Related Library
var express = require('express');

// Route
var router = express.Router();

// To get all posts
router.use('/posts', require('./posts'));
router.use('/logins', require('./logins'));

module.exports = router;
