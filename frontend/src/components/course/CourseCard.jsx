import React from "react"
import "./Course.css"

const CourseCard = ({video, title, number_of_videos, likes, comments}) => {
  
  return (
    <>
      <div className="courseContainer">
        <div className="videoContainer">
            <iframe width="470" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="description">
            <h4 style={{marginLeft: "4px"}}>{title}<span id="numberOfVideos"> ({number_of_videos} videos)</span></h4>
            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "4px", marginRight: "4px"}}>
                <p>Likes: {likes}</p>
                <p>Comments: {comments}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard;
