import { createContext, useState, useContext } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: "1",
      title: "Understanding Geography",
      videoUrl: "/sample-video.mp4",
      playlist: [
        { id: "101", title: "Lesson 1" },
        { id: "102", title: "Lesson 2", completed: true },
        { id: "103", title: "Lesson 3" },
      ],
      relatedCourses: [
        { id: "201", title: "Advanced Geography" },
        { id: "202", title: "Physical Geography" },
      ],
      comments: [],
    },
  ]);

  const addComment = (courseId, comment) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, comments: [...course.comments, comment] }
          : course
      )
    );
  };

  return (
    <CourseContext.Provider value={{ courses, addComment }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => useContext(CourseContext);
