const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');

// POST "/tasklists/:id/tasks" - Create Route
router.post('/tasklists/:id/tasks', tasksCtrl.create);

module.exports = router;