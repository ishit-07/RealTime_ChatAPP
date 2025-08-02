import express from "express";
import dotenv from "dotenv";
import {connectDB} from "../src/lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// we have to put the file extenstion for the local file because we are using type: module in the package.json
import authRoutes from "../src/routes/auth.routes.js";
import messageRoutes from "../src/routes/message.routes.js";

dotenv.config();
const app = express();

const PORT = 5001;

app.use(express.json());
app.use(cookieParser());

// CORS configuration to allow requests from the frontend
// and to allow credentials (cookies) to be sent with requests
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT , () => {
    console.log("Server is running on port: "+ PORT);
    connectDB();
});