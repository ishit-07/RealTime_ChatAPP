import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  signUp,
  logIn,
  logOut,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;
