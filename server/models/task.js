const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    completed: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema)