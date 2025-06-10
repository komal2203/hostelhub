import mongoose from "mongoose";

const lostItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  dateLost: { type: Date, required: true },
  location: { type: String, required: true },
  image: { type: String },
  found: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("LostItem", lostItemSchema);