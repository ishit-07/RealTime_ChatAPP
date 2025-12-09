import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

// Specific routes FIRST (before dynamic :id routes)
router.get("/users", protectRoute, getUsersForSidebar);

// Dynamic routes AFTER specific routes
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);

export default router;
