import express from "express";
import {
  checkAuth,
  logIn,
  logOut,
  signUp,
  updatePorfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", logIn);

router.post("/logout", logOut);

// we use put because we are updating the profile
// protectRoute is to check wheter the user is logged in or not if logged in then we can give to update profile
router.put("/update-profile", protectRoute, updatePorfile);

router.get("/check", protectRoute, checkAuth);

export default router;
