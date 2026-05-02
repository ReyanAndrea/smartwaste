import express from "express";
import {
  register,
  login,
  updateProfile,
  changePassword
} from "../controllers/authController.js";
import {
  verifyToken
} from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/profile", verifyToken, updateProfile);
router.put("/change-password", verifyToken, changePassword);

export default router;