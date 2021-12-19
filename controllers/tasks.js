const TaskList = require('../models/tasklist');

module.exports = {
    create,
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