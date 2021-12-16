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
});


module.exports = mongoose.model('TaskList', taskListSchema);