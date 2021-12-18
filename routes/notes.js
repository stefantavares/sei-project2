const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');

// POST "/tasks/:id/notes" - Create Route
router.post('/tasklists/:tasklistId/:taskId/notes', notesCtrl.create);

// GET "/tasks/:id/notes/new" - New Route
router.get('/tasklists/:tasklistId/:taskId/notes/new', notesCtrl.new);



module.exports = router;