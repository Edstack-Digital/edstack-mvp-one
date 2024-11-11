import Header from "../components/common/Header";
import { FiPlayCircle } from "react-icons/fi";

function Home() {
  const courses = [
    {
      id: 1,
      title: "Understanding Geography 101",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Introduction to Biology",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 3,
      title: "History of Art",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  return (
    <>
      <Header />
      <div className="mt-11 px-4 lg:px-16 font-[Satoshi]">
        {/* Recommended Courses Section */}
        <div>
          <h1 className="text-xl mb-6">Recommended courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                {/* Course Image with Play Button Overlay */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                    <FiPlayCircle className="text-white text-5xl" />
                  </div>
                </div>
                {/* Course Title */}
                <div className="p-4">
                  <h2 className="text-center text-lg font-semibold">{course.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-6 mt-16">Featured courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                {/* Course Image with Play Button Overlay */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                    <FiPlayCircle className="text-white text-5xl" />
                  </div>
                </div>
                {/* Course Title */}
                <div className="p-4">
                  <h2 className="text-center text-lg font-semibold">{course.title}</h2>
                </div>
              </div>
            ))}
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                {/* Course Image with Play Button Overlay */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                    <FiPlayCircle className="text-white text-5xl" />
                  </div>
                </div>
                {/* Course Title */}
                <div className="p-4">
                  <h2 className="text-center text-lg font-semibold">{course.title}</h2>
                </div>
              </div>
            ))}
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                {/* Course Image with Play Button Overlay */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                    <FiPlayCircle className="text-white text-5xl" />
                  </div>
                </div>
                {/* Course Title */}
                <div className="p-4">
                  <h2 className="text-center text-lg font-semibold">{course.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
