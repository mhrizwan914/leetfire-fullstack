// Axios
import axios from "axios";

const baseURL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1" : "/api/v1";

export const axios_instance = axios.create({
  baseURL,
  withCredentials: true,
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
