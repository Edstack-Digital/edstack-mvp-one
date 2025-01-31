import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/";

const api = axios.create({
  baseURL: API_URL,
});

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers["Authorization"];
  }
};

export { api, setAuthToken };
