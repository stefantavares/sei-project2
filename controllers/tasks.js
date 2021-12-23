const TaskList = require('../models/tasklist');

module.exports = {
    create,
    delete: deleteTask,
    edit: editTask,
    update
}

function create(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        if (!tasklist.user.equals(req.user._id)) return res.redirect(`/tasklists/${tasklist._id}`);
        tasklist.tasks.push(req.body);
        tasklist.save(function (err) {
            res.redirect(`/tasklists/${tasklist._id}`);
        });
    });
}

function deleteTask(req, res) {
    TaskList.findOne({ 'tasks._id': req.params.id }, function (err, tasklist) {
        if (!tasklist.user.equals(req.user._id)) return res.redirect(`/tasklists/${tasklist._id}`);
        const task = tasklist.tasks.id(req.params.id);
        task.remove();
        tasklist.save(function (err) {
            if (err) console.log(err);
            res.redirect(`/tasklists/${tasklist._id}`)
        });
    });
}

function editTask(req, res) {
    // Set content property to an empty array
    let content = [];
    // Find the id of the task
    TaskList.findOne({ 'tasks._id': req.params.id }).then(function (tasklists) {
        if (!tasklists.user.equals(req.user._id)) return res.redirect(`/tasklists/${tasklists._id}`);
        tasklists.taskId = req.params.id
        // Iterate over the tasks
        tasklists.tasks.forEach(function (t) {
            // If the id equals req.params.id - push to the content array
            if (t._id == req.params.id) {
                content.push(t);
            };
        });
        res.render('tasks/edit', { tasklists, content });
    });
}

function update(req, res) {
    TaskList.findOne({ 'tasks._id': req.params.id }, function (err, tasklists) {
        if (!tasklists.user.equals(req.user._id)) return res.redirect(`/tasklists/${tasklists._id}`);
        const task = tasklists.tasks.id(req.params.id);
        task.content = req.body.content;
        tasklists.save(function (err) {
            res.redirect(`/tasklists/${tasklists._id}`);
        });
    });
}