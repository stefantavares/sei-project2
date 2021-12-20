const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');

// POST "/tasklists/:id/tasks" - Create Route
router.post('/tasklists/:id/tasks', tasksCtrl.create);

// DELETE '/tasklists/:id/tasks' - Delete Route
router.delete('/tasklists/:id/tasks', tasksCtrl.delete);

// GET "" - Edit Route

module.exports = router;