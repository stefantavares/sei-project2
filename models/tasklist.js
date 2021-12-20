const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    content: String,
});

const taskSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    complete: Boolean,
    important: Boolean,
    notes: [noteSchema]
});

const taskListSchema = new Schema({
    title: {
        type: String,
    },
    listDate: {
        type: Date,
        required: true,
        default: function () {
            return new Date().getFullYear();
        }
    },
    tasks: [taskSchema]
});


module.exports = mongoose.model('TaskList', taskListSchema)