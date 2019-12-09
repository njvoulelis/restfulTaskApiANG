const tasks = require ('../controllers/tasks.js');

module.exports = function (app) {
    app.get("/api/tasks", (req,res) => {
        tasks.index(req,res);
    });
    app.post("/api/tasks", (req,res) => {
        tasks.newTask(req,res);
    });
    app.delete("/api/tasks/remove/:title", (req,res) =>{
        tasks.delTask(req,res);
    });
    app.get("/api/tasks/:title", (req,res) => {
        tasks.specPer(req,res);
    });
    app.put("/api/tasks/:title", (req,res) => {
        tasks.updateTask(req,res);
    });
    // app.get("/api/tasks/:title/:newtit/:desc/:completed", (req,res) => {
    //     tasks.updateTask(req,res);
    // });
}