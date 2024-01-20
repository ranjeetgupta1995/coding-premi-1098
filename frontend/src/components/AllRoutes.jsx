// src/components/AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blogs';
import About from './About';


function AllRoutes() {
  return (
    <Routes>
      
      <Route path="/about" element={<About/>}/>
           <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
}

export default AllRoutes;