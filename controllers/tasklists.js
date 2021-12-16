const TaskList = require('../models/tasklist');

module.exports = {
    index,
    new: newTaskList,
    create,
    show
};

function index(req, res) {
    TaskList.find({}, function (err, taskLists) {
        res.render('tasklists/index', { title: 'All Lists', taskLists });
    });
};

function newTaskList(rew, res) {
    res.render('tasklists/new', { title: 'Add Task List' });
};

function create(req, res) {
    req.body.important = !!req.body.important;
    const tasklist = new TaskList(req.body);
    tasklist.save(function (err) {
        if (err) return res.render('tasklists/new');
        console.log(tasklist);
        res.redirect('/tasklists');
    });
};

function show(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        res.render('tasklists/show', { title: "List Detail", tasklist });
    });
};