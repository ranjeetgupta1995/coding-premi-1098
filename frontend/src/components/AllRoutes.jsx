// src/components/AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blogs';
import { HomePage } from '../Pages/HomePage';



function AllRoutes() {
  return (
    <Routes>
      

<Route path="/" element={<HomePage />} />
           <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
}

export default AllRoutes;