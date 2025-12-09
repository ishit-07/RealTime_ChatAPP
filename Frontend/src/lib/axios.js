import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api", // 🔥 Auto-works for dev + production
  withCredentials: true,
});
