import Header from "../components/common/Header";
import { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";

function CoursePage() {
  const [comments, setComments] = useState([
    { id: 1, name: "Adewale Tom", text: "Great explanation! The step-by-step breakdown made it so easy to follow.", time: "Yesterday" },
    { id: 2, name: "Blessing Igwe", text: "I'm still confused about the last part where you explained the formula. Can anyone clarify?", time: "4:20 pm" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        { id: comments.length + 1, name: "You", text: newComment, time: "Just now" },
      ]);
      setNewComment("");
    }
  };

  const relatedCourses = [
    { id: 1, title: "Understanding Geography 101", image: "/thumbnail.png" },
    { id: 2, title: "Understanding Geography 102", image: "/thumbnail.png" },
    { id: 3, title: "Understanding Geography 103", image: "/thumbnail.png" },
    { id: 4, title: "Understanding Geography 104", image: "/thumbnail.png" },
  ];

  return (
    <>
      <Header />
      <div className="px-7 py-10 lg:px-16">
        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Course progress: 62%</p>
          <div className="h-2 w-full bg-gray-200 rounded-lg">
            <div className="h-2 w-[62%] bg-blue-500 rounded-lg"></div>
          </div>
        </div>

        {/* Course Title */}
        <h1 className="mb-6 text-2xl font-bold">Understanding Geography</h1>

        {/* Video Section */}
        <div className="mb-10">
          <div className="relative aspect-video bg-gray-200">
            <img src="/thumbnail.png" alt="Course Video" className="absolute inset-0 object-cover w-full h-full" />
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
            {/* <button
              onClick={handleAddComment}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Post
            </button> */}
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {relatedCourses.map((course) => (
              <div key={course.id} className="cursor-pointer">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="h-24 w-full object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FiPlayCircle className="text-white text-4xl" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-center">{course.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Courses */}
        <div>
          <h2 className="mb-4 text-lg font-bold">Related Courses</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {relatedCourses.map((course) => (
              <div key={course.id} className="cursor-pointer">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="h-24 w-full object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FiPlayCircle className="text-white text-4xl" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-center">{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursePage;






// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { useCourseContext } from "../context/CourseContext";
// import ReactPlayer from "react-player";

// function CoursePage() {
//   const { id } = useParams();
//   const { courses, addComment } = useCourseContext();
//   const course = courses.find((course) => course.id === id);

//   const [newComment, setNewComment] = useState("");
//   const [progress, setProgress] = useState(0);

//   if (!course) {
//     return <p>Course not found.</p>;
//   }

//   const handleTimeUpdate = (e) => {
//     const video = e.target;
//     const progressPercent = (video.currentTime / video.duration) * 100;
//     setProgress(progressPercent);
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       addComment(course.id, { text: newComment, date: new Date() });
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{course.title}</h1>

//       <div className="my-4">
//         <label htmlFor="progress" className="block text-sm font-medium">
//           Course progress: {Math.round(progress)}%
//         </label>
//         <progress id="progress" value={progress} max="100" className="w-full"></progress>
//       </div>

//       <div className="my-6">
//         <ReactPlayer
//           url={course.videoUrl}
//           controls
//           width="100%"
//           height="100%"
//           onTimeUpdate={handleTimeUpdate}
//         />
//       </div>

//       <div className="my-8">
//         <h2 className="text-xl font-semibold">Comments</h2>
//         <div className="my-4">
//           {course.comments.length > 0 ? (
//             course.comments.map((comment, index) => (
//               <div key={index} className="my-2 border-b pb-2">
//                 <p>{comment.text}</p>
//                 <small className="text-gray-500">
//                   {new Date(comment.date).toLocaleString()}
//                 </small>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No comments yet.</p>
//           )}
//         </div>
//         <div className="mt-4 flex items-center">
//           <input
//             type="text"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Add a comment"
//             className="flex-grow border p-2"
//           />
//           <button
//             onClick={handleAddComment}
//             className="ml-2 bg-blue-500 text-white px-4 py-2"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       <div className="my-8">
//         <h2 className="text-xl font-semibold">Courses Playlist</h2>
//         <ul className="my-4 grid grid-cols-2 gap-4">
//           {course.playlist.map((lesson) => (
//             <li
//               key={lesson.id}
//               className={`p-4 border rounded-lg ${
//                 lesson.completed ? "bg-green-100" : ""
//               }`}
//             >
//               {lesson.title} {lesson.completed && <span>✓</span>}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="my-8">
//         <h2 className="text-xl font-semibold">Related Courses</h2>
//         <ul className="my-4 grid grid-cols-2 gap-4">
//           {course.relatedCourses.map((related) => (
//             <li
//               key={related.id}
//               className="p-4 border rounded-lg cursor-pointer"
//             >
//               {related.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default CoursePage;
