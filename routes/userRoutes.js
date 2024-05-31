const express = require("express");
const {
  userRegister,
  userLogin,
  currentUser,
} = require("../controllers/userControllers");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/currentUser", validateToken, currentUser);

module.exports = router;
