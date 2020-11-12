import axios from "axios";

const devURL = "http://192.168.1.118:1337";
const stagingURL = "";
const prodURL = "";

const api = axios.create({
  baseURL: devURL,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export default api;
