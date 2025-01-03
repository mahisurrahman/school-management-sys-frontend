import React from "react";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import { Outlet } from "react-router";
import TopHeader from "../../../shared/components/navigationBar/TopHeader/TopHeader";

function AdminLayout() {
  return (
    <div className="font-poppins flex">
      <NavigationBar />
      <div className="w-full h-screen overflow-y-auto">
        <TopHeader />
        <div className="px-5 py-5 bg-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
