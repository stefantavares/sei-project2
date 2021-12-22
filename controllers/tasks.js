const TaskList = require('../models/tasklist');

module.exports = {
    create,
    delete: deleteTask,
    edit: editTask,
    update
}

function create(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        tasklist.tasks.push(req.body);
        tasklist.save(function (err) {
            console.log(req.body);
            res.redirect(`/tasklists/${tasklist._id}`);
        });
    });
}

function deleteTask(req, res) {
    TaskList.findOne({ 'tasks._id': req.params.id }, function (err, tasklist) {
        const task = tasklist.tasks.id(req.params.id);
        task.remove();
        tasklist.save(function (err) {
            if (err) console.log(err);
            res.redirect(`/tasklists/${tasklist._id}`)
        });
    });
}

function editTask(req, res) {
    TaskList.findOne({ 'tasks._id': req.params.id }).then(function (tasklists) {
        tasklists.taskId = req.params.id
        res.render('tasks/edit', { tasklists });
    });
}

function update(req, res) {
    TaskList.findOne({ 'tasks._id': req.params.id }, function (err, tasklists) {
        const task = tasklists.tasks.id(req.params.id);
        task.content = req.body.content;
        tasklists.save(function (err) {
            res.redirect(`/tasklists/${tasklists._id}`);
        });
    });
}