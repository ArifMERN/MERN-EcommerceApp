import axios from "axios";
const baseURL = axios.create({
  baseURL: "http://localhost:4500/api/v1/auth/",
  withCredentials: true,
});


export default baseURL;