import express from "express";
import dotenv from "dotenv";
import {connectDB} from "../src/lib/db.js";
import cookieParser from "cookie-parser";

// we have to put the file extenstion for the local file because we are using type: module in the package.json
import authRoutes from "../src/routes/auth.routes.js";

dotenv.config();
const app = express();

const PORT = 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT , () => {
    console.log("Server is running on port: "+ PORT);
    connectDB();
});