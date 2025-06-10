import express from "express";
import { getRatings, createRating } from "../controllers/messController.js";
import multer from "multer";
import path from "path";
// Your existing auth middleware
import { auth } from "../middleware/auth.js";
import MessRating from "../models/MessRating.js"; 
const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to save uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });



// Routes
router.get("/", getRatings);

// Use multer middleware for file upload and auth middleware
router.post("/", auth, upload.single("image"), createRating);

// POST /api/mess/:id/vote
router.post("/:id/vote", auth, async (req, res) => {
  const { id } = req.params;
  const { type } = req.body; // 'up' or 'down'
  const userId = req.user.id;

  try {
    const rating = await MessRating.findById(id);
    if (!rating) return res.status(404).json({ message: "Not found" });

    // Remove user from both arrays first
    rating.upvotes = rating.upvotes.filter((u) => !u.equals(userId));
    rating.downvotes = rating.downvotes.filter((u) => !u.equals(userId));

    // Then add to the chosen array
    if (type === "up") rating.upvotes.push(userId);
    else if (type === "down") rating.downvotes.push(userId);

    await rating.save();
    // respond with new counts
    res.json({
      upvotes: rating.upvotes.length,
      downvotes: rating.downvotes.length,
      id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
