import express from "express";
import { getLostItems, createLostItem, markFound, upload } from "../controllers/lostController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getLostItems);
router.post("/", auth, upload.single('image'), createLostItem);
router.patch("/:id/found", auth, markFound);

export default router;