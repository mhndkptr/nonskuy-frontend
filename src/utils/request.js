import axios from "axios";

const request = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

export default {
  get: (url, params = null, headers = {}) => request({ method: "get", url, params, headers }),
};
