const TaskList = require('../models/tasklist');

module.exports = {
    index,
    new: newTaskList,
    create
};

function index(req, res) {
    TaskList.find({}, function (err, taskLists) {
        res.render('tasklists/index', { title: 'All Lists', taskLists });
    })
};

function newTaskList(rew, res) {
    res.render('tasklists/new');
};

function create(req, res) {
    const tasklist = new TaskList(req.body);
    tasklist.save(function (err) {
        if (err) return res.render('tasklists/new');
        console.log(tasklist);
        res.redirect('/tasklists');
    })
}
