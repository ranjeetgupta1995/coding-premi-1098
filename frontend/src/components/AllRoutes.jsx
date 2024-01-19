// src/components/AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blogs';


function AllRoutes() {
  return (
    <Routes>
      
     
           <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
}

export default AllRoutes;