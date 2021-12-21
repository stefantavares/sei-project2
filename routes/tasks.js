const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');

// POST "/tasklists/:id/tasks" - Create Route
router.post('/tasklists/:id/tasks', tasksCtrl.create);

// DELETE '/tasklists/:id/tasks' - Delete Route
router.delete('/tasklists/:id/tasks', tasksCtrl.delete);

// GET "/tasks/:id/edit" - Edit Route
router.get('/tasks/:id/edit', tasksCtrl.edit);

// PUT "/tasks/:id" - Update Route
router.put('/tasks/:id', tasksCtrl.update);

module.exports = router;