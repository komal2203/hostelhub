import express from "express";
import { getCurrentUser } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Get current user route
router.get("/me", auth, getCurrentUser);

export default router;