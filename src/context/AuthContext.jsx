
import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Helper function to store tokens and decode user
  const storeTokens = (accessToken, refreshToken) => {
    try {
      const decoded = jwt_decode(accessToken);
      setUser(decoded);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      console.error("Invalid token:", error);
      logout();
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      // const response = await fetch("https://edstack-api.onrender.com/auth/login/", {
      const response = await fetch("https://api.edstack.xyz/auth/login/", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok && data.access && data.refresh) {
        storeTokens(data.access, data.refresh);
        navigate("/profile"); // Redirect to profile page after login
      } else {
        throw new Error(data.detail || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Signup function
  // Signup function
  const signup = async (userData) => {
    try {

  
      const response = await fetch("https://api.edstack.xyz/auth/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        console.log("Signup Successful:", data);
        navigate("/signin");
      } else {
        throw new Error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };


  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const decoded = jwt_decode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          logout();
        }
      } catch (error) {
        console.error("Token error:", error);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}



/* eslint-disable no-useless-catch */
// import { createContext, useState, useEffect, useContext } from "react";
// import { api, setAuthToken } from "../api/api";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setAuthToken(token);
//       fetchUserProfile();
//     } else {
//       setLoading(false);

//     }

//   }, []);

//   const fetchUserProfile = async () => {
//     try {
//       const response = await api.get("profile/");
//       console.log("User data fetched from API:", response.data);
//       if (response.data) {
//         setUser(response.data);
//       } else {
//         console.error("No user data returned from API.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch user profile:", error);
//       localStorage.removeItem("token");
//       setAuthToken(null);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

// console.log("User from AuthContext:", user);

// const login = async ({ email, password }) => {
//   try {
//     const response = await api.post("login/", { email, password });
//     const { token, user } = response.data;

//     console.log("Login Token:", token);
//     localStorage.setItem("token", token);
//     setAuthToken(token);
//     setUser(user);
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Login failed");
//   }
// };

// const signup = async ({ name, email, password }) => {
//   try {
//     const response = await api.post("signup/", { name, email, password });
//     const { token, user } = response.data;

//     console.log("Signup Token:", token);
//     localStorage.setItem("token", token);
//     setAuthToken(token);
//     setUser(user);
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Signup failed");
//   }
// };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setAuthToken(null);
//     setUser(null);
//   };

//   console.log(localStorage.getItem("token"));

//   return (
//     <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/context/AuthContext.js
// import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || null); // Get token from localStorage
//   const navigate = useNavigate();

//   // Check if the token exists and set the user
//   useEffect(() => {
//     if (token) {
//       setUser({ token }); // This is where you'd typically fetch user info if you had an endpoint.
//       console.log(token)
//       console.log(setUser)
//     } else {
//       setUser(null); // No token, user is not logged in
//     }
//   }, [token]);

//   // Handle login
//   const login = async (credentials) => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", credentials);
//       const { access } = response.data; // Assuming the response contains the access token
//       localStorage.setItem("token", access); // Save token to localStorage
//       setToken(access); // Set token in state
//       navigate("/profile");
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   // Handle signup
//   const signup = async (userData) => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/auth/signup/", userData);
//       const { access } = response.data; // Assuming the response contains the access token
//       localStorage.setItem("token", access); // Save token to localStorage
//       setToken(access); // Set token in state
//       navigate("/profile");
//     } catch (error) {
//       console.error("Signup failed", error);
//     }
//   };

//   // Handle logout
//   const logout = () => {
//     localStorage.removeItem("token"); // Remove token from localStorage
//     setToken(null); // Clear the token in state
//     navigate("/login");
//   };

//   const value = {
//     user,
//     token,
//     login,
//     signup,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

// import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { jwtDecode } from 'jwt-decode'; // Correct import

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const navigate = useNavigate();

//   // Decode the token and set the user
//   useEffect(() => {
//     const checkAuth = async () => {
//         const token = localStorage.getItem('accessToken');
//         if (token) {
//             try {
//                 const decodedToken = jwtDecode(token);
//                 // Now you can use decodedToken
//                 console.log('Decoded Token:', decodedToken);
//                 // Example logic (adapt as needed):
//                 if(decodedToken.exp * 1000 > Date.now()){
//                     const response = await axios.get(`/api/user/${decodedToken.id}`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     });

//                     setUser(response.data)
//                 } else{
//                     localStorage.removeItem('accessToken');
//                 }

//             } catch (error) {
//                 console.error('Error decoding token or fetching user:', error);
//                 localStorage.removeItem('accessToken');
//             }
//         }
//         setLoading(false);
//     };

//     checkAuth();
// }, []);

//   // Handle login
//   const login = async (credentials) => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", credentials);
//       const { access } = response.data; // Assuming the response contains the access token
//       localStorage.setItem("token", access); // Save token to localStorage
//       setToken(access); // Set token in state
//       navigate("/profile");
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   // Handle signup
//   const signup = async (userData) => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/auth/signup/", userData);
//       const { access } = response.data; // Assuming the response contains the access token
//       localStorage.setItem("token", access); // Save token to localStorage
//       setToken(access); // Set token in state
//       navigate("/profile");
//     } catch (error) {
//       console.error("Signup failed", error);
//     }
//   };

//   // Handle logout
//   const logout = () => {
//     localStorage.removeItem("token"); // Remove token from localStorage
//     setToken(null); // Clear the token in state
//     navigate("/login");
//   };

//   const value = {
//     user,
//     token,
//     login,
//     signup,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

// Deepseek
