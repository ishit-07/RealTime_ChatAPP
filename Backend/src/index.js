import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../src/lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "../src/lib/socket.js";
import authRoutes from "../src/routes/auth.routes.js";
import messageRoutes from "../src/routes/message.routes.js";

dotenv.config();

const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://chatty-nu-bay.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});
