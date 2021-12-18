const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    content: String,
    complete: Boolean,
    important: Boolean,
    notes: [{
        type: Schema.Types.ObjectId, ref: 'Note',
    }]
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


module.exports = mongoose.model('TaskList', taskListSchema);