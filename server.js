const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) => {
  tasks.push({
  task: req.body.task,
  status: "pending"
});
  res.send("Task added");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(5000, () => console.log("Server running on 5000"));
app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks[id].status = "completed";
  res.send("Updated");
});