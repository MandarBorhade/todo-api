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
router.get("/:id",valideToken, getTask);
router.post("/", valideToken, createTask);
router.put("/:id", valideToken, updateTask);
router.delete("/:id", valideToken,  deleteTask);

module.exports = router;
