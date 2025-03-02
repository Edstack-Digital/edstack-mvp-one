import axios from "axios";
// const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = "https://api.edstack.xyz/api/auth/";
// const API_URL = "http://127.0.0.1:8000";
const API_URL = "https://api.edstack.xyz";
const api = axios.create({
  baseURL: API_URL,
});

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
    api.defaults.headers["ngrok-skip-browser-warning"] = " ";
  } else {
    delete api.defaults.headers["Authorization"];
    api.defaults.headers["ngrok-skip-browser-warning"] = " ";
  }
};

export { api, setAuthToken, API_URL };
