import React from "react";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import { Outlet } from "react-router";
import TopHeader from "../../../shared/components/navigationBar/TopHeader/TopHeader";

function AdminLayout() {
  return (
    <div className="grid grid-cols-12 bg-green-500">
      <div className="col-span-2">
        <NavigationBar />
      </div>
      <div className="col-span-10 w-full">
        <TopHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
