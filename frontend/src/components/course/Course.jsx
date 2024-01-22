import React, { useState } from "react";
import "./Course.css";
import { courses } from "../../dummyData";
import CourseCard from "./CourseCard";
import { Navigate } from "react-router-dom";

// import {LoginPage} from "../../Pages/LoginPage"
const Course = () => {
  const [isAuth] = useState(localStorage.getItem("token") || "");
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="courses">
      {courses.map((el) => (
        <div>
          <CourseCard
            video={el.video}
            number_of_videos={el.number_of_videos}
            title={el.title}
            likes={el.likes}
            comments={el.comments}
            views={el.views}
            id={el.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Course;
