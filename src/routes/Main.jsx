import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tutor from "../pages/Tutor";
import Mock from "../pages/Mock";
import Community from "../pages/Community";
import Blog from "../pages/Blog";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";
import { AuthProvider } from "../context/AuthContext";
import CoursePage from "../pages/CoursePage";
import { CourseProvider } from "../context/CourseContext";

function Main() {
  return (
    <div className="bg-white dark:bg-black">
      <AuthProvider>
        <CourseProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/mock" element={<Mock />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signin" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </CourseProvider>
      </AuthProvider>
    </div>
  );
}

export default Main;
