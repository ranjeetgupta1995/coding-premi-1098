import React from "react"
import "./Course.css"
import { courses } from "../../dummyData";
import CourseCard from "./CourseCard";

const Course = () => {
  
  return (
    <div className="courses">
      {courses.map((el) => (
        <div>
            <CourseCard video={el.video} number_of_videos={el.number_of_videos} title={el.title} likes={el.likes} comments={el.comments} />
        </div>
      ))}
    </div>
  )
}

export default Course;
