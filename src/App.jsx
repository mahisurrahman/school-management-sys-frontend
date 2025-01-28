import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "./shared/layouts/AdminLayout/AdminLayout";
import AdminDashboard from "./features/AdminPanel/Pages/AdminDashboard/AdminDashboard";
import StudentManagement from "./features/AdminPanel/Pages/StudentManagement/StudentManagement";
import HomePage from "./features/Home/pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentManagement />} />
      </Route>
    </Routes>
  );
};

export default App;
