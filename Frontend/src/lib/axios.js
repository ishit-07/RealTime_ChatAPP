import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",

  // this is for cookies to be sent with requests
  withCredentials: true,
});
