import Header from "../components/common/Header";
import { FiPlayCircle, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Lower from "../components/common/Lower";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [showAd, setShowAd] = useState(true);

  const courses = [
    { id: 1, title: "Understanding Geography 101", image: "/thumbnail.png" },
    { id: 2, title: "Understanding Geography 101", image: "/thumbnail.png" },
    { id: 3, title: "Understanding Geography 101", image: "/thumbnail.png" },
  ];

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <>
      <Header />
      <div className="mt-11 mb-11 grid grid-cols-2 text-black dark:text-white bg-white dark:bg-black gap-10 px-7 font-[Satoshi] lg:grid-cols-4 lg:px-16">
        {/* Left Section - Courses */}
        <div className="col-span-3">
          <h1 className="mb-6 text-xl">Recommended courses</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="overflow-hidden rounded-lg">
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FiPlayCircle className="text-5xl text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-lg font-[Vastago] ">
                    {course.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="mb-6 text-xl">Featured courses</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="overflow-hidden rounded-lg">
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FiPlayCircle className="text-5xl text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-lg font-[Vastago">
                    {course.title}
                  </h2>
                </div>
              </div>
            ))}
            {courses.map((course) => (
              <div key={course.id} className="overflow-hidden rounded-lg">
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FiPlayCircle className="text-5xl text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-lg font-[Vastago">
                    {course.title}
                  </h2>
                </div>
              </div>
            ))}
            {courses.map((course) => (
              <div key={course.id} className="overflow-hidden rounded-lg">
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FiPlayCircle className="text-5xl text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-lg font-[Vastago">
                    {course.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* Right Section - Ads */}
        {showAd && (
          <div className="hidden lg:block">
            <div className="sticky top-20 p-4">
              <button
                onClick={() => setShowAd(false)}
                className="absolute right-2  hover:text-gray-700"
              >
                <FiX className="text-2xl" />
              </button>
              <h2 className="mb-4 text-lg font-bold">AD</h2>
              <p className="mb-11 mt-11 text-sm">
                Take your learning to the next level with exclusive offers and
                discounts. Visit our sponsors!
              </p>
              <img src="/glo.png" alt="Ad" className="w-full" />
              <p className="mt-11 text-sm text-blue-400">
                Glo 4G LTE Network - Experience High Speed 4G Mobile Internet
              </p>
            </div>
          </div>
        )}
      </div>
      <Lower />
    </>
  );
}

export default Home;





// import Header from "../components/common/Header";
// import { FiPlayCircle, FiX } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import Lower from "../components/common/Lower";
// import { useState } from "react";

// function Home() {
//   const navigate = useNavigate();
//   const [showAd, setShowAd] = useState(true);

//   // Mocked course data with video URLs
//   const courses = [
//     {
//       id: 1,
//       title: "Understanding Geography 101",
//       image: "/thumbnail.png",
//       videoUrl: "https://www.youtube.com/watch?v=ICfx8PC4HLk",
//     },
//     {
//       id: 2,
//       title: "Advanced Geography 202",
//       image: "/thumbnail2.png",
//       videoUrl: "/videos/advanced-geography202.mp4",
//     },
//     {
//       id: 3,
//       title: "World Geography Essentials",
//       image: "/thumbnail3.png",
//       videoUrl: "/videos/world-geography-essentials.mp4",
//     },
//   ];

//   // Navigate to the CoursePage with the selected course's data
//   const handleCourseClick = (course) => {
//     navigate(`/course/${course.id}`, { state: { course } });
//   };

//   return (
//     <>
//       <Header />
//       <div className="mt-11 mb-11 grid grid-cols-1 bg-white gap-10 px-7 font-[Satoshi] lg:grid-cols-4 lg:px-16">
//         {/* Left Section - Courses */}
//         <div className="col-span-3">
//           <h1 className="mb-6 text-xl">Recommended Courses</h1>
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {courses.map((course) => (
//               <div key={course.id} className="overflow-hidden rounded-lg">
//                 <div
//                   className="relative cursor-pointer"
//                   onClick={() => handleCourseClick(course)}
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

//         {/* Right Section - Ads */}
//         {showAd && (
//           <div className="hidden lg:block">
//             <div className="sticky top-20 p-4">
//               <button
//                 onClick={() => setShowAd(false)}
//                 className="absolute right-2 hover:text-gray-700"
//               >
//                 <FiX className="text-2xl" />
//               </button>
//               <h2 className="mb-4 text-lg font-bold">AD</h2>
//               <p className="mb-11 mt-11 text-sm">
//                 Take your learning to the next level with exclusive offers and
//                 discounts. Visit our sponsors!
//               </p>
//               <img src="/glo.png" alt="Ad" className="w-full" />
//               <p className="mt-11 text-sm text-blue-400">
//                 Glo 4G LTE Network - Experience High-Speed 4G Mobile Internet
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//       <Lower />
//     </>
//   );
// }

// export default Home;
