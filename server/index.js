import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import multer from "multer";

// Import routes
import messRoutes from './routes/mess.js';
import lostRoutes from './routes/lost.js';
import pollRoutes from './routes/polls.js';
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin: [
    'https://hostelhub-frontend.onrender.com', // your deployed frontend URL
    'http://localhost:5173' // (optional) for local dev
  ],
  credentials: true // if you use cookies/auth
}));
app.use(express.json());

const uploadsDir = path.join(__dirname, "uploads");

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve images statically from /uploads
app.use("/uploads", express.static(uploadsDir));

// API to list image paths with timestamps
// In server/index.js, modify the /api/images endpoint:
app.get("/api/images", async (req, res) => {
  try {
    console.log("Reading directory:", uploadsDir);
    const files = await fs.promises.readdir(uploadsDir);
    console.log("Files found:", files);

    const imagePromises = files
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(async (file) => {
        const filePath = path.join(uploadsDir, file);
        const stats = await fs.promises.stat(filePath);
        const imageData = {
          path: `/uploads/${file}`,
          createdAt: stats.birthtime,
          filename: file
        };
        console.log("Image data:", imageData); // Debug log
        return imageData;
      });

    const images = await Promise.all(imagePromises);
    console.log("All processed images:", images); // Debug log
    
    // Sort images by creation time, newest first
    images.sort((a, b) => b.createdAt - a.createdAt);
    res.json({ images });
  } catch (err) {
    console.error("Error getting images:", err);
    res.status(500).json({ error: "Failed to process images" });
  }
});

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Use Date.now() for unique file names
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + ext);
  }
});
const upload = multer({ storage: storage });

// Upload endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({
    path: `/uploads/${req.file.filename}`,
    filename: req.file.filename,
    createdAt: new Date()
  });
});

app.use('/api/mess', messRoutes);
app.use('/api/lost', lostRoutes);
app.use('/api/polls', pollRoutes);
app.use("/api/auth", authRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "Something went wrong!", 
    error: err.message 
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });