const express = require("express");
const router = express.Router();
const verify = require("../utils/verifyToken");
const { userValidate } = require("../validators/user");

const {
  loginUser,
  registerUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserByName,
} = require("../controllers/user");

router.post("/login", loginUser);
router.post("/register",  userValidate, registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", userValidate, updateUserById);
router.delete("/:id", deleteUserById);
router.post("/search", getUserByName);

module.exports = router ;
