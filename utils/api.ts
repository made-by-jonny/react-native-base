import axios from "axios";

const devURL: string = "http://192.168.1.118:1337";
const stagingURL: string = "";
const prodURL: string = "";

const api = axios.create({
  baseURL: devURL,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export default api;
