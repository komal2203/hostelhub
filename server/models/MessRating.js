// server/models/MessRating.js
import mongoose from "mongoose";

const MessRatingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  isAnonymous: { type: Boolean, default: false },
  image: { type: String, default: null },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  date: { type: Date, default: Date.now },
  mealTag: { 
    type: String, 
    required: true,
    enum: [
      'Monday-Breakfast', 'Monday-Lunch', 'Monday-Snacks', 'Monday-Dinner',
      'Tuesday-Breakfast', 'Tuesday-Lunch', 'Tuesday-Snacks', 'Tuesday-Dinner',
      'Wednesday-Breakfast', 'Wednesday-Lunch', 'Wednesday-Snacks', 'Wednesday-Dinner',
      'Thursday-Breakfast', 'Thursday-Lunch', 'Thursday-Snacks', 'Thursday-Dinner',
      'Friday-Breakfast', 'Friday-Lunch', 'Friday-Snacks', 'Friday-Dinner',
      'Saturday-Breakfast', 'Saturday-Lunch', 'Saturday-Snacks', 'Saturday-Dinner',
      'Sunday-Breakfast', 'Sunday-Lunch', 'Sunday-Snacks', 'Sunday-Dinner'
    ]
  }
});

export default mongoose.model("MessRating", MessRatingSchema);