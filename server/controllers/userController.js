import User from "../models/User.js";

// Get current user
export async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user._id).select('-password');
    console.log("Found user:", user); // Debug log
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (err) {
    console.error("Error in getCurrentUser:", err);
    res.status(500).json({ message: "Error fetching user" });
  }
}