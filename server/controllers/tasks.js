const Task = require('../models/task')

module.exports = {
    index: (req,res) => {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newTask: (req,res) => {
        const per = new Task();
        per.title = req.body.title;
        per.desc = req.body.desc;
        per.completed = false;
        per.save()
            .then(() => res.json(per))
            .catch(err => res.json(err))
    },
    delTask: (req,res) => {
        Task.remove({_id: req.params.title})
            .then(del => res.json(del))
            .catch(err => res.json(err))
    },
    specPer: (req,res) => {
        Task.findOne({_id: req.params.title})
            .then(specP => res.json(specP))
            .catch(err => res.json(err))
    },
    updateTask: (req,res) => {
        Task.updateOne({_id: req.params.id}, {
                title: req.body.title,
                desc: req.body.desc,
                completed: true
        })
            .then(upD => res.json(upD))
            .catch(err => res.json(err))
    },
}