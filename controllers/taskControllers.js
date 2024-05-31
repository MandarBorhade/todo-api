const Task = require("../models/taskModel");

//@desc create task
//@route POST /api/tasks
//@access private
const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "All fields are mandatory",
    });
  }

  const task = await Task.create({
    title,
    description,
    user_id: req.user.id,
  });

  return res.status(201).json({
    message: "Task created successfully",
    data: task,
  });
};

//@desc Get all tasks
//@route GET /api/tasks
//@access private
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({user_id: req.user.id});

  if (!tasks) {
    return res.status(404).json({ error: "No tasks found" });
  }

  return res.json(tasks);
};

//@desc Get task based on id
//@route GET /api/tasks/:id
//@access public
const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "No task found",
    });
  }

  return res.status(200).json(task);
};

//@desc Update task based on id
//@route PUT /api/tasks/:id
//@access public
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "No task found",
    });
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json({
    message: "task updated successfully",
    data: updatedTask,
  });
};

//@desc Delete task based on id
//@route DELETE /api/tasks/:id
//@access public
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "No task found",
    });
  }

  const deletedTask = await Task.findByIdAndDelete(req.params.id);

  return res.status(200).json(deletedTask);
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
};
