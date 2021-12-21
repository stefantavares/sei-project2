const TaskList = require('../models/tasklist');

module.exports = {
    index,
    new: newTaskList,
    create,
    show,
    delete: deleteTaskList,
    edit
};

function index(req, res) {
    TaskList.find({}, function (err, tasklists) {
        res.render('tasklists/index', { tasklists });
    });
};

function newTaskList(rew, res) {
    res.render('tasklists/new');
};

function create(req, res) {
    req.body.important = !!req.body.important;
    const tasklist = new TaskList(req.body);
    tasklist.save(function (err) {
        if (err) return res.render('tasklists/new');
        console.log(tasklist);
        res.redirect(`/tasklists`);
    });
};

function show(req, res) {
    TaskList.findById(req.params.id, function (err, tasklist) {
        res.render('tasklists/show', { tasklist });
    });
};

function deleteTaskList(req, res) {
    TaskList.findOneAndDelete({ _id: req.params.id }, function (err) {
        res.redirect('/tasklists');
    });
}

function edit(req, res) {
    console.log('RIGHT ROUTE')
    TaskList.find(function (err, tasklists) {
        res.render(`tasklists/${tasklists._id}/edit`, { tasklists });
    });
}