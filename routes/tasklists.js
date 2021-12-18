const express = require('express');
const router = express.Router();
const taskListsCtrl = require('../controllers/tasklists');

// GET "/tasklists" - Index Route
router.get('/', taskListsCtrl.index);

// GET "/new" - New Route
router.get('/new', taskListsCtrl.new);

// POST "/" - Create Route
router.post('/', taskListsCtrl.create);

// GET "/:id" - Show Route
router.get('/:id', taskListsCtrl.show);

router.delete('/:id', taskListsCtrl.delete);




module.exports = router;