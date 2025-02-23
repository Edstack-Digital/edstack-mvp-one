import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import { FiPlayCircle } from "react-icons/fi";
import ReactPlayer from "react-player";
import axios from "axios";
import { useParams } from "react-router-dom";

function CoursePage() {
  const [comments, setComments] = useState([
    { id: 1, name: "Adewale Tom", text: "Great explanation! The step-by-step breakdown made it so easy to follow.", time: "Yesterday" },
    { id: 2, name: "Blessing Igwe", text: "I'm still confused about the last part where you explained the formula. Can anyone clarify?", time: "4:20 pm" },
  ]);

  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://edstack-api.onrender.com/tutorials/video/${id}`);
        if (!response.ok) {
          throw new Error("Course not found");
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

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
        <h1 className="mb-6 text-2xl font-bold">{course?.title || "Loading..."}</h1>

        {/* Video Section */}
        <div className="mb-10">
          <div className="relative aspect-video bg-gray-200">
            {course?.url && (
              <ReactPlayer url={course.url} width="100%" height="100%" />
            )}
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
      </div>
    </>
  );
}

export default CoursePage;
