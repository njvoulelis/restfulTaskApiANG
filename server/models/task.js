const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    completed: { type: Boolean, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema) //collection name Task