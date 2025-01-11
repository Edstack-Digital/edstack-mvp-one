import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  const signup = async (data) => {
    const response = await axios.post("http://127.0.0.1:8000/api/auth/signup/", data);
    const { token, user } = response.data;
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
  };

  const login = async (data) => {
    const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", data);
    const { token, user } = response.data;
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, token, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api/auth";
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Load user and token from local storage on initial load
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     const savedToken = localStorage.getItem("token");

//     if (savedUser && savedToken) {
//       setUser(savedUser);
//       setToken(savedToken);
//     }
//   }, []);

//   const signup = async (userData) => {
//     try {
//       const response = await axios.post(`${API_URL}/signup/`, userData);
//       const { user: newUser, token: newToken } = response.data;
//       setUser(newUser);
//       setToken(newToken);
//       localStorage.setItem("user", JSON.stringify(newUser));
//       localStorage.setItem("token", newToken);
//     } catch (error) {
//       console.error("Signup failed:", error.response ? error.response.data : error);
//       throw error; // Rethrow error to handle it in the UI
//     }
//   };

//   const login = async (credentials) => {
//     try {
//       const response = await axios.post(`${API_URL}/login/`, credentials);
//       const { userData, token: newToken } = response.data;
//       setUser(userData);
//       setToken(newToken);
//       localStorage.setItem("user", JSON.stringify(userData));
//       localStorage.setItem("token", newToken);
//     } catch (error) {
//       console.error("Login failed:", error.response ? error.response.data : error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post(`${API_URL}/logout/`, null, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//     } catch (error) {
//       console.warn("Logout request failed, but clearing session locally.");
//     } finally {
//       setUser(null);
//       setToken(null);
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//     }
//   };

//   const refreshToken = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/refresh/`, null, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const newToken = response.data.token;
//       setToken(newToken);
//       localStorage.setItem("token", newToken);
//     } catch (error) {
//       console.error("Token refresh failed:", error);
//       logout(); // Log out if refresh fails
//     }
//   };

//   const fetchSecureData = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/secureview/`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         console.warn("Token expired. Refreshing...");
//         await refreshToken();
//         return fetchSecureData(); // Retry after refreshing token
//       } else {
//         console.error("Failed to fetch secure data:", error);
//         throw error;
//       }
//     }
//   };

//   useEffect(() => {
//     // Auto refresh token every 15 minutes
//     const interval = setInterval(() => {
//       if (token) refreshToken();
//     }, 15 * 60 * 1000); // 15 minutes in milliseconds
//     return () => clearInterval(interval);
//   }, [token]);

//   return (
//     <AuthContext.Provider value={{ user, signup, login, logout, fetchSecureData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
