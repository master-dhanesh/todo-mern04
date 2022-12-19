const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
    title: String,
    desc: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model("task", taskModel);

module.exports = Task;
