const TaskList = require('../models/tasklist');

module.exports = {
    create,
    delete: deleteTask,
    edit: editTask
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
    console.log("RIGHT ROUTE");
    TaskList.findOne({ 'tasks._id': req.params.id }, function (err, tasklist) {
        const task = tasklist.tasks.id(req.params.id);
        task.remove();
        tasklist.save(function (err) {
            if (err) console.log(err);
            res.redirect(`/tasklists/${tasklist._id}`)
        })
        console.log(task);

    })
}

function editTask(req, res) {

}