import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import { FiPlayCircle } from "react-icons/fi";

function CoursePage() {
  const [comments, setComments] = useState([
    { id: 1, name: "Adewale Tom", text: "Great explanation! The step-by-step breakdown made it so easy to follow.", time: "Yesterday" },
    { id: 2, name: "Blessing Igwe", text: "I'm still confused about the last part where you explained the formula. Can anyone clarify?", time: "4:20 pm" },
  ]);

  const [newComment, setNewComment] = useState("");
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from the backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/tutorials/Course/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRelatedCourses(data); // Assuming API returns an array of course objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        { id: comments.length + 1, name: "You", text: newComment, time: "Just now" },
      ]);
      setNewComment("");
    }
  };

  return (
    <>
      <Header />
      <div className="px-7 py-10 lg:px-16">
        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Course progress: 62%</p>
          <div className="h-2 w-full bg-gray-200 mt-3 rounded-lg">
            <div className="h-2 w-[62%] bg-blue-500 rounded-lg"></div>
          </div>
        </div>

        {/* Course Title */}
        <h1 className="mb-6 text-2xl font-bold">Understanding Geography</h1>

        {/* Video Section */}
        <div className="mb-10">
          <div className="relative aspect-video bg-gray-200">
            <img src="https://www.youtube.com/watch?v=0PiSywTTYZY" alt="Course Video" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <FiPlayCircle className="text-white text-6xl" />
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold">Comments ({comments.length})</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
                <p className="font-bold text-sm">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.time}</p>
                <p className="mt-2 text-sm">{comment.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-grow border border-gray-300 p-2 rounded-lg"
            />
            <button
              onClick={handleAddComment}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>

        {/* Interactive Section */}
        <div className="mb-10">
          <a href="/mock" className="text-blue-500 hover:underline">
            Take Mockup Test
          </a>
        </div>

        {/* Courses Playlist */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold">Courses Playlist</h2>
          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {relatedCourses.map((course) => (
                <div key={course.id} className="cursor-pointer">
                  <div className="relative">
                    <img
                      src={course.image || "/default-thumbnail.png"}
                      alt={course.title}
                      className="h-24 w-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <FiPlayCircle className="text-white text-4xl" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-center">{course.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related Courses */}
        <div>
          <h2 className="mb-4 text-lg font-bold">Related Courses</h2>
          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {relatedCourses.map((course) => (
                <div key={course.id} className="cursor-pointer">
                  <div className="relative">
                    <img
                      src={course.image || "/default-thumbnail.png"}
                      alt={course.title}
                      className="h-24 w-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <FiPlayCircle className="text-white text-4xl" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-center">{course.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CoursePage;
