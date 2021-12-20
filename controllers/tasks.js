const TaskList = require('../models/tasklist');

module.exports = {
    create,
    delete: deleteTask
};

function create(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        tasklist.tasks.push(req.body);
        tasklist.save(function (err) {
            console.log(req.body);
            res.redirect(`/tasklists/${tasklist._id}`);
        });
    });
};

function deleteTask(req, res) {
    TaskList.findOne({ 'tasks._id': req.params.id }, function (err, tasklist) {
        const task = tasklist.tasks.id(req.params.id);
        console.log(task);

    })
}