const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    content: String,
    complete: Boolean,
    important: Boolean,
    tasklist: [{
        type: Schema.Types.ObjectId, ref: 'TaskList',
    }]
});

module.exports = mongoose.model('Task', taskSchema);