import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

// Specific routes first (must come before dynamic params)
router.get("/users", protectRoute, getUsersForSidebar);

// Dynamic routes after specific ones
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);

export default router;
