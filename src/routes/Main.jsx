import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tutor from "../pages/Tutor";
import Mock from "../pages/Mock";
import Community from "../pages/Community";
import Blog from "../pages/Blog";
import { useState } from "react";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";

function Main() {
const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />


        <Route
          path="/signin"
          element={<Auth setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
  );
}

export default Main;
