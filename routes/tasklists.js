const express = require('express');
const router = express.Router();
const taskListsCtrl = require('../controllers/tasklists');
const isLoggedIn = require('../config/auth');


// GET "/tasklists" - Index Route
router.get('/', isLoggedIn, taskListsCtrl.index);

// GET "/new" - New Route
router.get('/new', isLoggedIn, taskListsCtrl.new);

// POST "/" - Create Route
router.post('/', isLoggedIn, taskListsCtrl.create);

// GET "/:id" - Show Route
router.get('/:id', isLoggedIn, taskListsCtrl.show);

// DELETE "/:id" - Delete Route
router.delete('/:id', taskListsCtrl.delete);

// GET "/:id/edit" - Edit Route
router.get('/:id/edit', taskListsCtrl.edit);

// PUT "/:id" - Update Route
router.put('/:id', taskListsCtrl.update);




module.exports = router;