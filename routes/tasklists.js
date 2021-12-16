const express = require('express');
const router = express.Router();
const taskListsCtrl = require('../controllers/tasklists');

// GET "/tasklists" - Index Route
router.get('/', taskListsCtrl.index);

// GET "/new" - New Route
router.get('/new', taskListsCtrl.new);



module.exports = router;