import React from "react"
import "./Course.css"
import { Link } from "react-router-dom";

const CourseCard = ({video, title, number_of_videos, likes, comments, views, id}) => {
  
  return (
    <>
      <div className="courseContainer">
        <div className="videoContainer">
            <iframe style={{borderRadius: "3%"}} width="470" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="description">
            <Link to={`/course/${id}`} style={{textDecoration: "none", color: "black"}} >
              <h4 style={{marginLeft: "10px"}}>{title}<span id="numberOfVideos" style={{color: "gray"}}> ({number_of_videos} videos)</span></h4>
              <div style={{display: "flex", justifyContent: "space-between", marginLeft: "5px", marginRight: "10px"}}>
                <h4>👍 {likes}</h4>
                <h4>💬 {comments}</h4>
                <h4>👁️‍🗨️ {views}</h4>
              </div>
            </Link>
        </div>
      </div>
    </>
  )
}

export default CourseCard;
