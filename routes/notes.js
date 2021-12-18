const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');

// POST "/tasklists/:tasklistId/:taskId/notes" - Create Route
router.post('/tasklists/:tasklistId/:taskId/notes', notesCtrl.create);

// GET "/tasklists/:tasklistId/:taskId/notes/new" - New Route
router.get('/tasklists/:tasklistId/:taskId/notes/new', notesCtrl.new);

// GET "/tasklists/:tasklistId/:taskId/notes" - Show Route
router.get('/tasklists/:tasklistId/:taskId/notes/new', notesCtrl.show);




module.exports = router;