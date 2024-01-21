import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Course.css"
import { courses } from "../../dummyData";

const CourseSingle = () => {
    const {id} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const course = courses.find((el) => el.id === +id);
        setData(course)
      }, [])

  
  return (
    <div className="SingleCourse">
        {/* <div className="details-card">

        </div> */}
        <div className="video-card">
            <iframe width="100%" height="100%" src={data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default CourseSingle;
