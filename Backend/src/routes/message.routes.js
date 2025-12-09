import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

// Fix: ensure all routes have proper parameter names
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages); // ✓ valid: /:id
router.post("/send/:id", protectRoute, sendMessages); // ✓ valid: /send/:id

export default router;
