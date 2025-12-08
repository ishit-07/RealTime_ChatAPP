import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",

  // this is for cookies to be sent with requests
  withCredentials: true,
});
