// src/components/AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blogs';
import Course from './course/Course';


function AllRoutes() {
  return (
    <Routes>
      
          <Route path="/course" element={<Course />} />
           <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
}

export default AllRoutes;