import express from "express";
import { protectRoute } from "../middleware/protectRoute.middleware.js";
import { getMessages, getUsersForSidebar, sendMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);

// this is used so, we can see all the messages from before the sender and receiver exchange
router.get("/:id",protectRoute, getMessages);

// now this is for sending the messages
router.post("/send/:id", protectRoute, sendMessages);

export default router;