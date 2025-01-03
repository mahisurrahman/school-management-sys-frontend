import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "./shared/layouts/AdminLayout/AdminLayout";
import AdminDashboard from "./features/AdminPanel/Pages/AdminDashboard/AdminDashboard";

const App = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
