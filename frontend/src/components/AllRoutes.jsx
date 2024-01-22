// src/components/AllRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Blog } from "./Blogs";
import About from "./About";
import Course from "./course/Course";
import { ContactPage } from "../Pages/ContactPage";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/course" element={<Course />} />
<<<<<<< HEAD
      <Route path="/contact" element={<ContactPage />} />
=======

>>>>>>> bb9bea139f83fd5006a7991eacb484baee7b6e1f
    </Routes>
  );
}

export default AllRoutes;
