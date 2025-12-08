import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../src/lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "../src/lib/socket.js";
import path from "path";

// we have to put the file extenstion for the local file because we are using type: module in the package.json
import authRoutes from "../src/routes/auth.routes.js";
import messageRoutes from "../src/routes/message.routes.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// CORS configuration to allow requests from the frontend
// and to allow credentials (cookies) to be sent with requests
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
  connectDB();
});
