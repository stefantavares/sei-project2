const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        },
    },
    tasks: [String],
});


module.exports = mongoose.model('TaskList', taskListSchema);