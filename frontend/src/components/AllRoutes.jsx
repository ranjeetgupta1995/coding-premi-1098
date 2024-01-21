// src/components/AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blogs';
import About from './About';
import Course from './course/Course';
// import CourseSingle from './course/CourseSingle';


function AllRoutes() {
  return (
    <Routes>
      
      <Route path="/about" element={<About/>}/>
      <Route path="/blogs" element={<Blog />} />
      <Route path="/course" element={<Course />} />
      {/* <Route path="/course/:id" element={<CourseSingle />} /> */}
    </Routes>
  );
}

export default AllRoutes;