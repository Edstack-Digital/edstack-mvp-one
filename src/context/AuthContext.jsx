import { createContext, useState, useEffect, useContext } from "react";
import { api, setAuthToken } from "../api/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchUserProfile(); 
    } else {
      setLoading(false); 
      
    }

  }, []);


  

  const fetchUserProfile = async () => {
    try {
      const response = await api.get("profile/");
      console.log("User data fetched from API:", response.data); 
      if (response.data) {
        setUser(response.data);
      } else {
        console.error("No user data returned from API.");
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      localStorage.removeItem("token");
      setAuthToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  

  
console.log("User from AuthContext:", user); 


  

const login = async ({ email, password }) => {
  try {
    const response = await api.post("login/", { email, password });
    const { token, user } = response.data;

    console.log("Login Token:", token); 
    localStorage.setItem("token", token);
    setAuthToken(token);
    setUser(user);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

const signup = async ({ name, email, password }) => {
  try {
    const response = await api.post("signup/", { name, email, password });
    const { token, user } = response.data;

    console.log("Signup Token:", token); 
    localStorage.setItem("token", token);
    setAuthToken(token);
    setUser(user);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};


  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
  };

  console.log(localStorage.getItem("token"));


  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
