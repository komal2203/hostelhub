import LostItem from "../models/LostItem.js";
import multer from "multer";
import path from "path";

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/lost-items/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

export const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  }
});

// GET /api/lost
export async function getLostItems(req, res) {
  try {
    const items = await LostItem.find()
      .sort({ createdAt: -1 })
      .populate('user', 'name email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching lost items", error: err.message });
  }
}

// POST /api/lost
export async function createLostItem(req, res) {
  try {
    const newItem = new LostItem({
      ...req.body,
      user: req.user.id,
      image: req.file ? req.file.path : undefined
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Error creating lost item", error: err.message });
  }
}

// PATCH /api/lost/:id/found
export async function markFound(req, res) {
  try {
    const item = await LostItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    
    item.found = true;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Error updating item", error: err.message });
  }
}