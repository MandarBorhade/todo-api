const express = require("express");
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");
const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
