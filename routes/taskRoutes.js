const express = require("express");
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");
const valideToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.get("/", valideToken, getAllTasks);
router.get("/:id", getTask);
router.post("/", valideToken, createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
