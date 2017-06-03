var express = require('express');
var router = express.Router();

// Require controller modules
var tese_controller = require(__dirname + '/../controllers/teseController')

// Tese Routes
// Teses homepage
router.get('/', tese_controller.teseList)

// GET request to create a Tese
router.get('/tese/create', tese_controller.tese_create_get)

// POST request to create a Tese
router.post('/tese/create', tese_controller.tese_create_post)

module.exports = router;