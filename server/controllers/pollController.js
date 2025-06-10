import Poll from "../models/Poll.js";

// Get all polls
export async function getPolls(req, res) {
  try {
    const polls = await Poll.find()
      .sort({ createdAt: -1 })
      .populate('createdBy', 'name');
    res.json(polls);
  } catch (err) {
    console.error("Error in getPolls:", err);
    res.status(500).json({ message: "Error fetching polls", error: err.message });
  }
}

// Get a single poll
export async function getPoll(req, res) {
  try {
    const poll = await Poll.findById(req.params.id).populate('createdBy', 'name');
    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }
    res.json(poll);
  } catch (err) {
    res.status(500).json({ message: "Error fetching poll" });
  }
}

// Create a new poll
export async function createPoll(req, res) {
  try {
    console.log("Received poll creation request:", req.body);
    console.log("User from auth:", req.user);

    const { question, options, endDate } = req.body;
    
    // Validate required fields
    if (!question || !options || !endDate) {
      console.log("Missing required fields:", { question, options, endDate });
      return res.status(400).json({ 
        message: "Missing required fields",
        received: { question, options, endDate }
      });
    }

    // Validate options array
    if (!Array.isArray(options) || options.length < 2) {
      return res.status(400).json({
        message: "At least 2 options are required"
      });
    }

    // Validate end date
    const endDateObj = new Date(endDate);
    if (isNaN(endDateObj.getTime())) {
      return res.status(400).json({
        message: "Invalid end date"
      });
    }

    // Create the poll with properly formatted options
    const newPoll = new Poll({
      question: question.trim(),
      options: options.map(opt => ({
        optionText: opt.optionText || opt,  // Handle both object and string formats
        votes: 0
      })),
      endDate: endDateObj,
      createdBy: req.user.id,
      isActive: true
    });

    console.log("Creating new poll:", newPoll);

    const savedPoll = await newPoll.save();
    console.log("Poll saved successfully:", savedPoll);
    
    // Populate the createdBy field before sending response
    const populatedPoll = await Poll.findById(savedPoll._id).populate('createdBy', 'name');
    
    res.status(201).json(populatedPoll);
  } catch (err) {
    console.error("Error in createPoll:", err);
    res.status(500).json({ 
      message: "Error creating poll", 
      error: err.message,
      stack: err.stack 
    });
  }
}


// Vote on a poll
export async function votePoll(req, res) {
  try {
    const { id } = req.params;
    const { optionIndex } = req.body;
    
    console.log("Voting on poll:", { id, optionIndex });

    if (!id || optionIndex === undefined) {
      return res.status(400).json({ 
        message: "Missing required fields",
        received: { id, optionIndex }
      });
    }

    const poll = await Poll.findById(id);
    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }

    if (!poll.isActive) {
      return res.status(400).json({ message: "Poll is no longer active" });
    }

    if (new Date() > poll.endDate) {
      poll.isActive = false;
      await poll.save();
      return res.status(400).json({ message: "Poll has ended" });
    }

    // Validate option index
    if (optionIndex < 0 || optionIndex >= poll.options.length) {
      return res.status(400).json({ message: "Invalid option index" });
    }

    // Increment votes for the selected option
    poll.options[optionIndex].votes += 1;
    await poll.save();
    
    // Return the updated poll
    const updatedPoll = await Poll.findById(id).populate('createdBy', 'name');
    res.json(updatedPoll);
  } catch (err) {
    console.error("Error in votePoll:", err);
    res.status(500).json({ 
      message: "Error voting on poll", 
      error: err.message 
    });
  }
}

// Delete a poll
export async function deletePoll(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // Find and delete the poll in one operation
    const deletedPoll = await Poll.findOneAndDelete({
      _id: id,
      createdBy: userId
    });

    if (!deletedPoll) {
      return res.status(404).json({ message: "Poll not found or you are not authorized to delete it" });
    }

    res.json({ message: "Poll deleted successfully" });
  } catch (err) {
    console.error("Error in deletePoll:", err);
    res.status(500).json({ 
      message: "Error deleting poll", 
      error: err.message 
    });
  }
}