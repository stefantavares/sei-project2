const TaskList = require('../models/tasklist');
const Note = require('../models/note');

module.exports = {
    create,
    new: newNote,
    show
};

function create(req, res) {
    TaskList.findById(req.params.tasklistId, function (err, tasklist) {
        let foundTask = tasklist.tasks.find(function (task) {
            return task.id === req.params.taskId;
        })
        const note = new Note(req.body);
        tasklist.save(function (err) {
            if (err) return res.render('notes/new');
        });
        foundTask.notes.push(note);
        console.log(note);
        console.log(foundTask);
        res.redirect(`/tasklists/${tasklist._id}/${req.params.taskId}/notes/new`);
    })
};


function newNote(req, res) {
    TaskList.findById(req.params.tasklistId, function (err, tasklist) {
        let taskId = req.params.taskId;
        res.render('notes/new', { tasklist, taskId });
    })
};

function show(req, res) {

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