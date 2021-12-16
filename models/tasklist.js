const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    listDate: {
        type: Date,
        default: function () {
            var d = new Date();
            var noTimeDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
            return noTimeDate;
        }
    },
    tasks: [String],
});


module.exports = mongoose.model('TaskList', taskListSchema);