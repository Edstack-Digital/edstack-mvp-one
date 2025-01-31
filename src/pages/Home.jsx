// import Header from "../components/common/Header";
// import { FiPlayCircle } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import Lower from "../components/common/Lower";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// // import axios from "axios";

// function Home() {
//   const navigate = useNavigate();

//   // const courses = [
//   //   { id: 1, title: "Understanding Geography 101", image: "/thumbnail.png" },
//   //   { id: 2, title: "Understanding Geography 101", image: "/thumbnail.png" },
//   //   { id: 3, title: "Understanding Geography 101", image: "/thumbnail.png" },
//   //   { id: 4, title: "Understanding Geography 101", image: "/thumbnail.png" },
//   // ];

//   const handleCourseClick = (id) => {
//     navigate(`/course/${id}`);
//   };

//   return (
//     <>
//       <Header />
//       <div className="mt-11 mb-32 lg:mb-11 text-black dark:text-white bg-white dark:bg-black gap-10 px-7 font-[Satoshi] lg:px-16">
//         <div className="col-span-4">
//           <h1 className="mb-6 text-xl">Recommended courses</h1>

//           <div className="block lg:hidden">
//             <Swiper spaceBetween={16} slidesPerView={1.2} grabCursor={true}>
//               {courses.map((course) => (
//                 <SwiperSlide key={course.id}>
//                   <div className="overflow-hidden rounded-lg">
//                     <div
//                       className="relative cursor-pointer"
//                       onClick={() => handleCourseClick(course.id)}
//                     >
//                       <img
//                         src={course.image}
//                         alt={course.title}
//                         className="h-48 w-full object-cover"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <FiPlayCircle className="text-5xl text-white" />
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <h2 className="text-center text-lg font-[Vastago] ">
//                         {course.title}
//                       </h2>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//           <div className="hidden lg:grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {courses.map((course) => (
//               <div key={course.id} className="overflow-hidden rounded-lg">
//                 <div
//                   className="relative cursor-pointer"
//                   onClick={() => handleCourseClick(course.id)}
//                 >
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="h-48 w-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <FiPlayCircle className="text-5xl text-white" />
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-center text-lg font-[Vastago] ">
//                     {course.title}
//                   </h2>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-4">
//           <h1 className="mb-6 text-xl">Featured courses</h1>
//           <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
//             {courses.map((course) => (
//               <div key={course.id} className="overflow-hidden rounded-lg">
//                 <div
//                   className="relative cursor-pointer"
//                   onClick={() => handleCourseClick(course.id)}
//                 >
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="h-48 w-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <FiPlayCircle className="text-5xl text-white" />
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-center text-lg font-[Vastago]">
//                     {course.title}
//                   </h2>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Lower />
//     </>
//   );
// }

// export default Home;

// // const [showAd, setShowAd] = useState(true);

// //         {/* Right Section - Ads */}
// //         {/* {showAd && (
// //           <div className="hidden lg:block">
// //             <div className="sticky top-20 p-4">
// //               <button
// //                 onClick={() => setShowAd(false)}
// //                 className="absolute right-2  hover:text-gray-700"
// //               >
// //                 <FiX className="text-2xl" />
// //               </button>
// //               <h2 className="mb-4 text-lg font-bold">AD</h2>
// //               <p className="mb-11 mt-11 text-sm">
// //                 Take your learning to the next level with exclusive offers and
// //                 discounts. Visit our sponsors!
// //               </p>
// //               <img src="/glo.png" alt="Ad" className="w-full" />
// //               <p className="mt-11 text-sm text-blue-400">
// //                 Glo 4G LTE Network - Experience High Speed 4G Mobile Internet
// //               </p>
// //             </div>
// //           </div>
// //         )} */}

import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import { FiPlayCircle } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Lower from "../components/common/Lower";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import axios from "axios";
import ReactPlayer from "react-player";

function Home() {
  const navigate = useNavigate();

  // State to hold courses fetched from the API
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/tutorials/Video/",
        );
        setCourses(response.data); // Assuming the API returns an array of courses
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses. Please try again later.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen mt-11 overflow-hidden -mb-0 lg:-mb-20 gap-10 bg-white px-7 font-[Satoshi] text-black dark:bg-black dark:text-white lg:px-16">
        {loading && <p>Loading courses...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {/* Recommended Courses */}
            <div className="col-span-4">
              <h1 className="mb-6 text-xl">Recommended courses</h1>

              {/* Swiper for smaller screens */}
              <div className="block lg:hidden">
                <Swiper spaceBetween={16} slidesPerView={1.2} grabCursor={true}>
                  {courses.map((course) => (
                    <SwiperSlide key={course.id}>
                      <div className="overflow-hidden rounded-lg">
                        <div
                          className="relative cursor-pointer"
                          onClick={() => handleCourseClick(course.id)}
                        >
                          <ReactPlayer
                        url={course.url}
                        playing={hoveredCourse === course.id} 
                        // muted={true} // Always muted on hover
                        width="100%"
                        height="100%"
                      />
                        </div>
                        <div className="p-4">
                          <h2 className="text-center font-[Vastago] text-lg">
                            {course.title}
                          </h2>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Grid for larger screens */}
              <div className="hidden grid-cols-2 gap-6 sm:grid-cols-2 lg:grid lg:grid-cols-4">
                {courses.map((course) => (
                  <div key={course.id} className="overflow-hidden rounded-lg">
                    <div
                      className="relative cursor-pointer"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <div
                      className="relative cursor-pointer"
                      onClick={() => handleCourseClick(course.id)}
                      onMouseEnter={() => setHoveredCourse(course.id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                    >
                      <ReactPlayer
                        url={course.url}
                        playing={hoveredCourse === course.id} 
                        // muted={true} // Always muted on hover
                        width="100%"
                        height="100%"
                      />
                    </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-center font-[Vastago] text-lg">
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Courses */}
            <div className="col-span-4">
              <h1 className="mb-6  lg:mt-14 mt-0 text-xl">Featured courses</h1>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {courses.map((course) => (
                  <div key={course.id} className="overflow-hidden rounded-lg">
                    <div
                      className="relative cursor-pointer"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <img
                        src={course.image || "/thumbnail.png"}
                        alt={course.title}
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <FiPlayCircle className="text-5xl text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-center font-[Vastago] text-lg">
                        {course.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Lower />
    </>
  );
}

export default Home;
