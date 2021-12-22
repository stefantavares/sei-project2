const TaskList = require('../models/tasklist');

module.exports = {
    index,
    new: newTaskList,
    create,
    show,
    delete: deleteTaskList,
    edit,
    update: updateTaskList
};

function index(req, res) {
    TaskList.find({ user: req.user }, function (err, tasklists) {
        res.render('tasklists/index', { tasklists });
    });
}

function newTaskList(rew, res) {
    res.render('tasklists/new');
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const tasklist = new TaskList(req.body);
    tasklist.save(function (err) {
        if (err) return res.render('tasklists/new');
        res.redirect(`/tasklists`);
    });
}

function show(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        res.render('tasklists/show', { tasklist });
    });
}

function deleteTaskList(req, res) {
    TaskList.findOneAndDelete({ _id: req.params.id }, function (err) {
        res.redirect('/tasklists');
    });
}

function edit(req, res) {
    TaskList.findOne({ _id: req.params.id }).then(function (tasklists) {
        res.render(`tasklists/edit`, { tasklists });
    });
}

function updateTaskList(req, res) {
    TaskList.findById(req.params.id, function (err, tasklists) {
        tasklists.title = req.body.title;
        tasklists.listDate = req.body.listDate;
        tasklists.save(function (err) {
            res.redirect('/tasklists');
        });
    });
}