import MessRating from "../models/MessRating.js";
import path from "path";
import fs from "fs";

// GET /api/mess
export async function getRatings(req, res) {
  try {
    const ratings = await MessRating.find()
      .sort({ date: -1 })
      .populate("user", "username");

    // Remove user info if anonymous
    const sanitizedRatings = ratings.map((rating) => {
      const r = rating.toObject();
      if (r.isAnonymous) {
        r.user = null;
      }
      return r;
    });
    console.log(
      "Sanitized Ratings:",
      JSON.stringify(sanitizedRatings, null, 2)
    );


    res.json(sanitizedRatings);

    // res.json(ratings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching ratings", error: err.message });
  }
}

// POST /api/mess  (requires auth middleware)
export async function createRating(req, res) {
  try {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);
    console.log("Authenticated user:", req.user);

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: no user info" });
    }

    const { rating, comment, isAnonymous, mealTag } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res
        .status(400)
        .json({ message: "Rating must be between 1 and 5" });
    }

    if (!mealTag) {
      return res.status(400).json({ message: "Meal selection is required" });
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    // Assuming MessRating is your Mongoose model
    const newRating = await MessRating.create({
      user: req.user.id,
      rating,
      comment,
      isAnonymous: isAnonymous === "true" || isAnonymous === true,
      image: imagePath,
      mealTag
    });

    // Populate username
    const populatedRating = await newRating.populate("user", "username");

    // Sanitize if anonymous
    const ratingObj = populatedRating.toObject();
    if (ratingObj.isAnonymous) {
      ratingObj.user = null;
    }

    res.status(201).json(ratingObj); // ✅ properly structured response
    // res.status(201).json(newRating);
  } catch (err) {
    console.error("Error in createRating:", err);
    res
      .status(500)
      .json({ message: "Error creating rating", error: err.message });
  }
}
  
