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
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AllRoutes;
