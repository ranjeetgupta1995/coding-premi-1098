// src/components/AllRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Blog } from "./Blogs";
import About from "./About";
import Course from "./course/Course";
import { ContactPage } from "../Pages/ContactPage";
import { HomePage } from "../Pages/HomePage";
import CourseSingle from "./course/CourseSingle";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignupPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/course" element={<Course />} />
      <Route path="/course/:id" element={<CourseSingle/>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default AllRoutes;
