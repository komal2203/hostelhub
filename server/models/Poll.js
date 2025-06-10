import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  optionText: {  // Changed from 'text' to 'optionText'
    type: String,
    required: [true, "Option text is required"],
    trim: true
  },
  votes: {
    type: Number,
    default: 0,
    min: [0, "Votes cannot be negative"]
  }
});

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
    trim: true,
    minlength: [3, "Question must be at least 3 characters long"]
  },
  options: {
    type: [optionSchema],
    validate: {
      validator: function(options) {
        return options.length >= 2;
      },
      message: "At least 2 options are required"
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Creator is required"]
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
    validate: {
      validator: function(v) {
        return v > new Date();
      },
      message: "End date must be in the future"
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Poll", pollSchema);