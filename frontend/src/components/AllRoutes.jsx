// src/components/AllRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blogs';
import About from './About';
import Course from './course/Course';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignupPage';


function AllRoutes() {
  return (
    <Routes>
      
      <Route path="/about" element={<About/>}/>
      <Route path="/blogs" element={<Blog />} />
      <Route path="/course" element={<Course />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignUpPage" element={<SignUpPage />} />
    </Routes>
  );
}

export default AllRoutes;