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
    TaskList.findOne({ 'tasklists._id': req.params.id }).then(function (tasklists) {
        tasklists.tasklistId = req.params.id
        res.render(`tasklists/edit`, { tasklists });
    });
}

function updateTaskList(req, res) {
    TaskList.findOne({ 'tasklists._id': req.params.id }, function (err, tasklists) {
        const tasklist = req.params.id;
        tasklist.title = req.body.title;
        tasklist.listDate = req.body.listDate;
        tasklists.save(function (err) {
            res.redirect('/tasklists');
        })
    })

}