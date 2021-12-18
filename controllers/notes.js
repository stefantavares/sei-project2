const TaskList = require('../models/tasklist');
const Note = require('../models/note');

module.exports = {
    create,
    new: newNote,
};

function create(req, res) {
    req.body.tasklist = req.params.id;
    Note.create(req.body, function (err) {
        res.redirect(`/tasklists/${req.params.id}/notes/new`);
    });
};

function newNote(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        res.render('notes/new', { tasklist });
    })
};

        // // const task = tasklist.tasks.filter(function (e) {
        // //     return e._id.equals(req.params.id);
        // // })
        // const note = new Note(req.body);
        // note.save(function (err) {
        //     const task = tasklist.tasks.filter(function (e) {
        //         return e._id.equals(req.params.id);
        //     })
        //     task.notes.push(note);