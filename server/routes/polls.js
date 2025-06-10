import express from "express";
import {
    createPoll,
    getPolls,
    getPoll,
    votePoll,
    deletePoll
} from "../controllers/pollController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createPoll);
router.get("/", getPolls);
router.get("/:id", getPoll);
router.post("/:id/vote", auth, votePoll);
router.delete("/:id", auth, deletePoll); // Make sure this line exists

export default router;