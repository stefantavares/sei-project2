const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
});

const taskListSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
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