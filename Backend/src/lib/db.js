import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MnogoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error", error);
    }
}
