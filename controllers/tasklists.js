const TaskList = require('../models/tasklist');

module.exports = {
    index,
};

function index(req, res) {
    TaskList.find({}, function (err, taskLists) {
        res.render('tasklists/index');
    })
};