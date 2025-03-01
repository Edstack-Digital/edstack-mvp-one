import axios from "axios";

const API_URL = "https://edstack-api.onrender.com/api/auth/";
// const API_URL = "https://69fe-102-89-46-216.ngrok-free.app"

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
