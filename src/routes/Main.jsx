import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tutor from "../pages/Tutor";
import Mock from "../pages/Mock";
import Community from "../pages/Community";
import Blog from "../pages/Blog";

function Main() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default Main;



// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "../pages/Home";
// import Tutor from "../pages/Tutor";
// import Mock from "../pages/Mock";
// import Community from "../pages/Community";
// import Blog from "../pages/Blog";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "tutor",
//       element: <Tutor />,
//     },
//     {
//       path: "mock",
//       element: <Mock />,
//     },
//     {
//       path: "community",
//       element: <Community />,
//     },
//     {
//       path: "blog",
//       element: <Blog />,
//     },
//   ],
//   {
//     future: { v7_relativeSplatPath: true }, // Opt-in to v7 behavior
//   }
// );

// function Main() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default Main;
