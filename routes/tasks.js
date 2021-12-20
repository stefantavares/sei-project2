const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');

// POST "/tasklists/:id/tasks" - Create Route
router.post('/tasklists/:id/tasks', tasksCtrl.create);

// DELETE '/reviews/:id' page for removing a review written by user
router.delete('/tasklists/:tasklistId/taskId', tasksCtrl.delete);

module.exports = router;