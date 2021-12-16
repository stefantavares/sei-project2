const TaskList = require('../models/tasklist');

module.exports = {
    index,
    new: newTaskList
};

function index(req, res) {
    TaskList.find({}, function (err, taskLists) {
        res.render('tasklists/index', { title: 'All Lists', taskLists });
    })
};

function newTaskList(rew, res) {
    res.render('tasklists/new');
};
